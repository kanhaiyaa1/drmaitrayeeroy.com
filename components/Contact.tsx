import Reveal from "./Reveal";
import EnquiryForm from "./EnquiryForm";

const iconPaths = {
  mail: "M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm9 7.2L20 7H4l8 5.2Zm0 2.1L4 9v9h16V9l-8 5.3Z",
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

        <ul className="mx-auto grid max-w-3xl gap-6 md:grid-cols-2">
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
        </Reveal>
      </div>
    </section>
  );
}
