
import { Section } from "../ui/Section";

const contactLinks = [
  {
    label: "LinkedIn",
    detail: "Connect professionally",
    href: "https://www.linkedin.com/in/jannat-fatima-a910113bb/",
  },
  {
    label: "Message Me on LinkedIn",
    detail: "Let's start a conversation",
    href: "https://www.linkedin.com/in/jannat-fatima-a910113bb/",
  },
  {
    label: "Instagram",
    detail: "@who.is.jannat",
    href: "https://www.instagram.com/who.is.jannat/",
  },
  {
    label: "Email",
    detail: "jenoorisa123@gmail.com",
    href: "mailto:jenoorisa123@gmail.com",
  },
];

const inputClass =
  "w-full border-0 border-b border-charcoal/20 bg-transparent px-0 py-3 text-charcoal outline-none transition-colors placeholder:text-mute/70 focus:border-bronze";

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="LET'S CONNECT"
      title="Every meaningful journey begins with a conversation."
      intro="Have an opportunity, an idea, or simply want to connect? I'd love to hear from you."
    >
      <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-bronze">
            Find me online
          </p>

          <div className="mt-7">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={
                  link.href.startsWith("mailto:") ? undefined : "_blank"
                }
                rel={
                  link.href.startsWith("mailto:")
                    ? undefined
                    : "noopener noreferrer"
                }
                className="group flex items-center justify-between gap-4 border-b border-charcoal/10 py-5 transition-colors hover:border-bronze"
              >
                <div>
                  <h3 className="text-base font-medium text-charcoal transition-colors group-hover:text-bronze">
                    {link.label}
                  </h3>
                  <p className="mt-1 text-sm text-mute">{link.detail}</p>
                </div>

                <span
                  className="text-lg text-bronze transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-bronze">
            Send a message
          </p>

          <form
            action="https://formsubmit.co/jenoorisa123@gmail.com"
            method="POST"
            className="mt-7 space-y-7"
          >
            <input
              type="hidden"
              name="_subject"
              value="New message from Jannat's portfolio"
            />

            <input type="hidden" name="_template" value="table" />

            <div>
              <label
                htmlFor="contact-name"
                className="mb-1 block text-sm text-charcoal"
              >
                Your name
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                autoComplete="name"
                placeholder="Enter your name"
                className={inputClass}
                required
              />
            </div>

            <div>
              <label
                htmlFor="contact-email"
                className="mb-1 block text-sm text-charcoal"
              >
                Your email
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                autoComplete="email"
                placeholder="Enter your email address"
                className={inputClass}
                required
              />
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="mb-1 block text-sm text-charcoal"
              >
                Your message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                placeholder="Write your message here..."
                className={`${inputClass} resize-y`}
                required
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-3 bg-charcoal px-7 py-4 text-sm font-medium text-white transition-colors duration-300 hover:bg-bronze"
            >
              Send Message
              <span aria-hidden="true">↗</span>
            </button>

            <p className="text-xs leading-6 text-mute">
              Your message will be sent through the contact form service.
              First-time setup and email verification may be required.
            </p>
          </form>
        </div>
      </div>
    </Section>
  );
}
