'use client';

import { useState } from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { HiMail, HiCheck, HiDuplicate } from "react-icons/hi";
import Section from "../ui/Section";

const EMAIL = "tharciosantos09@gmail.com";

const staticLinks = [
  {
    label: "LinkedIn",
    description: "Conversar sobre vagas, networking e carreira.",
    href: "https://www.linkedin.com/in/tharcio-santos-dev/",
    icon: <SiLinkedin />,
    action: "Abrir",
  },
  {
    label: "GitHub",
    description: "Ver código, projetos e histórico de estudos.",
    href: "https://github.com/tharcio09",
    icon: <SiGithub />,
    action: "Abrir",
  },
];

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // fallback para browsers sem suporte à Clipboard API
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <Section
      id="contato"
      spacing="compact"
      className="border-t border-gray-200/80 dark:border-gray-800"
    >
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <div>
            <p className="text-sm font-medium text-cyan-700 dark:text-cyan-300">
              Contato
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-normal text-primary-text dark:text-light-text md:text-4xl">
              Vamos conversar?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-secondary-text dark:text-gray-300">
              Disponível para estágio ou oportunidade júnior em desenvolvimento
              web/fullstack.
            </p>
          </div>

          <div className="divide-y divide-gray-200 rounded-lg border border-gray-200 dark:divide-gray-800 dark:border-gray-800">
            {/* Email com botão copiar */}
            <div className="flex items-center justify-between gap-4 p-5">
              <span className="flex items-center gap-4">
                <span className="text-xl text-cyan-700 dark:text-cyan-300">
                  <HiMail />
                </span>
                <span>
                  <span className="block font-semibold text-primary-text dark:text-light-text">
                    Email
                  </span>
                  <span className="mt-1 block text-sm text-secondary-text dark:text-gray-400">
                    {EMAIL}
                  </span>
                </span>
              </span>

              <div className="flex shrink-0 gap-2">
                <button
                  onClick={handleCopyEmail}
                  aria-label={copied ? "Email copiado" : "Copiar email"}
                  className={`inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-xs font-semibold transition-all duration-200
                    ${
                      copied
                        ? "border-green-300 bg-green-50 text-green-700 dark:border-green-800 dark:bg-green-950/30 dark:text-green-400"
                        : "border-gray-300 text-secondary-text hover:border-cyan-600 hover:text-cyan-700 dark:border-gray-700 dark:text-gray-400 dark:hover:border-cyan-400 dark:hover:text-cyan-300"
                    }`}
                >
                  {copied ? (
                    <>
                      <HiCheck className="text-sm" />
                      Copiado
                    </>
                  ) : (
                    <>
                      <HiDuplicate className="text-sm" />
                      Copiar
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center text-sm font-semibold text-cyan-700 dark:text-cyan-300 hover:underline"
                >
                  Abrir
                </a>
              </div>
            </div>

            {/* Links estáticos */}
            {staticLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-4 p-5 transition-colors hover:bg-gray-50 dark:hover:bg-zinc-900"
              >
                <span className="flex items-center gap-4">
                  <span className="text-xl text-cyan-700 dark:text-cyan-300">
                    {link.icon}
                  </span>
                  <span>
                    <span className="block font-semibold text-primary-text dark:text-light-text">
                      {link.label}
                    </span>
                    <span className="mt-1 block text-sm text-secondary-text dark:text-gray-400">
                      {link.description}
                    </span>
                  </span>
                </span>
                <span className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
                  {link.action}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
