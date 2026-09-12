import SectionHeading from "./SectionHeading";
import RevealGroup from "./RevealGroup";
import { expertise } from "@/lib/data";

export default function Expertise() {
  return (
    <section id="expertise" className="py-28 border-t border-midnight-border">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <SectionHeading index="04" title="My Expertise" />

        <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertise.map((group) => (
            <div key={group.category} className="reveal">
              <h3 className="font-display text-frost text-base mb-4 pb-4 border-b border-midnight-border">
                {group.category}
              </h3>
              <ul className="flex flex-col gap-3">
                {group.skills.map((s) => (
                  <li key={s} className="text-frost-soft text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-coral shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
