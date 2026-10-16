import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Activities", href: "#activities" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="relative z-50 w-full bg-ivory">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-2 sm:px-8 lg:px-12">
        <a
          href="#home"
          onClick={closeMenu}
          className="shrink-0 font-serif text-2xl font-semibold tracking-tight text-charcoal transition-colors hover:text-bronze sm:text-3xl"
        >
          JF<span className="text-bronze">.</span>
        </a>

        <div className="hidden items-center gap-5 lg:flex xl:gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-xs font-medium tracking-wide text-mute transition-colors duration-200 hover:text-bronze xl:text-sm"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden rounded-full border border-bronze px-5 py-2.5 text-xs font-medium uppercase tracking-wider text-charcoal transition-all duration-300 hover:bg-charcoal hover:text-ivory lg:inline-flex"
        >
          Let's Connect
        </a>

        <button
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-sand text-charcoal transition-colors hover:border-bronze hover:text-bronze lg:hidden"
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
            >
              <path d="M4 7h16" />
              <path d="M4 12h16" />
              <path d="M4 17h16" />
            </svg>
          )}
        </button>
      </nav>

      {menuOpen && (
        <div className="absolute left-0 right-0 top-full border-t border-sand/60 bg-ivory px-5 pb-5 shadow-lg sm:px-8 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="border-b border-sand/50 py-3 text-sm text-mute transition-colors hover:text-bronze"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-4 inline-flex w-fit rounded-full bg-charcoal px-5 py-3 text-xs font-medium uppercase tracking-wider text-ivory transition-colors hover:bg-bronze"
            >
              Let's Connect
            </a>
          </div>
        </div>
      )}
    </header>
  );
}