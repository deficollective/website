import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 py-4" style={{ background: "var(--color-header)" }}>
      <nav className="container mx-auto px-8 flex items-center justify-between">
        <Link href="/" className="block hover:no-underline">
          <Image
            src="/horizontal_defi_collective_color_for_light_background.svg"
            alt="DeFi Collective"
            width={304}
            height={55}
            priority
          />
        </Link>
        <Link
          href="/support"
          className="border-2 border-[var(--color-link-dark)] rounded px-4 py-2 text-sm font-semibold text-[var(--color-text-heading)] hover:border-dotted hover:no-underline"
        >
          Support <span className="pl-1">♥</span>
        </Link>
      </nav>
    </header>
  );
}
