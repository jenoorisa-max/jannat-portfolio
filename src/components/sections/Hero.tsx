
const profileImage = "/images/profile/profile.jpg";

export function Hero() {
  return (
    <section
      id="home"
      className="grain relative m-0 min-h-0 translate-y-0 overflow-hidden px-5 pt-2 pb-8 sm:px-8 sm:pt-3 sm:pb-12 lg:px-12 lg:pt-3 lg:pb-14"
    >
      <div className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-cream/60 blur-3xl" />

      <div className="relative mx-auto -mt-40 grid w-full max-w-6xl grid-cols-1 items-center gap-6 md:-mt-56 md:grid-cols-2 md:gap-12 lg:-mt-64 lg:gap-16">
        <div className="order-1 min-w-0">
          <p className="reveal text-xs font-medium uppercase tracking-[0.2em] text-bronze sm:tracking-[0.25em]">
            AI &amp; Machine Learning Enthusiast · Aspiring AI Engineer
          </p>

          <h1 className="reveal reveal-delay-1 mt-2 break-words font-serif text-5xl font-semibold leading-tight tracking-tight text-charcoal sm:text-6xl lg:text-7xl">
            Jannat Fatima<span className="text-bronze">.</span>
          </h1>

          <p className="reveal reveal-delay-2 mt-2 text-sm font-medium tracking-wide text-mute sm:text-base">
            NFC Institute of Engineering &amp; Technology
            <span className="mx-2 text-bronze">·</span>
            Multan, Pakistan
          </p>

          <p className="reveal reveal-delay-2 mt-4 max-w-xl font-serif text-2xl italic leading-snug text-ink sm:text-3xl">
            Curious by nature. Driven by possibilities.
          </p>

          <p className="reveal reveal-delay-3 mt-3 max-w-lg text-base leading-7 text-mute sm:text-lg">
            Exploring Artificial Intelligence through hands-on projects,
            creative thinking, and continuous learning. Interested in
            turning ideas into practical solutions while growing beyond
            the boundaries of technology.
          </p>

          <div className="reveal reveal-delay-4 mt-5 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-3 rounded-full bg-charcoal px-6 py-3.5 text-xs font-medium uppercase tracking-wider text-ivory transition duration-300 hover:-translate-y-0.5 hover:bg-bronze"
            >
              Explore My Projects
              <span aria-hidden="true">↗</span>
            </a>

            <a
              href="#about"
              className="inline-flex items-center rounded-full border border-sand px-6 py-3.5 text-xs font-medium uppercase tracking-wider text-charcoal transition duration-300 hover:border-bronze hover:text-bronze"
            >
              About Me
            </a>
          </div>
        </div>

        <div className="reveal reveal-delay-3 order-2 mx-auto w-full max-w-[320px] md:max-w-[380px]">
          <div className="relative">
            <div className="absolute -right-3 -top-3 h-full w-full rounded-[1.75rem] border border-bronze/40" />

            <div className="relative overflow-hidden rounded-[1.5rem] border border-sand/70 bg-paper p-2 shadow-xl shadow-charcoal/10">
              <img
                src={profileImage}
                alt="Jannat Fatima"
                className="aspect-[3/4] w-full rounded-[1rem] object-cover object-center"
              />
            </div>
          </div>

          <p className="mt-3 text-right font-serif text-sm italic text-bronze">
            A little about me
          </p>
        </div>
      </div>
    </section>
  );
}
