import type { Activity } from "../types/content";

export const activities: Activity[] = [
  {
    id: "all-pakistan-declamation",
    title: "All-Pakistan Bilingual Declamation",
    summary:
      "Participated in an All-Pakistan bilingual declamation. Placement, host institution, and year can be added when confirmed.",
    kind: "speaking",
    period: null,
    confirmed: true,
    images: [
      {
        src: null,
        suggestedPath: "/images/activities/all-pakistan-declamation.jpg",
        alt: "All-Pakistan bilingual declamation",
      },
    ],
  },
  {
    id: "university-declamation",
    title: "University Declamation Competitions",
    summary:
      "Took part in university declamation competitions, continuing public-speaking practice beyond a single event.",
    kind: "speaking",
    period: null,
    confirmed: true,
    images: [
      {
        src: null,
        suggestedPath: "/images/activities/university-declamation.jpg",
        alt: "University declamation competition",
      },
    ],
  },
  {
    id: "seerat-un-nabi-hosting",
    title: "Seerat-un-Nabi ﷺ Event Hosting",
    summary:
      "Hosting experience for a Seerat-un-Nabi ﷺ event, combining presence, structure, and respect for the occasion.",
    kind: "hosting",
    period: null,
    confirmed: true,
    images: [
      {
        src: null,
        suggestedPath: "/images/events/seerat-un-nabi-hosting.jpg",
        alt: "Seerat-un-Nabi event hosting",
      },
    ],
  },
  {
    id: "sdg-14-ambassador",
    title: "SDG 14: Life Below Water Ambassador",
    summary:
      "Ambassador role for SDG 14: Life Below Water for 2025–26. Organizing body and specific campaigns can be added when confirmed.",
    kind: "leadership",
    period: "2025–26",
    confirmed: true,
    images: [
      {
        src: null,
        suggestedPath: "/images/activities/sdg-14-ambassador.jpg",
        alt: "SDG 14 Life Below Water ambassador activity",
      },
    ],
  },
  {
    id: "ramadan-donation-drive",
    title: "Ramadan Donation Drive",
    summary:
      "Participated in a Ramadan donation drive as part of community and volunteer work.",
    kind: "volunteering",
    period: null,
    confirmed: true,
    images: [
      {
        src: null,
        suggestedPath: "/images/activities/ramadan-donation-drive.jpg",
        alt: "Ramadan donation drive",
      },
    ],
  },
  {
    id: "videography-editing",
    title: "Videography and Video Editing",
    summary:
      "Creates and edits video. Tools, published pieces, and event coverage can be linked when files are ready.",
    kind: "media",
    confirmed: true,
    images: [
      {
        src: null,
        suggestedPath: "/images/media/videography.jpg",
        alt: "Videography and editing still",
      },
    ],
  },
  {
    id: "event-planning-photography",
    title: "Event Planning and Event Photography",
    summary:
      "Supports events through planning and photography — from preparation to a visual record of the day.",
    kind: "media",
    confirmed: true,
    images: [
      {
        src: null,
        suggestedPath: "/images/events/event-photography.jpg",
        alt: "Event photography",
      },
    ],
  },
  {
    id: "nature-portrait-photography",
    title: "Nature and Portrait Photography",
    summary:
      "Practises nature photography and portrait photography as a creative discipline alongside technical study.",
    kind: "photography",
    confirmed: true,
    images: [
      {
        src: null,
        suggestedPath: "/images/media/nature-portrait-photography.jpg",
        alt: "Nature or portrait photography by Jannat Fatima",
      },
    ],
  },
];

/** Empty, ready-to-fill records. They stay off the website until confirmed is set to true and a title is written. */
export const activitySlots: Activity[] = [
  {
    id: "society-slot-1",
    title: "",
    summary: "Add a university society, role, and dates here.",
    kind: "society",
    confirmed: false,
    images: [
      {
        src: null,
        suggestedPath: "/images/activities/society-1.jpg",
        alt: "University society activity",
      },
    ],
  },
  {
    id: "sports-slot-1",
    title: "",
    summary: "Add a sport, team, or tournament here.",
    kind: "sports",
    confirmed: false,
    images: [
      {
        src: null,
        suggestedPath: "/images/sports/sports-1.jpg",
        alt: "Sports photograph",
      },
    ],
  },
  {
    id: "leadership-slot-1",
    title: "",
    summary: "Add a further leadership role or event-organization credit here.",
    kind: "leadership",
    confirmed: false,
    images: [
      {
        src: null,
        suggestedPath: "/images/activities/leadership-1.jpg",
        alt: "Leadership or event organization",
      },
    ],
  },
  {
    id: "workshop-slot-1",
    title: "",
    summary: "Add a workshop, training, or professional-development session here.",
    kind: "workshop",
    confirmed: false,
    images: [
      {
        src: null,
        suggestedPath: "/images/activities/workshop-1.jpg",
        alt: "Workshop or training",
      },
    ],
  },
];

export const publishedActivities = activities.filter((item) => item.confirmed && item.title);
