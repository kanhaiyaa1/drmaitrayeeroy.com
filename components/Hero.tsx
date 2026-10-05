import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-navy text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 sm:py-28 md:grid-cols-[1.4fr_1fr]">
        <div className="animate-fade-up">
          <p className="text-sm font-semibold uppercase tracking-widest text-navy-100">
            Histopathologist | Professor | Educator
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">
            Prof. (Dr.) Maitrayee Roy
          </h1>
          <p className="mt-3 text-lg text-navy-100 sm:text-xl">
            MD, FRCPath (Histopathology)
          </p>
          <p className="mt-8 text-2xl font-semibold sm:text-3xl">
            Teaching pathology to build confident, better diagnostic pathologists.
          </p>
          <p className="mt-2 text-navy-100">Same Teachers. A Brighter You.</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-md bg-white px-6 py-3 font-semibold text-navy transition-colors hover:bg-navy-100"
            >
              Get in Touch
            </a>
            <a
              href="#about"
              className="rounded-md border border-white/40 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="animate-fade-up mx-auto w-full max-w-xs [animation-delay:200ms]">
          {/* Full photo, uncropped. TODO: confirm usage rights with the client. */}
          <div className="relative aspect-[709/819] overflow-hidden rounded-2xl border-4 border-white/20">
            <Image
              src="/dr-maitrayee-roy.webp"
              alt="Prof. (Dr.) Maitrayee Roy, MD, FRCPath (Histopathology)"
              fill
              priority
              sizes="(min-width: 768px) 360px, 320px"
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
