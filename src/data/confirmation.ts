import type { ConfirmationItem } from "../types/content";

export const confirmationChecklist: ConfirmationItem[] = [
  {
    id: "university",
    topic: "University name and campus",
    detail: "Not listed on the live site. Add in src/data/education.ts and src/data/profile.ts.",
  },
  {
    id: "gpa-grad",
    topic: "GPA and graduation year",
    detail: "Left empty on purpose.",
  },
  {
    id: "email-github-resume",
    topic: "Email, GitHub, and resume file",
    detail: "Placeholders only. Do not enable a resume download until a real PDF exists in /public.",
  },
  {
    id: "pitb-title",
    topic: "PITB job title, supervisor, and certificate",
    detail: "Internship org, location, dates, and document/text detection work are confirmed. Title and supervisor are not.",
    related: "experience",
  },
  {
    id: "parking-link",
    topic: "Parking Management: hardware vs Python/Tkinter",
    detail: "Both implementations are documented. Confirm whether they are one system or two related projects.",
    related: "parking-management-system",
  },
  {
    id: "object-detector",
    topic: "Hardware-Based Object Detector",
    detail: "Confirm components and detection method before naming sensors or algorithms.",
    related: "hardware-based-object-detector",
  },
  {
    id: "tilt",
    topic: "Document Alignment / Tilt-Angle Detection",
    detail: "Confirm completion status and final results.",
    related: "document-alignment-tilt-detection",
  },
  {
    id: "ml-metrics",
    topic: "ML and CV metrics, datasets, architectures",
    detail: "Fraud detection, vehicle CNN, gender CNN, and text detection should not show accuracy numbers until verified.",
  },
  {
    id: "todo-stack",
    topic: "To-Do List tech stack",
    detail: "Application exists; language and framework are unconfirmed.",
  },
  {
    id: "stego-stack",
    topic: "Steganography cipher and carrier",
    detail: "Encryption + steganography are confirmed; specifics are not.",
  },
  {
    id: "door-lock-parts",
    topic: "Smart Door Lock components",
    detail: "Arduino-based hardware is confirmed; bill of materials is not.",
  },
  {
    id: "event-os",
    topic: "Smart Event Management OS mapping",
    detail: "Java Swing + OS concepts confirmed; exact algorithms are not.",
  },
  {
    id: "source-links",
    topic: "Source code URLs",
    detail: "All project sourceCodeUrl fields are currently null.",
  },
  {
    id: "photos",
    topic: "Portraits, certificates, hardware photos, screenshots",
    detail: "Drop files into public/images using the suggestedPath on each record, then set src to that path.",
  },
  {
    id: "activities-extra",
    topic: "Societies, sports, extra leadership, workshops",
    detail: "Fill activitySlots in src/data/activities.ts and set confirmed: true.",
  },
  {
    id: "certificates",
    topic: "Certificate titles and issuers",
    detail: "Cards exist as placeholders only. Set confirmed: true to publish.",
  },
  {
    id: "declamation-meta",
    topic: "Declamation year, venue, and result",
    detail: "Participation is confirmed; awards are not assumed.",
  },
  {
    id: "sdg-org",
    topic: "SDG 14 organising body",
    detail: "Role and 2025–26 period are confirmed; organisation name is not.",
  },
  {
    id: "networking-labs",
    topic: "Networking labs and Packet Tracer",
    detail: "Section is ready; do not list completed labs until they are added as projects.",
  },
];
