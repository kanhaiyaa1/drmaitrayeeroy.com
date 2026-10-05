import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";
import Roles from "@/components/Roles";
import Publications from "@/components/Publications";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { schema } from "@/lib/schema";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
      />
      <main>
        <Hero />
        <About />
        <Skills />
        <Timeline />
        <Roles />
        <Publications />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
