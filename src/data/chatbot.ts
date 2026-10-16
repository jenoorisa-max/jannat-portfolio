import { profile } from "./profile";
import { projects } from "./projects";
import { experiences } from "./experience";
import { publishedActivities } from "./activities";
import { skillGroups } from "./skills";

export const chatWelcome =
  "Hi, welcome to Jannat's portfolio. What would you like to know about her?";

export const suggestedQuestions: string[] = [];

interface ChatIntent {
  keywords: string[];
  answer: string;
}

const projectList = projects
  .map((project) => `• ${project.title} — ${project.summary}`)
  .join("\n");

const skillList = skillGroups
  .map((group) => `${group.title}: ${group.skills.join(", ")}`)
  .join("\n");

const activityList = publishedActivities
  .map((item) => `• ${item.title}${item.period ? ` (${item.period})` : ""}`)
  .join("\n");

const pitb = experiences[0];

const chatIntents: ChatIntent[] = [
  {
    keywords: ["who", "about", "jannat", "introduction", "bio", "student"],
    answer: `${profile.name} is a ${profile.program} student. ${profile.intro}`,
  },
  {
    keywords: ["project", "projects", "work", "built", "portfolio"],
    answer: `Here are Jannat's projects:\n${projectList}`,
  },
  {
    keywords: ["vision", "cnn", "vehicle", "gender", "document", "tilt", "alignment"],
    answer:
      "Jannat's computer vision projects include Vehicle Classification Using CNN, Gender Classification Using CNN, Document Text Detection in Urdu and English, and Document Alignment & Tilt-Angle Detection.",
  },
  {
    keywords: ["arduino", "hardware", "door", "lock", "parking", "object detector"],
    answer:
      "Jannat's hardware-related projects include the Smart Door Lock Management System, Parking Management System, and Hardware-Based Object Detector.",
  },
  {
    keywords: ["intern", "internship", "pitb", "punjab", "arfa", "lahore", "experience"],
    answer: pitb
      ? `${pitb.organization}, ${pitb.location}, ${pitb.startDate} – ${pitb.endDate}. ${pitb.summary}`
      : "Jannat completed an internship with the Punjab Information Technology Board at the Arfa Karim Technology Incubator in Lahore.",
  },
  {
    keywords: ["skill", "skills", "tech", "stack", "python", "java"],
    answer: `Jannat's technical skills include:\n${skillList}`,
  },
  {
    keywords: [
      "activity",
      "activities",
      "declamation",
      "speaking",
      "host",
      "sdg",
      "ramadan",
      "photo",
      "video",
      "leadership",
      "media",
      "society",
    ],
    answer: `Jannat's activities and involvement include:\n${activityList}`,
  },
  {
    keywords: ["contact", "email", "linkedin", "instagram", "message", "reach"],
    answer:
      "You can contact Jannat through:\nEmail: jenoorisa123@gmail.com\nLinkedIn: https://www.linkedin.com/in/jannat-fatima-a910113bb/\nInstagram: https://www.instagram.com/who.is.jannat/",
  },
  {
    keywords: ["education", "university", "degree", "study"],
    answer: `${profile.name} is studying ${profile.program}. Her educational journey includes Matric in Medical Sciences, Intermediate in Engineering, and a BS in Artificial Intelligence.`,
  },
  {
    keywords: ["chatbot", "ai model", "gpt", "are you"],
    answer:
      "I'm a portfolio assistant that answers questions using information about Jannat's projects, education, experience, skills, and activities.",
  },
];

const chatFallback =
  "I don't have that information available right now. You can ask me about Jannat's projects, education, internship, skills, activities, or contact details.";

export function answerFromPortfolio(message: string): string {
  const text = message.toLowerCase();

  const matchedProject = projects.find((project) =>
    text.includes(project.title.toLowerCase()),
  );

  if (matchedProject) {
    return `${matchedProject.title}: ${matchedProject.summary}`;
  }

  let best: { score: number; answer: string } | null = null;

  for (const intent of chatIntents) {
    const score = intent.keywords.reduce(
      (sum, keyword) =>
        text.includes(keyword) ? sum + keyword.length : sum,
      0,
    );

    if (score > 0 && (!best || score > best.score)) {
      best = { score, answer: intent.answer };
    }
  }

  return best?.answer ?? chatFallback;
}