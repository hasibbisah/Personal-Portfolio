import SectionHeading from "./SectionHeading";
import RevealGroup from "./RevealGroup";
import { leadership } from "@/lib/data";

export default function Leadership() {
  return (
    <section id="leadership" className="py-28 border-t border-midnight-border">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <SectionHeading
          index="06"
          title="Leadership & Beyond Work"
          lead="Public speaking, community projects and youth development — the work that shaped how I lead."
        />

        <RevealGroup className="grid sm:grid-cols-2 gap-6">
          {leadership.map((l) => (
            <div
              key={l.title}
              className="reveal border border-midnight-border rounded-lg p-6 hover:border-coral/50 transition-colors duration-300"
            >
              <h3 className="font-display text-frost text-lg mb-1">{l.title}</h3>
              <p className="text-coral text-sm mb-3">{l.role}</p>
              <p className="text-frost-soft text-sm leading-relaxed">{l.detail}</p>
            </div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
