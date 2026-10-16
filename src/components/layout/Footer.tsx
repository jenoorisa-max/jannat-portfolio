import { profile } from "../../data/profile";

export function Footer() {
  return (
    <footer className="bg-charcoal px-5 py-12 text-ivory/80 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-serif text-3xl text-ivory">{profile.name}</p>
          <p className="mt-2 max-w-md text-sm text-ivory/60">
            {profile.program}. Technical work, creative practice, and leadership kept in the same frame.
          </p>
        </div>
        <p className="text-xs tracking-[0.16em] text-gold uppercase">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
}
