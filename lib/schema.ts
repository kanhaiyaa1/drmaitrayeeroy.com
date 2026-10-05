import { publications } from "@/components/Publications";
import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL } from "./site";

// JSON-LD structured data, linked by @id. Facts only, taken from CLAUDE.md.
// Facebook/Instagram/YouTube/X belong to the eLearningFRCPath brand, so they are
// listed on the organization, not on the person.

const ID = {
  website: `${SITE_URL}/#website`,
  page: `${SITE_URL}/#webpage`,
  person: `${SITE_URL}/#person`,
  elearning: `${SITE_URL}/#elearningfrcpath`,
  lab: `${SITE_URL}/#maitri-diagnostic-lab`,
};

// Publication dates are years (optionally followed by volume/pages, e.g. "2025;33(8):1759-66").
function isoYear(date: string) {
  return date.slice(0, 4);
}

export const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": ID.website,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      inLanguage: "en-IN",
      publisher: { "@id": ID.person },
    },
    {
      "@type": "ProfilePage",
      "@id": ID.page,
      url: SITE_URL,
      name: SITE_TITLE,
      isPartOf: { "@id": ID.website },
      inLanguage: "en-IN",
      mainEntity: { "@id": ID.person },
      primaryImageOfPage: { "@type": "ImageObject", url: `${SITE_URL}/dr-maitrayee-roy.webp` },
    },
    {
      "@type": "Person",
      "@id": ID.person,
      name: SITE_NAME,
      honorificPrefix: "Prof. (Dr.)",
      url: SITE_URL,
      image: `${SITE_URL}/dr-maitrayee-roy.webp`,
      email: "mailto:ms.maitrayee.roy@gmail.com",
      telephone: "+91-88006-83953",
      jobTitle: "Professor of Pathology",
      description:
        "Histopathologist, professor and FRCPath educator based in Ambala, Haryana. Professor of Pathology at MMDU, co-owner of Maitri Diagnostic Lab and co-founder of eLearningFRCPath.",
      hasOccupation: { "@type": "Occupation", name: "Histopathologist" },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ambala",
        addressRegion: "Haryana",
        addressCountry: "IN",
      },
      alumniOf: [
        {
          "@type": "CollegeOrUniversity",
          name: "All India Institute of Medical Sciences, New Delhi",
          address: { "@type": "PostalAddress", addressLocality: "New Delhi", addressCountry: "IN" },
        },
        {
          "@type": "CollegeOrUniversity",
          name: "Jawaharlal Nehru Medical College, Belgaum",
          address: { "@type": "PostalAddress", addressLocality: "Belgaum", addressRegion: "Karnataka", addressCountry: "IN" },
        },
        {
          "@type": "CollegeOrUniversity",
          name: "Manipal College of Medical Sciences, Pokhara",
          address: { "@type": "PostalAddress", addressLocality: "Pokhara", addressCountry: "NP" },
        },
      ],
      hasCredential: [
        { "@type": "EducationalOccupationalCredential", name: "MBBS", credentialCategory: "degree" },
        { "@type": "EducationalOccupationalCredential", name: "MD Pathology", credentialCategory: "degree" },
        {
          "@type": "EducationalOccupationalCredential",
          name: "FRCPath (Histopathology), The Royal College of Pathologists, UK",
          credentialCategory: "diploma",
        },
      ],
      knowsAbout: [
        "Histopathology",
        "Oncopathology",
        "Immunohistochemistry",
        "Cytopathology",
        "Nephropathology",
        "Gastrointestinal and Liver Pathology",
        "Gynaecological Pathology",
        "FRCPath examination coaching",
      ],
      memberOf: [
        { "@type": "Organization", name: "The Royal College of Pathologists (UK)" },
        { "@type": "Organization", name: "Indian Association of Pathologists and Microbiologists" },
        { "@type": "Organization", name: "Association of Practicing Pathologists of Haryana" },
      ],
      worksFor: [
        { "@type": "CollegeOrUniversity", name: "Maharishi Markandeshwar (Deemed to be) University, Mullana" },
        { "@id": ID.lab },
        { "@id": ID.elearning },
      ],
      sameAs: [
        "https://www.linkedin.com/in/maitrayee-roy-37870936/",
        "https://www.researchgate.net/profile/Maitrayee_Roy2",
        "https://scholar.google.com/citations?user=Xg4N75wAAAAJ&hl=en",
      ],
    },
    {
      "@type": "DiagnosticLab",
      "@id": ID.lab,
      name: "Maitri Diagnostic Lab",
      url: "https://maitridiagnosticlab.in/",
      logo: `${SITE_URL}/maitri-diagnostics-logo.png`,
      image: `${SITE_URL}/maitri-diagnostics-logo.png`,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Barnala Road, Baldev Nagar, Delhi-Chandigarh Highway",
        addressLocality: "Ambala City",
        addressRegion: "Haryana",
        addressCountry: "IN",
      },
      founder: { "@id": ID.person },
      email: "mailto:ms.maitrayee.roy@gmail.com",
      telephone: "+91-88006-83953",
    },
    {
      "@type": "EducationalOrganization",
      "@id": ID.elearning,
      name: "AM PATH E-Learning Private Limited",
      alternateName: "eLearningFRCPath",
      url: "https://www.elearningfrcpath.com/",
      logo: `${SITE_URL}/elearningfrcpath-logo.png`,
      description:
        "Online mentorship platform for FRCPath (Histopathology) Part 1 and Part 2, NEET-SS (Oncopathology) and INI-SS preparation.",
      founder: { "@id": ID.person },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Ram Nagar, Baldev Nagar",
        addressLocality: "Ambala City",
        addressRegion: "Haryana",
        postalCode: "134007",
        addressCountry: "IN",
      },
      sameAs: [
        "https://www.facebook.com/Pathology-e-learning-platform-for-FRCpath-113541467052109",
        "https://www.instagram.com/elearningfrcpath/",
        "https://www.youtube.com/@drmaitrayeeroyfrcpathdraks3532",
        "https://x.com/elearningf8199",
      ],
    },
    ...publications.map((p) => ({
      "@type": "ScholarlyArticle",
      headline: p.title,
      ...(p.url ? { url: p.url } : {}),
      author: { "@id": ID.person },
      datePublished: isoYear(p.date),
      isPartOf: { "@type": "Periodical", name: p.journal },
      inLanguage: "en",
    })),
  ],
};
