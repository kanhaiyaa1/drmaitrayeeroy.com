import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const awards = [
  { title: "Best Senior Resident Award", detail: "NC Nayak Award, 2015-16, AIIMS New Delhi" },
  { title: "Gold Medal, First Rank in MD", detail: "MD examination, 2013, KLE University" },
  { title: "Best Outgoing Student", detail: "MBBS batch of 2009" },
];

export default function Awards() {
  return (
    <section id="awards" aria-labelledby="awards-title" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading id="awards-title" title="Awards & Honours" />
        <ul className="grid gap-6 md:grid-cols-3">
          {awards.map((a, i) => (
            <Reveal
              as="li"
              key={a.title}
              delay={i * 100}
              className="rounded-xl border border-navy-100 bg-navy-50 p-6 shadow-sm"
            >
              <h3 className="text-lg font-bold text-navy">{a.title}</h3>
              <p className="mt-1 text-gray-700">{a.detail}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
