"use client";

import { useState } from "react";
import { Check, Copy, Download, Mail, Phone } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { hasValue } from "@/lib/utils";
import { useCopy } from "@/lib/use-copy";
import { ContactForm } from "@/components/contact-form";
import { GitHubIcon, InstagramIcon, LeetCodeIcon, LinkedInIcon, WhatsAppIcon } from "@/components/icons";
import { PageShell } from "@/components/page-shell";

const { contact, socials, person, resume } = portfolio;

export function ContactPage() {
  const copy = useCopy();
  const [copied, setCopied] = useState(false);

  const socialsList = [
    { label: "LinkedIn", href: socials.linkedin, icon: <LinkedInIcon className="size-5" /> },
    { label: "GitHub", href: socials.github, icon: <GitHubIcon className="size-5" /> },
    { label: "LeetCode", href: socials.leetcode, icon: <LeetCodeIcon className="size-5" /> },
    { label: "Instagram", href: socials.instagram, icon: <InstagramIcon className="size-5" /> },
  ].filter((item) => hasValue(item.href));

  return (
    <PageShell eyebrow="05 / Contact" title="Let's build something great." ghost="HELLO">
      <p className="max-w-2xl text-paper/70">
        Open to internships, projects and opportunities where I can learn and contribute. The quickest way to reach me
        is email — or leave a note below.
      </p>

      <section aria-label="Email">
        <button
          type="button"
          onClick={async () => {
            await copy(contact.email, "Email");
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
          }}
          className="group flex w-full items-start justify-between gap-5 border-b border-paper pb-4 text-left transition-colors hover:text-paper/70"
        >
          <span className="font-display text-2xl leading-tight font-medium tracking-tight break-all sm:text-4xl">
            {contact.email}
          </span>
          {copied ? (
            <Check className="mt-2 size-5 shrink-0" aria-hidden />
          ) : (
            <Copy className="mt-2 size-5 shrink-0" aria-hidden />
          )}
          <span className="sr-only">Copy email address</span>
        </button>
        <p className="eyebrow mt-3">Click to copy</p>
      </section>

      <section aria-label="Details and links">
        <dl className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          <div>
            <dt className="eyebrow">Based in</dt>
            <dd className="mt-2 text-sm">{person.location}</dd>
          </div>
          <div>
            <dt className="eyebrow">Open to</dt>
            <dd className="mt-2 text-sm">Internships &amp; projects</dd>
          </div>
          {hasValue(contact.phone) && (
            <div>
              <dt className="eyebrow">Phone</dt>
              <dd className="mt-2 text-sm">
                <a href={`tel:${contact.phone}`} className="inline-flex items-center gap-1.5 hover:underline">
                  <Phone className="size-3.5" aria-hidden /> {contact.phoneDisplay}
                </a>
              </dd>
            </div>
          )}
          <div>
            <dt className="eyebrow">Replies</dt>
            <dd className="mt-2 text-sm">Within a day</dd>
          </div>
        </dl>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href={`mailto:${contact.email}`} className="pill">
            <Mail className="size-4" aria-hidden /> Email
          </a>
          {socialsList.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className="pill size-11 rounded-full px-0"
            >
              {item.icon}
            </a>
          ))}
          {hasValue(contact.whatsapp) && (
            <a
              href={`https://wa.me/${contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="pill size-11 rounded-full px-0"
            >
              <WhatsAppIcon className="size-5" />
            </a>
          )}
          <a href={resume.path} download={resume.fileName} className="pill">
            <Download className="size-4" aria-hidden /> Resume
          </a>
        </div>
      </section>

      <section aria-labelledby="form-heading">
        <h2 id="form-heading" className="eyebrow mb-6">Send a message</h2>
        <ContactForm />
      </section>
    </PageShell>
  );
}
