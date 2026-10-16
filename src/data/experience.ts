import type { Experience } from "../types/content";

export const experiences: Experience[] = [
  {
    id: "pitb",
    organization: "Punjab Information Technology Board (PITB)",
    location: "Arfa Karim Technology Incubator, Lahore, Pakistan",
    startDate: "19 August 2026",
    endDate: "30 September 2026",
    summary:
      "My first internship during BS Artificial Intelligence studies. The confirmed body of work includes Urdu and English document/text detection.",
    work: [
      "Worked on Urdu and English document and text detection.",
      "This was a first professional internship alongside BS Artificial Intelligence studies.",
    ],
    relatedProjectSlugs: ["document-text-detection"],
    images: [
      {
        src: null,
        suggestedPath: "/images/internship/pitb-workspace.jpg",
        alt: "PITB internship photograph",
        caption: "Internship photograph to be added",
      },
    ],
  },
];
