"use client";

import { useState } from "react";
import { Linkedin, Mail, Send } from "lucide-react";
import { profile } from "@/lib/data";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Wire this up to an email service (e.g. Resend, Formspree) or an API route.
    setSent(true);
  }

  return (
    <section id="contact" className="py-28 border-t border-midnight-border">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-[1fr_1fr] gap-16">
          <div>
            <h2 className="font-display text-3xl md:text-4xl text-frost mb-5 text-balance">
              Let&apos;s Build Something Meaningful.
            </h2>
            <p className="text-frost-soft leading-relaxed mb-10 max-w-md">
              Open to Project Coordinator, Senior Project Coordinator, Product Operations
              and Product Management conversations. If you&apos;re hiring or just want to
              connect, reach out below.
            </p>

            <div className="flex flex-col gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 text-frost-soft hover:text-coral transition-colors text-sm"
              >
                <Mail size={18} className="text-coral" />
                {profile.email}
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-frost-soft hover:text-coral transition-colors text-sm"
              >
                <Linkedin size={18} className="text-coral" />
                linkedin.com/in/mmhasib
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Name" id="name" type="text" required />
              <Field label="Email" id="email" type="email" required />
            </div>
            <Field label="Subject" id="subject" type="text" required />
            <div>
              <label htmlFor="message" className="text-xs text-frost-muted mb-2 block">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                className="w-full bg-midnight-surface border border-midnight-border rounded-md px-4 py-3 text-sm text-frost placeholder:text-frost-muted focus:outline-none focus:border-coral transition-colors resize-none"
                placeholder="What would you like to talk about?"
              />
            </div>

            <button
              type="submit"
              className="self-start inline-flex items-center gap-2 px-6 py-3 rounded-md bg-coral text-midnight text-sm font-medium hover:bg-coral-bright transition-colors"
            >
              <Send size={16} />
              Start a Conversation
            </button>

            {sent && (
              <p className="text-sm text-coral">
                Thanks — your message is ready to send once this form is connected to an
                email service.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  type,
  required,
}: {
  label: string;
  id: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-xs text-frost-muted mb-2 block">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className="w-full bg-midnight-surface border border-midnight-border rounded-md px-4 py-3 text-sm text-frost placeholder:text-frost-muted focus:outline-none focus:border-coral transition-colors"
      />
    </div>
  );
}
