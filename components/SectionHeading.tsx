import Reveal from "./Reveal";

export default function SectionHeading({
  title,
  id,
}: {
  title: string;
  id: string;
}) {
  return (
    <Reveal className="mb-12">
      <h2 id={id} className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
        {title}
      </h2>
      <div className="mt-4 h-1 w-14 rounded bg-navy-500" />
    </Reveal>
  );
}
