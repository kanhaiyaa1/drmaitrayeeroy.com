import Reveal from "./Reveal";
import EnquiryForm from "./EnquiryForm";

const iconPaths = {
  mail: "M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm9 7.2L20 7H4l8 5.2Zm0 2.1L4 9v9h16V9l-8 5.3Z",
  phone: "M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.1.37 2.3.57 3.6.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.6 21 3 13.4 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1L6.6 10.8Z",
  pin: "M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z",
};

const details = [
  {
    label: "Email",
    icon: iconPaths.mail,
    value: "ms.maitrayee.roy@gmail.com",
    href: "mailto:ms.maitrayee.roy@gmail.com",
  },
  {
    label: "Phone",
    icon: iconPaths.phone,
    value: "+91 88006 83953",
    href: "tel:+918800683953",
  },
  {
    label: "Address",
    icon: iconPaths.pin,
    value: "Maitri Diagnostic Lab, Barnala Road, Baldev Nagar, Delhi-Chandigarh Highway, beside Muthoot Finance, Ambala City, Haryana",
    href: undefined as string | undefined,
  },
];

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-navy py-20 text-white sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 id="contact-title" className="text-3xl font-bold tracking-tight sm:text-4xl">
            Contact
          </h2>
          <div className="mx-auto mt-4 h-1 w-14 rounded bg-white/60" />
        </div>

        <ul className="grid gap-6 md:grid-cols-3">
          {details.map((d, i) => (
            <Reveal
              as="li"
              key={d.label}
              delay={i * 100}
              className="flex flex-col items-center rounded-xl border border-white/15 bg-white/5 p-6 text-center"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-navy">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d={d.icon} />
                </svg>
              </span>
              <span className="mt-4 text-sm text-navy-100">{d.label}</span>
              {d.href ? (
                <a href={d.href} className="mt-1 text-lg transition-colors hover:text-navy-100">
                  {d.value}
                </a>
              ) : (
                <span className="mt-1 leading-relaxed">{d.value}</span>
              )}
            </Reveal>
          ))}
        </ul>

        <Reveal className="mx-auto mt-12 max-w-3xl">
          <EnquiryForm />
          <div className="mt-8 flex flex-col items-center gap-3 text-center">
            <p className="text-navy-100">Prefer WhatsApp?</p>
            <a
              href="https://wa.me/918800683953"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-white/40 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
            >
              Chat on WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
