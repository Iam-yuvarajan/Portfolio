"use client";

import { Copy, Mail, Phone } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { hasValue } from "@/lib/utils";
import { useCopy } from "@/lib/use-copy";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ContactForm } from "@/components/contact-form";
import { WhatsAppIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";

const { contact } = portfolio;
const showPhone = hasValue(contact.phone);
const showWhatsApp = hasValue(contact.whatsapp);

export function Contact() {
  const copy = useCopy();

  return (
    <section id="contact" aria-labelledby="contact-heading" className="border-t py-14 sm:py-16">
      <Reveal>
        <p className="text-sm font-medium text-brand">Contact</p>
        <h2 id="contact-heading" className="mt-1 text-2xl font-semibold tracking-tight sm:text-3xl">
          Let&apos;s build something great.
        </h2>
        <p className="mt-2 text-muted-foreground">
          Open to internships, projects and opportunities where I can learn and contribute.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          <Button asChild variant="brand">
            <a href={`mailto:${contact.email}?subject=${encodeURIComponent(contact.emailSubject)}`}>
              <Mail aria-hidden />
              Email me
            </a>
          </Button>
          {showPhone && (
            <Button asChild variant="outline">
              <a href={`tel:${contact.phone}`}>
                <Phone aria-hidden />
                Call me
              </a>
            </Button>
          )}
          {showWhatsApp && (
            <Button asChild variant="outline">
              <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon />
                WhatsApp
              </a>
            </Button>
          )}
        </div>

        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm">
          <button
            type="button"
            onClick={() => copy(contact.email, "Email")}
            className="inline-flex items-center gap-1.5 rounded text-muted-foreground transition-colors hover:text-foreground"
          >
            <Copy className="size-3.5" aria-hidden />
            Copy email
          </button>
          {showPhone && (
            <button
              type="button"
              onClick={() => copy(contact.phoneDisplay, "Phone")}
              className="inline-flex items-center gap-1.5 rounded text-muted-foreground transition-colors hover:text-foreground"
            >
              <Copy className="size-3.5" aria-hidden />
              Copy phone
            </button>
          )}
        </div>
      </Reveal>

      <Reveal className="mt-8">
        <Card className="p-5 sm:p-6">
          <h3 className="mb-4 font-medium">Send a message</h3>
          <ContactForm />
        </Card>
      </Reveal>
    </section>
  );
}
