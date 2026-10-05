import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

// Titles, journals and years match the client's CV (see CLAUDE.md). Papers flagged
// withBali also appear on drakshay.com; keep titles and years identical on both sites.
// No DOIs/PubMed links are verified yet, so none are listed.
export const publications: { title: string; journal: string; date: string; withBali?: boolean; url?: string }[] = [
  { title: "Simple Nephrectomy for Non-Functioning Kidney: An Institutional Experience with Non-Neoplastic and Incidentally Detected Neoplastic Lesions", journal: "Int J Surg Pathol", date: "2025;33(8):1759-66" },
  { title: "Immunohistochemical Evaluation of Retinoblastoma Gene Status in Invasive Breast Carcinoma and Its Correlation with Clinicopathological Variables", journal: "Int J Drug Deliv Technol", date: "2026" },
  { title: "Expression of Cyclin D1 and Claudin-1 in Invasive Breast Carcinoma and Their Correlation with Clinicopathological Parameters", journal: "Iran J Pathol", date: "2024" },
  { title: "Screening of Peripheral Blood Film for Abnormalities in Leucocyte Morphology in Mild to Moderate COVID-19", journal: "Int J Science and Research", date: "2022", withBali: true },
  { title: "Desmoplastic Small Round Cell Tumor of the Ovary: A Rare but Poor Prognostic Disease in a Young Woman", journal: "Indian J Pathol Microbiol", date: "2021" },
  { title: "Cytomorphology of Hepatoblastoma with Histological Correlation and Role of SALL4 Immunocytochemistry", journal: "Cancer Cytopathology", date: "2020" },
  { title: "M2G1G2 White Blood Cell Flag by Three-Part Automated Hematology Analyzer: A Hint to Dengue Infection", journal: "J Lab Physicians", date: "2019", withBali: true },
  { title: "Quantitative Histology-Based Classification System for Intestinal Mucosal Changes in Celiac Disease", journal: "Intest Res", date: "2019" },
  { title: "Glottic Neurogenic Tumor: A Highly Uncommon Site for Schwannomas", journal: "J Cancer Res Ther", date: "2018" },
  { title: "Multifocal Osseous Epithelioid Hemangioendothelioma Involving Extremities and Spine with Visceral Metastasis", journal: "Indian J Med Paediatr Oncol", date: "2018" },
  { title: "An Institutional Experience with The Paris System: A Paradigm Shift in Reporting Urine Cytology", journal: "Cytopathology", date: "2017" },
  { title: "Androgen Receptor Expression in Endometrial Stromal Sarcoma: Correlation with Clinicopathologic Features", journal: "Int J Gynecol Pathol", date: "2017" },
  { title: "Ampullary Adenocarcinoma with Osteoclast Giant Cells, a Unique Entity", journal: "Tropical Gastroenterology", date: "2017" },
  { title: "Mixed Phenotypic Acute Leukemia with Myeloid Sarcoma of the Thyroid Gland, Detected on FDG PET/CT", journal: "Indian J Nucl Med", date: "2017" },
  { title: "Role of Random Biopsies in Surveillance of Dysplasia in Ulcerative Colitis Patients with High Risk of Colorectal Cancer", journal: "Intest Res", date: "2016" },
  { title: "Umbilical Cord Ulceration: An Under Diagnosed Entity", journal: "Obstet Gynecol Sci", date: "2016" },
  { title: "Extragonadal Yolk Sac Tumor of the Head and Neck Region: A Report of Two Cases", journal: "J Cancer Res Ther", date: "2015" },
  { title: "Primary Langerhans Cell Histiocytosis of the Thyroid Gland: Role of Langerin in Cytological Diagnosis", journal: "Cytopathology", date: "2015" },
  { title: "Metastatic Ampullary Adenocarcinoma in Exfoliative Sputum Cytology: A Rare Presentation", journal: "Lung India", date: "2015" },
  { title: "Primary Extraskeletal Osteosarcoma of Gall Bladder", journal: "Tropical Gastroenterology", date: "2015" },
  { title: "Letter to the Editor on TTF-1 and Napsin-A in Cholangiocarcinomas", journal: "Am J Surg Pathol", date: "2015" },
  { title: "Severe Aplastic Anemia Manifesting After Complete Remission of Acute Promyelocytic Leukemia", journal: "Indian J Hematol Blood Transfus", date: "2014" },
  { title: "Intensive Method of Assessment and Classification of the Bone Marrow Iron Status: A Study of 80 Patients", journal: "Indian J Pathol Microbiol", date: "2013", withBali: true },
  { title: "Primary Cutaneous Leiomyosarcoma: A Rare Malignant Neoplasm", journal: "Indian Dermatol Online J", date: "2013", withBali: true },
  { title: "Congenital Diaphragmatic Hernia with Hypoplastic Lungs, Heart, and Additional Anomalies: A Case of ?Fryns Syndrome", journal: "J NTR Univ Health Sci", date: "2013", withBali: true },
  { title: "Glomerulogenesis: Can It Predict the Gestational Age? A Study of 176 Fetuses", journal: "Indian J Pathol Microbiol", date: "2012" },
  { title: "Gestational Age Estimation from Hand and Foot Length", journal: "J South India Medicolegal Association", date: "2012" },
  { title: "Cutaneous Clear Cell Sarcoma: A Rare Tumor with Difficult Distinction from Malignant Melanoma", journal: "J Lab Physicians", date: "2012", withBali: true },
  { title: "Cutaneous Epithelioid Angiosarcoma: An Aggressive Tumor with Potential Diagnostic Trap", journal: "Indian J Dermatol Venereol Leprol", date: "2012", withBali: true },
];

export default function Publications() {
  return (
    <section id="publications" aria-labelledby="publications-title" className="bg-navy-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading id="publications-title" title="Publications" />
        <p className="-mt-6 mb-10 text-gray-600">
          25+ publications. Profiles:{" "}
          <a
            href="https://www.researchgate.net/profile/Maitrayee_Roy2"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-navy underline-offset-4 transition-colors hover:text-navy-500 hover:underline"
          >
            ResearchGate
          </a>{" "}
          and{" "}
          <a
            href="https://scholar.google.com/citations?user=Xg4N75wAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-navy underline-offset-4 transition-colors hover:text-navy-500 hover:underline"
          >
            Google Scholar
          </a>
          .
        </p>
        <ol className="space-y-4">
          {publications.map((p, i) => (
            <Reveal
              as="li"
              key={p.title}
              className="flex gap-5 rounded-lg bg-white p-5 shadow-sm hover:-translate-y-0.5 hover:shadow-md"
            >
              <span className="text-2xl font-bold text-navy-100">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-semibold text-navy">{p.title}</h3>
                <p className="mt-1 text-sm text-gray-600">
                  <em>{p.journal}</em>, {p.date}
                  {p.withBali && " (with Dr. Akshay Bali)"}
                </p>
                {p.url && (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-sm font-semibold text-navy-500 underline-offset-4 transition-colors hover:text-navy hover:underline"
                  >
                    View on PubMed &rarr;
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
