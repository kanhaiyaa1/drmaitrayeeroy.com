import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const skills = [
  "Histopathology",
  "Immunohistochemistry",
  "Immunofluorescence",
  "Cytopathology",
  "Oncopathology",
  "Nephropathology",
  "Gastrointestinal & Liver Pathology",
  "Gynaecological Pathology",
  "FNAC",
  "Hematology & Bone Marrow",
  "Laboratory & Quality Management",
  "Teaching & Thesis Mentoring",
];

const awards = [
  { title: "Best Senior Resident Award", detail: "NC Nayak Award, 2015-16, AIIMS New Delhi" },
  { title: "Gold Medal, First Rank in MD", detail: "MD examination, 2013, KLE University" },
  { title: "Best Outgoing Student", detail: "MBBS batch of 2009" },
];

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading id="skills-title" title="Skills & Awards" />
        <h3 className="mb-6 text-xl font-bold text-navy">Skills &amp; Expertise</h3>
        <Reveal>
          <ul className="flex flex-wrap gap-3">
          {skills.map((s) => (
            <li
              key={s}
              className="rounded-full border border-navy-100 bg-navy-50 px-5 py-2 text-sm font-semibold text-navy"
            >
              {s}
            </li>
          ))}
          </ul>
        </Reveal>

        <h3 className="mb-6 mt-16 text-xl font-bold text-navy">Awards &amp; Honours</h3>
        <ul className="grid gap-6 md:grid-cols-3">
          {awards.map((a, i) => (
            <Reveal
              as="li"
              key={a.title}
              delay={i * 100}
              className="rounded-xl border border-navy-100 bg-navy-50 p-6 shadow-sm"
            >
              <h4 className="text-lg font-bold text-navy">{a.title}</h4>
              <p className="mt-1 text-gray-700">{a.detail}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
