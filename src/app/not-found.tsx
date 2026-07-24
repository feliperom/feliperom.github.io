import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-svh place-items-center bg-obsidian px-6 text-center">
      <div className="flex flex-col items-center gap-6">
        <span className="font-display text-mega font-medium leading-none text-lime">404</span>
        <p className="max-w-sm text-balance text-gray">
          This page drifted off the grid. Let&apos;s get you back to something that renders.
        </p>
        <Link
          href="/en/"
          className="border border-offwhite/20 px-6 py-3 text-sm uppercase tracking-widest transition-colors hover:border-lime hover:text-lime"
        >
          Back home →
        </Link>
      </div>
    </main>
  );
}
