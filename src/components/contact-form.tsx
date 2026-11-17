"use client";

import { useId, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { cn } from "@/lib/utils";

type Field = "name" | "email" | "subject" | "message";
type Values = Record<Field, string>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const id = useId();
  const [values, setValues] = useState<Values>({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [note, setNote] = useState("");

  const update = (field: Field) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((v) => ({ ...v, [field]: e.target.value }));
    if (errors[field]) setErrors((err) => ({ ...err, [field]: undefined }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const found: Partial<Record<Field, string>> = {};
    if (values.name.trim().length < 2) found.name = "Please enter your name.";
    if (!EMAIL_RE.test(values.email.trim())) found.email = "Please enter a valid email address.";
    if (values.subject.trim().length < 3) found.subject = "Please add a short subject.";
    if (values.message.trim().length < 10) found.message = "Message should be at least 10 characters.";
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
    setNote("Opening your email app… just press send there.");
  };

  const field = (name: Field, label: string, input: React.ReactElement, wide = false) => (
    <label htmlFor={`${id}-${name}`} className={cn("block space-y-2", wide && "sm:col-span-2")}>
      <span className="eyebrow">{label}</span>
      {input}
      {errors[name] && <span className="block text-xs text-paper/70">{errors[name]}</span>}
    </label>
  );

  const common = (name: Field) => ({
    id: `${id}-${name}`,
    name,
    value: values[name],
    onChange: update(name),
    "aria-invalid": errors[name] ? true : undefined,
    className: "field",
  });

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2" aria-label="Contact form">
      {field("name", "Name", <input type="text" autoComplete="name" placeholder="Your name" {...common("name")} />)}
      {field("email", "Email", <input type="email" autoComplete="email" placeholder="you@example.com" {...common("email")} />)}
      {field("subject", "Subject", <input type="text" placeholder="What's this about?" {...common("subject")} />, true)}
      {field(
        "message",
        "Message",
        <textarea rows={5} placeholder="Tell me a little about it…" {...common("message")} />,
        true,
      )}
      <div className="sm:col-span-2">
        <button type="submit" className="pill">
          Send message <ArrowUpRight className="size-4" aria-hidden />
        </button>
        {note && <p className="mt-3 text-sm text-paper/60">{note}</p>}
      </div>
    </form>
  );
}
