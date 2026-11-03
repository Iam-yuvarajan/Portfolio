"use client";

import { useId, useState } from "react";
import { Send } from "lucide-react";
import { toast } from "sonner";
import { portfolio } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

/*
 * This form needs no backend: on submit it opens the visitor's email app with
 * every field prefilled (mailto:).
 *
 * OPTIONAL UPGRADE: send messages directly instead of opening the mail app.
 *  • Formspree (no code on the server):
 *      1. Create a form at https://formspree.io and copy its endpoint.
 *      2. In onSubmit, replace the `window.location.href = ...` line with:
 *           await fetch("https://formspree.io/f/YOUR_ID", {
 *             method: "POST",
 *             headers: { "Content-Type": "application/json", Accept: "application/json" },
 *             body: JSON.stringify(values),
 *           });
 *  • Resend (your own API route):
 *      1. `npm i resend`, add RESEND_API_KEY in Vercel → Settings → Environment Variables.
 *      2. Create src/app/api/contact/route.ts that calls
 *           new Resend(process.env.RESEND_API_KEY).emails.send({ from, to, subject, text })
 *      3. POST the form values to "/api/contact" from onSubmit.
 */

type Field = "name" | "email" | "subject" | "message";
type Values = Record<Field, string>;
type Errors = Partial<Record<Field, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(v: Values): Errors {
  const errors: Errors = {};
  if (v.name.trim().length < 2) errors.name = "Please enter your name.";
  if (!EMAIL_RE.test(v.email.trim())) errors.email = "Please enter a valid email address.";
  if (v.subject.trim().length < 3) errors.subject = "Please add a short subject.";
  if (v.message.trim().length < 10) errors.message = "Message should be at least 10 characters.";
  return errors;
}

const inputClass =
  "w-full rounded-md border border-input bg-background px-3 py-2 text-sm transition-colors placeholder:text-muted-foreground/80 aria-[invalid=true]:border-destructive";

export function ContactForm() {
  const id = useId();
  const [values, setValues] = useState<Values>({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});

  const update = (field: Field) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((v) => ({ ...v, [field]: e.target.value }));
    if (errors[field]) setErrors((err) => ({ ...err, [field]: undefined }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    const first = (Object.keys(found) as Field[])[0];
    if (first) {
      document.getElementById(`${id}-${first}`)?.focus();
      return;
    }
    const body = `${values.message.trim()}\n\n— ${values.name.trim()} (${values.email.trim()})`;
    window.location.href = `mailto:${portfolio.contact.email}?subject=${encodeURIComponent(
      values.subject.trim(),
    )}&body=${encodeURIComponent(body)}`;
    toast.success("Opening your email app…", { description: "Just press send there." });
  };

  const field = (name: Field, label: string, input: React.ReactElement) => (
    <div className={cn("space-y-1.5", name === "message" && "sm:col-span-2", name === "subject" && "sm:col-span-2")}>
      <label htmlFor={`${id}-${name}`} className="text-sm font-medium">
        {label}
      </label>
      {input}
      {errors[name] && (
        <p id={`${id}-${name}-error`} className="text-xs text-destructive">
          {errors[name]}
        </p>
      )}
    </div>
  );

  const common = (name: Field) => ({
    id: `${id}-${name}`,
    name,
    value: values[name],
    onChange: update(name),
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `${id}-${name}-error` : undefined,
    className: inputClass,
  });

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-4 sm:grid-cols-2" aria-label="Contact form">
      {field("name", "Name", <input type="text" autoComplete="name" placeholder="Your name" {...common("name")} />)}
      {field("email", "Email", <input type="email" autoComplete="email" placeholder="you@example.com" {...common("email")} />)}
      {field("subject", "Subject", <input type="text" placeholder="What's this about?" {...common("subject")} />)}
      {field("message", "Message", <textarea rows={5} placeholder="Tell me a little about it…" {...common("message")} className={cn(inputClass, "resize-y")} />)}
      <div className="sm:col-span-2">
        <Button type="submit" className="w-full sm:w-auto">
          <Send aria-hidden />
          Send message
        </Button>
      </div>
    </form>
  );
}
