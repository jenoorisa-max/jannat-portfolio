import type { CertificateItem } from "../types/content";

export const certificates: CertificateItem[] = [
  {
    id: "ramadan-donation-drive",
    title: "Sahara Bano Ramadan Donation Drive",
    issuer: "Sahara Bano",
    summary:
      "Certificate related to participation in the Sahara Bano Ramadan Donation Drive.",
    confirmed: true,
    image: {
      src: "/images/certificates/donation-drive.jpg",
      suggestedPath: "/images/certificates/donation-drive.jpg",
      alt: "Sahara Bano Ramadan Donation Drive certificate",
    },
  },
  {
    id: "declamation-certificate-1",
    title: "All-Pakistan Bilingual Declamation",
    summary:
      "Certificate from the first All-Pakistan bilingual declamation competition.",
    confirmed: true,
    image: {
      src: "/images/certificates/declamation-1.jpg",
      suggestedPath: "/images/certificates/declamation-1.jpg",
      alt: "First All-Pakistan bilingual declamation certificate",
    },
  },
  {
    id: "declamation-certificate-2",
    title: "All-Pakistan Bilingual Declamation",
    summary:
      "Certificate from the second All-Pakistan bilingual declamation competition.",
    confirmed: true,
    image: {
      src: "/images/certificates/declamation-2.jpg",
      suggestedPath: "/images/certificates/declamation-2.jpg",
      alt: "Second All-Pakistan bilingual declamation certificate",
    },
  },
  {
    id: "sustainable-living-webinar",
    title: "Sustainable Living Webinar",
    summary:
      "Certificate related to participation in a sustainable living webinar.",
    confirmed: true,
    image: {
      src: "/images/certificates/sustainable-living-webinar.jpg",
      suggestedPath: "/images/certificates/sustainable-living-webinar.jpg",
      alt: "Sustainable Living webinar certificate",
    },
  },
];

export const publishedCertificates = certificates.filter(
  (item) => item.confirmed && item.image.src !== null,
);