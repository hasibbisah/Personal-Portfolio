import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-midnight-border py-10">
      <div className="max-w-content mx-auto px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="w-7 h-7 rounded-md border border-coral/40 grid place-items-center text-coral text-xs font-display">
            {profile.initials}
          </span>
          <span className="text-frost-soft text-sm">{profile.name}</span>
        </div>
        <p className="text-frost-muted text-xs">
          &copy; {new Date().getFullYear()} {profile.name}. Built with intent.
        </p>
      </div>
    </footer>
  );
}
