import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const roles = [
  {
    title: "Professor, Pathology",
    org: "Maharishi Markandeshwar (Deemed to be) University, Mullana, Ambala",
    period: "Jun 2025 – present",
    points: [
      "Previously Associate Professor (Feb 2022 – May 2025) and Assistant Professor (Nov 2016 – Jan 2022) at the same university",
      "Reports histopathology including immunohistochemistry",
      "In charge of immunofluorescence reporting",
      "Supervises training and thesis work of postgraduate residents and PhD candidates",
      "Takes part in inter-departmental meetings",
    ],
    // Wide logo, so it is capped to the card width instead of a fixed height.
    logo: {
      src: "/mmdu-logo.webp",
      alt: "Maharishi Markandeshwar (Deemed to be) University logo",
      width: 600,
      height: 133,
      className: "h-auto max-h-20 w-auto max-w-full",
    } as { src: string; alt: string; width: number; height: number; className?: string },
    address: undefined as string | undefined,
    footer: "Mullana, Ambala",
    href: undefined as string | undefined,
  },
  {
    title: "Histopathologist & Co-owner",
    org: "Maitri Diagnostic Lab, Ambala City",
    period: "Aug 2016 – present",
    points: [
      "Set up the lab's histopathology section, a standalone histopathology lab",
      "Serves 15+ nursing homes, hospitals and laboratories in and around Ambala City",
      "Reports histopathology, immunohistochemistry and cytology, and manages lab quality control",
      "Also offers FNAC, hematology and bone marrow, clinical pathology, cancer diagnosis and second opinion",
    ],
    logo: { src: "/maitri-diagnostics-logo.png", alt: "Maitri Diagnostics logo", width: 329, height: 193 },
    address: "Barnala Road, Baldev Nagar, Delhi-Chandigarh Highway, beside Muthoot Finance, Ambala City",
    footer: "maitridiagnosticlab.in",
    href: "https://maitridiagnosticlab.in/" as string | undefined,
  },
  {
    title: "Co-founder & Academic Lead",
    org: "AM PATH E-LEARNING PVT LTD (eLearningFRCPath)",
    // TODO CONFIRM: start year (2019 vs 2020), see CLAUDE.md discrepancies.
    period: "2019 – present",
    points: [
      "Online mentorship platform for FRCPath (Histopathology) Part 1 and Part 2, also NEET-SS (Oncopathology) and INI-SS preparation",
      "Program conceptualised by Dr. Akshay Bali and developed jointly with Dr. Roy",
      "Teaches short cases, long cases (medical renal, medical liver, lymphoma), OSPE, viva, frozen sections, cytology and applied histology",
      "1000+ students mentored across FRCPath Part 1 and Part 2",
    ],
    logo: { src: "/elearningfrcpath-logo.png", alt: "eLearning FRCPath logo", width: 380, height: 125 },
    address: undefined as string | undefined,
    footer: "elearningfrcpath.com",
    href: "https://www.elearningfrcpath.com/" as string | undefined,
  },
];

export default function Roles() {
  return (
    <section id="roles" aria-labelledby="roles-title" className="bg-[#d6e9f7] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading id="roles-title" title="Current Roles" />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {roles.map((r, i) => (
            <Reveal
              as="article"
              key={r.org}
              delay={i * 120}
              className="flex flex-col rounded-xl border border-gray-100 bg-[#d6e9f7] p-8 shadow-md hover:-translate-y-1 hover:shadow-xl"
            >
              {r.logo && (
                <div className="mb-6 flex h-20 items-center">
                  <Image
                    src={r.logo.src}
                    alt={r.logo.alt}
                    width={r.logo.width}
                    height={r.logo.height}
                    className={`rounded-md ${r.logo.className ?? "h-20 w-auto"}`}
                  />
                </div>
              )}
              <p className="text-sm font-semibold text-navy-500">{r.period}</p>
              <h3 className="mt-2 text-xl font-bold text-navy">{r.title}</h3>
              <p className="mt-1 font-medium text-gray-700">{r.org}</p>
              <ul className="mt-5 list-disc space-y-2 pl-5 text-gray-700">
                {r.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <div className="mt-auto pt-6 text-sm text-gray-500">
                {r.address && <p className="mb-2">{r.address}</p>}
                {r.href ? (
                  <a
                    href={r.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-navy underline-offset-4 transition-colors hover:text-navy-500 hover:underline"
                  >
                    {r.footer} &rarr;
                  </a>
                ) : (
                  r.footer
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
