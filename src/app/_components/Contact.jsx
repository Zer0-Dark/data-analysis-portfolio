import { FiArrowRight, FiFacebook, FiGithub, FiLinkedin, FiMail, FiPhone } from "react-icons/fi";
import Reveal from "./Reveal";
import contactData from "../_data/contactData.json";
import sections from "../_data/sections.json";

const iconMap = {
  phone: FiPhone,
  email: FiMail,
  facebook: FiFacebook,
  linkedin: FiLinkedin,
  github: FiGithub,
};

const captionMap = {
  phone: "Phone",
  email: "Email",
  linkedin: "LinkedIn",
};

function ContactRow({ contact }) {
  const Icon = iconMap[contact.icon];
  const caption = captionMap[contact.icon];
  const external = contact.href.startsWith("http");

  return (
    <a
      href={contact.href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="row-slide flex min-w-0 items-center gap-4 rounded-[14px] border border-brand-line p-3.5 text-white"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-raised text-xl text-brand-soft">
        {Icon && <Icon aria-hidden="true" />}
      </span>
      <span className="flex min-w-0 flex-col gap-0.5">
        {caption && <span className="text-xs text-brand-muted">{caption}</span>}
        <span className="text-base font-semibold [overflow-wrap:anywhere]">{contact.label}</span>
      </span>
    </a>
  );
}

function Contact() {
  const { contact, hero } = sections;
  const email = contactData.find((c) => c.icon === "email");
  const primary = contactData.filter((c) => captionMap[c.icon]);
  const social = contactData.filter((c) => !captionMap[c.icon]);

  return (
    <section id="contact" className="mx-auto max-w-[1200px] px-4 pt-20 pb-6 sm:px-6 md:pt-24">
      <Reveal className="relative flex flex-col gap-10 overflow-hidden rounded-[28px] border border-brand-line-strong bg-brand-semi-dark p-6 sm:p-10 lg:flex-row lg:gap-12 lg:p-16">
        <div aria-hidden="true" className="drift pointer-events-none absolute -top-40 -right-32 h-[420px] w-[420px] rounded-full bg-brand opacity-[0.22] blur-[90px]" />

        <div className="relative flex min-w-0 flex-1 flex-col gap-4">
          <span className="font-mono text-[13px] tracking-[0.08em] text-brand-soft uppercase">{contact.eyebrow}</span>
          <h2 className="m-0 text-[34px] leading-[1.08] font-extrabold tracking-tight lg:text-[52px]">
            {contact.headline} <span className="text-brand">{contact.headlineAccent}</span>
          </h2>
          <p className="m-0 text-base leading-relaxed text-brand-muted">{contact.intro}</p>
          <div className="mt-2 flex flex-wrap gap-3">
            {email && (
              <a href={email.href} className="btn-primary inline-flex items-center gap-2.5 rounded-xl px-6 py-[15px] font-semibold">
                Email me
                <FiArrowRight className="arrow" aria-hidden="true" />
              </a>
            )}
            <a href={hero.cvLink} className="btn-ghost inline-flex items-center gap-2.5 rounded-xl px-6 py-[15px] font-semibold">
              Download CV
            </a>
          </div>
        </div>

        <div className="relative flex min-w-0 flex-1 flex-col gap-2.5">
          {primary.map((c) => (
            <ContactRow key={c.id} contact={c} />
          ))}
          <div className="grid grid-cols-2 gap-2.5">
            {social.map((c) => (
              <ContactRow key={c.id} contact={c} />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default Contact;
