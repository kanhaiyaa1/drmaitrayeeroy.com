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

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading id="skills-title" title="Skills & Expertise" />
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
      </div>
    </section>
  );
}
