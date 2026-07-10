"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/works", label: "Works" },
  { href: "/company", label: "Company" },
  { href: "/news", label: "News" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link href="/" className="site-logo" onClick={() => setIsOpen(false)}>
          <Image
            src="/logo/logo-full-gold.png"
            alt="TSUNAG GROWTH PARTNER"
            width={200}
            height={64}
            priority
          />
        </Link>

        <nav className="site-nav" aria-label="グローバルナビゲーション">
          {navItems.map((item) => {
            const isActive = pathname?.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={isActive ? "active" : undefined}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link href="/contact" className="site-header-cta">
          Contact Us <span aria-hidden="true">→</span>
        </Link>

        <button
          type="button"
          className="site-nav-toggle"
          aria-label="メニューを開く"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span />
        </button>
      </div>

      <nav
        className={`site-nav-mobile${isOpen ? " is-open" : ""}`}
        aria-label="モバイルナビゲーション"
      >
        {navItems.map((item) => {
          const isActive = pathname?.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={isActive ? "active" : undefined}
              aria-current={isActive ? "page" : undefined}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          );
        })}
        <Link href="/contact" onClick={() => setIsOpen(false)}>
          相談する
        </Link>
      </nav>
    </header>
  );
}
