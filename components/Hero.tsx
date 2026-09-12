"use client";

import { ArrowDown } from "lucide-react";
import { profile, flow } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      <div className="max-w-content mx-auto px-6 md:px-10 grid md:grid-cols-[1.1fr_0.9fr] gap-16 items-center w-full">
        <div>
          <p className="text-coral text-sm font-medium tracking-wide mb-5">
            {profile.title}
          </p>
          <h1 className="font-display text-[clamp(2.6rem,6vw,4.6rem)] leading-[1.05] text-frost text-balance mb-6">
            {profile.name}
          </h1>
          <p className="text-frost-soft text-lg md:text-xl max-w-xl leading-relaxed mb-10 text-balance">
            {profile.statement}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-md bg-coral text-midnight font-medium text-sm hover:bg-coral-bright transition-colors"
            >
              View My Work
            </a>
            <a
              href="/Mohammad_Mesbah_Uddin_Hasib_Resume.pdf"
              download
              className="px-6 py-3 rounded-md border border-midnight-border text-frost text-sm hover:border-coral hover:text-coral transition-colors"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-md text-frost-soft text-sm hover:text-coral transition-colors"
            >
              Let&apos;s Connect
            </a>
          </div>
        </div>

        <FlowDiagram />
      </div>

      <a
        href="#about"
        className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-frost-muted hover:text-coral transition-colors"
      >
        <span className="text-xs tracking-wide">Scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </a>
    </section>
  );
}

function FlowDiagram() {
  const positions = [
    { x: 60, y: 40 },
    { x: 220, y: 120 },
    { x: 60, y: 200 },
    { x: 220, y: 280 },
  ];

  return (
    <div className="relative mx-auto w-full max-w-sm aspect-square">
      <svg
        viewBox="0 0 300 340"
        className="w-full h-full"
        role="img"
        aria-label="Diagram connecting Business, Technology, Operations and Users"
      >
        <line
          x1={positions[0].x}
          y1={positions[0].y}
          x2={positions[1].x}
          y2={positions[1].y}
          stroke="#25314A"
          strokeWidth="1.5"
        />
        <line
          x1={positions[1].x}
          y1={positions[1].y}
          x2={positions[2].x}
          y2={positions[2].y}
          stroke="#25314A"
          strokeWidth="1.5"
        />
        <line
          x1={positions[2].x}
          y1={positions[2].y}
          x2={positions[3].x}
          y2={positions[3].y}
          stroke="#25314A"
          strokeWidth="1.5"
        />

        <path
          d={`M${positions[0].x},${positions[0].y} L${positions[1].x},${positions[1].y} L${positions[2].x},${positions[2].y} L${positions[3].x},${positions[3].y}`}
          fill="none"
          stroke="#FF6B6B"
          strokeWidth="1.5"
          strokeDasharray="620"
          strokeDashoffset="620"
          className="animate-dash"
        />

        {positions.map((p, i) => (
          <g key={i}>
            <circle
              cx={p.x}
              cy={p.y}
              r="26"
              fill="#141C31"
              stroke={i === 0 || i === 3 ? "#FF6B6B" : "#25314A"}
              strokeWidth="1.5"
            />
            <circle
              cx={p.x}
              cy={p.y}
              r="3"
              fill="#FF6B6B"
              className="animate-pulse2"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
          </g>
        ))}
      </svg>

      <div className="absolute inset-0 pointer-events-none">
        {flow.map((label, i) => (
          <span
            key={label}
            className="absolute text-xs text-frost-soft font-medium"
            style={{
              left: `${(positions[i].x / 300) * 100}%`,
              top: `${(positions[i].y / 340) * 100}%`,
              transform:
                i % 2 === 0
                  ? "translate(-118%, -50%)"
                  : "translate(18%, -50%)",
            }}
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
