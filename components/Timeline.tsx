import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

// TODO CONFIRM with client: 2019 vs 2020 for the start of FRCPath coaching.
const milestones = [
  { year: "2003–2009", text: "MBBS, Manipal College of Medical Sciences (Pokhara, Nepal). Best outgoing student of the batch, 2009" },
  { year: "2010–2013", text: "MD Pathology, Jawaharlal Nehru Medical College, Belgaum. Gold medal for first rank, 2013" },
  { year: "2013", text: "Cleared the AIIMS open senior residency entrance exam (All India)" },
  { year: "2013–2016", text: "Senior Resident, Pathology, AIIMS New Delhi. Trained in nephropathology, GI/liver and gynaecological pathology. Best Senior Resident award (NC Nayak Award 2015-16)" },
  { year: "2016", text: "Co-founded Maitri Diagnostic Lab, Ambala (standalone histopathology lab)" },
  { year: "Nov 2016", text: "Joined Maharishi Markandeshwar (Deemed to be) University as Assistant Professor" },
  { year: "2018", text: "Cleared FRCPath Part 2" },
  { year: "Feb 2019", text: "FRCPath (Histopathology) awarded by the Royal College of Pathologists, London" },
  { year: "2019", text: "Began FRCPath Part 1 and Part 2 coaching with Dr. Akshay Bali" },
  { year: "Feb 2022", text: "Promoted to Associate Professor" },
  { year: "Jun 2025", text: "Professor of Pathology, MMDU" },
  { year: "2025", text: "Paper in International Journal of Surgical Pathology (nephrectomy specimens)" },
];

export default function Timeline() {
  return (
    <section id="timeline" aria-labelledby="timeline-title" className="bg-navy-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading id="timeline-title" title="Career Timeline" />
        <ol className="relative ml-3 border-l-2 border-navy-100">
          {milestones.map((m, i) => (
            <Reveal as="li" key={m.year + m.text} delay={(i % 4) * 80} className="relative pb-10 pl-8 last:pb-0">
              <span className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 border-navy bg-white" />
              <p className="text-sm font-bold uppercase tracking-wide text-navy-500">
                {m.year}
              </p>
              <p className="mt-1 max-w-2xl text-gray-700">{m.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
