"use client";

import { useEffect, useRef, useState } from "react";
import SectionHeading from "./SectionHeading";
import { impactStats } from "@/lib/data";

function StatValue({ value }: { value: string }) {
  const numeric = parseInt(value.replace(/[^0-9]/g, ""), 10);
  const suffix = value.replace(/[0-9,]/g, "");
  const isNumeric = !isNaN(numeric);
  const [display, setDisplay] = useState(isNumeric ? 0 : value);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (!isNumeric || !ref.current) return;
    const el = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1200;
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(Math.round(eased * numeric));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [isNumeric, numeric]);

  return (
    <span ref={ref}>
      {isNumeric ? display.toLocaleString() : value}
      {suffix}
    </span>
  );
}

export default function Impact() {
  return (
    <section id="impact" className="py-28 border-t border-midnight-border">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <SectionHeading
          index="05"
          title="Impact Dashboard"
          lead="A snapshot of the reach behind the roles — beneficiaries, institutions and countries."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-midnight-border rounded-lg overflow-hidden">
          {impactStats.map((s) => (
            <div key={s.label} className="bg-midnight-surface p-7">
              <p className="font-display text-3xl md:text-4xl text-coral mb-2">
                <StatValue value={s.value} />
              </p>
              <p className="text-frost-soft text-sm leading-snug">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
