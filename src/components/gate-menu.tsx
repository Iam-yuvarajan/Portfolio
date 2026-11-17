"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { portfolio } from "@/data/portfolio";

const { person, contact, resume } = portfolio;

const menu = [
  { label: "Say hi..", href: `mailto:${contact.email}`, script: true, external: true },
  { label: "Resume", href: resume.path, download: true, external: false },
  { label: "Projects", href: "/work", external: false },
  { label: "Experience", href: "/experience", external: false },
  { label: "About", href: "/about", external: false },
  { label: "Skills", href: "/skills", external: false },
  { label: "Contact", href: "/contact", external: false },
];

function YinYang() {
  return (
    <svg viewBox="0 0 496 512" width="96" height="96" fill="currentColor" aria-hidden="true">
      <path d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 376c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm0-128c-53.02 0-96 42.98-96 96s42.98 96 96 96c-106.04 0-192-85.96-192-192S141.96 64 248 64c53.02 0 96 42.98 96 96s-42.98 96-96 96zm0-128c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.33-32-32-32z" />
    </svg>
  );
}

/** Landing gate — click the yin-yang to make the menu fly in, like the reference. */
export function GateMenu() {
  const [entered, setEntered] = useState(false);
  const reduced = useReducedMotion();

  return (
    <section className="relative flex min-h-dvh flex-col items-center justify-center px-6 pt-28 pb-24 sm:px-10">
      <div className="absolute top-28 text-center">
        <p className="font-display text-xl font-semibold tracking-tight sm:text-2xl">{person.name}</p>
        <p className="eyebrow mt-2">{person.role}</p>
        <p className="eyebrow mt-1">{person.location}</p>
      </div>

      <AnimatePresence mode="wait">
        {!entered ? (
          <motion.div
            key="gate"
            exit={{ opacity: 0, scale: 1.4, transition: { duration: 0.35 } }}
            className="flex flex-col items-center gap-4"
          >
            <button
              type="button"
              onClick={() => setEntered(true)}
              className="transition-transform duration-500 hover:rotate-180 hover:scale-110"
              aria-label="Enter the site"
            >
              <YinYang />
            </button>
            <span className="font-script text-2xl text-paper/80">click here</span>
          </motion.div>
        ) : (
          <motion.nav
            key="menu"
            aria-label="Main menu"
            className="flex w-full max-w-3xl flex-col items-center gap-1 sm:gap-2"
          >
            {menu.map((item, index) => {
              const from = reduced ? 0 : index % 2 === 0 ? -200 : 200;
              const content = (
                <span
                  className={`${item.script ? "font-script text-3xl sm:text-4xl" : "font-display text-4xl font-semibold tracking-tight sm:text-6xl"} transition-opacity hover:opacity-60`}
                >
                  {item.label}
                  {item.external && !item.script ? " ↗" : ""}
                </span>
              );

              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: from }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className={index % 2 === 0 ? "self-start sm:ml-12" : "self-end sm:mr-12"}
                >
                  {item.external ? (
                    <a
                      href={item.href}
                      {...(item.download ? { download: resume.fileName } : {})}
                    >
                      {content}
                    </a>
                  ) : (
                    <Link href={item.href}>{content}</Link>
                  )}
                </motion.div>
              );
            })}
          </motion.nav>
        )}
      </AnimatePresence>

      <p className="eyebrow absolute bottom-8">
        © {new Date().getFullYear()} {person.name}
      </p>
    </section>
  );
}
