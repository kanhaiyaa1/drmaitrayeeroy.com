import SectionHeading from "./SectionHeading";

// TODO: replace each placeholder with the EXACT wording of the Facebook review as published at
// https://www.elearningfrcpath.com/dr-maitrayee-roy and /md-frcpath-dr-maitrayee-roy.
// Never paraphrase inside the quotation marks. Short excerpts are fine.
const quotes = [
  {
    text: "[Review text to be pasted from the source page]",
    name: "Neeti Goyal",
  },
  {
    text: "[Review text to be pasted from the source page]",
    name: "Raman Johal Sivia",
  },
  {
    text: "[Review text to be pasted from the source page]",
    name: "Aeman Khalid",
  },
  {
    text: "[Review text to be pasted from the source page]",
    name: "Niyatha Balakrishnan",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");
}

export default function Testimonials() {
  // The set is rendered 4 times and the track shifts by exactly one set (-25%),
  // so the loop is seamless even on very wide screens.
  const copies = [0, 1, 2, 3];

  return (
    <section id="testimonials" aria-labelledby="testimonials-title" className="bg-navy-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading id="testimonials-title" title="Student Testimonials" />
      </div>

      <div className="marquee-mask overflow-hidden">
        <div className="marquee-track flex w-max">
          {copies.map((copy) =>
            quotes.map((q) => (
              <figure
                key={`${copy}-${q.name}`}
                aria-hidden={copy > 0}
                className="mr-6 flex w-80 shrink-0 flex-col rounded-2xl border border-navy-100 bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-lg sm:w-[26rem]"
              >
                <blockquote className="mb-8 text-base leading-relaxed text-gray-700 sm:text-lg">
                  {q.text}
                </blockquote>
                <figcaption className="mt-auto flex items-center gap-4">
                  <span
                    aria-hidden="true"
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-bold text-white ring-4 ring-navy-50"
                  >
                    {initials(q.name)}
                  </span>
                  <span>
                    <span className="block font-semibold text-navy">{q.name}</span>
                    <span className="block text-sm text-gray-500">
                      eLearningFRCPath student &middot; Facebook review
                    </span>
                  </span>
                </figcaption>
              </figure>
            )),
          )}
        </div>
      </div>
    </section>
  );
}
