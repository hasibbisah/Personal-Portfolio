import { philosophy } from "@/lib/data";
import RevealGroup from "./RevealGroup";

export default function Philosophy() {
  return (
    <section className="py-28 border-t border-midnight-border">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <blockquote className="reveal font-display text-2xl md:text-3xl text-frost text-balance max-w-3xl leading-snug mb-16">
          &ldquo;Good projects are not just delivered on time. They create clarity,
          solve real problems, and leave something better behind.&rdquo;
        </blockquote>

        <RevealGroup className="grid sm:grid-cols-3 gap-8">
          {philosophy.map((p) => (
            <div key={p.title} className="reveal">
              <div className="w-10 h-px bg-coral mb-4" />
              <h3 className="font-display text-frost text-lg mb-2">{p.title}</h3>
              <p className="text-frost-soft text-sm leading-relaxed">{p.detail}</p>
            </div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
