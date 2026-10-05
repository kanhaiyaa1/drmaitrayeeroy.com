import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading id="about-title" title="About" />
        <Reveal className="space-y-5 text-lg leading-relaxed text-gray-700">
          <p>
            Prof. (Dr.) Maitrayee Roy is a histopathologist, teacher and Fellow of
            the Royal College of Pathologists (UK). She is Professor of Pathology
            at Maharishi Markandeshwar (Deemed to be) University, Mullana, and
            co-owner of Maitri Diagnostic Lab in Ambala City, where she set up the
            histopathology section and now reports histopathology,
            immunohistochemistry and cytology for the lab and for more than 15
            nursing homes, hospitals and laboratories around Ambala.
          </p>
          <p>
            She trained at AIIMS, New Delhi as a senior resident from 2013 to 2016,
            working in nephropathology, gastrointestinal and liver pathology and
            gynaecological pathology, and received the Best Senior Resident award.
            She is a gold medallist in MD Pathology, and her special interest is
            oncopathology.
          </p>
          <p>
            Since 2019 she has taught FRCPath Part 1 and Part 2 candidates
            through eLearningFRCPath, mentoring over 1000 students. Her approach is simple: build confident, better diagnostic
            pathologists, because better pathologists mean better patient care.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
