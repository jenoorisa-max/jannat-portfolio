
import type { Project, ProjectCategoryId } from "../types/content";

export const projectCategories: {
  id: ProjectCategoryId;
  label: string;
}[] = [
  { id: "ai-ml", label: "AI & Machine Learning" },
  { id: "computer-vision", label: "Computer Vision" },
  { id: "hardware", label: "Hardware & Embedded Systems" },
  { id: "software", label: "Software Development" },
  { id: "cybersecurity", label: "Cybersecurity" },
  { id: "networking", label: "Networking" },
  { id: "academic", label: "Academic Work" },
];

export const projects: Project[] = [
  {
    slug: "smart-door-lock-management-system",
    title: "Smart Door Lock Management System",
    summary:
      "An Arduino-based electronic door lock controlled through a password system.",
    categories: ["hardware"],
    tags: ["Arduino", "Hardware", "Password Security"],
    status: "completed",
    tools: ["Arduino"],
    objective:
      "To build a password-controlled electronic door lock.",
    problem:
      "A door lock needs to verify the entered password before allowing access.",
    methodology:
      "The system checks the entered password. A correct password operates the lock, while an incorrect password displays 'Try Again'. After three incorrect attempts, it stops accepting further attempts.",
    contribution:
      "Built an Arduino-based password-controlled door lock project.",
    results:
      "The project demonstrates password-based access control and limited login attempts.",
    limitations: "",
    sourceCodeUrl: null,
    images: [],
  },
  {
    slug: "smart-event-management-system",
    title: "Smart Event Management System",
    summary:
      "A Java project demonstrating Operating Systems concepts through multithreading and concurrency.",
    categories: ["software", "academic"],
    tags: ["Java", "Multithreading", "Operating Systems"],
    status: "completed",
    tools: ["Java"],
    objective:
      "To apply Operating Systems concepts through a Java event management project.",
    problem:
      "Concurrent tasks and shared resources require proper coordination and synchronization.",
    methodology:
      "The project explores threads, thread synchronization, deadlock, Semaphore, Exchanger, Phaser, CyclicBarrier, and CountDownLatch.",
    contribution:
      "Developed a Java project applying concepts studied in Operating Systems.",
    results:
      "Demonstrates multithreading and concurrency concepts through a practical academic project.",
    limitations: "",
    sourceCodeUrl: null,
    images: [],
  },
  {
    slug: "encrypted-steganography",
    title: "Encrypted Steganography: Secret Message Hider",
    summary:
      "A Python project for hiding secret text inside an image.",
    categories: ["cybersecurity", "software"],
    tags: ["Python", "Steganography", "Encryption"],
    status: "completed",
    tools: ["Python"],
    objective:
      "To explore hiding secret messages within images.",
    problem:
      "Private messages may need to be concealed within an image rather than displayed openly.",
    methodology:
      "The project focuses on secret-message hiding using image steganography.",
    contribution:
      "Developed a Python-based secret message hiding project.",
    results:
      "A project exploring image-based concealment of secret text.",
    limitations: "",
    sourceCodeUrl: null,
    images: [],
  },
  {
    slug: "parking-management-system",
    title: "Parking Management System",
    summary:
      "A parking management project involving a Python/Tkinter desktop application and Arduino hardware work.",
    categories: ["hardware", "software", "academic"],
    tags: ["Python", "Tkinter", "OOP", "Arduino"],
    status: "completed",
    tools: ["Python", "Tkinter", "Arduino"],
    objective:
      "To explore parking management through software and hardware projects.",
    problem:
      "Parking management requires tracking available spaces and handling vehicle entry and exit.",
    methodology:
      "The Python/Tkinter application uses OOP and manages 12 parking slots, slot assignment and availability, vehicle entry and exit, and an activity log. The project also includes Arduino hardware work.",
    contribution:
      "Worked on the parking management application and its related hardware project.",
    results:
      "The desktop application supports management of 12 parking slots and records activity.",
    limitations: "",
    sourceCodeUrl: null,
    images: [],
  },
  {
    slug: "credit-card-fraud-detection",
    title: "Credit Card Fraud Detection",
    summary:
      "A machine learning project focused on identifying potentially fraudulent credit card transactions.",
    categories: ["ai-ml", "academic"],
    tags: ["Machine Learning", "Fraud Detection"],
    status: "completed",
    tools: ["Machine Learning"],
    objective:
      "To explore machine learning for credit card fraud detection.",
    problem:
      "Fraudulent transactions need to be distinguished from legitimate transaction activity.",
    methodology:
      "The project applies machine learning to transaction data for fraud detection.",
    contribution:
      "Developed a machine learning project focused on fraud detection.",
    results:
      "Explores the use of machine learning to identify potentially fraudulent transactions.",
    limitations: "",
    sourceCodeUrl: null,
    images: [],
  },
  {
    slug: "to-do-list-application",
    title: "To-Do List Application",
    summary:
      "A task management application for adding tasks and marking them as complete.",
    categories: ["software", "academic"],
    tags: ["Python", "Task Management", "OOP"],
    status: "completed",
    tools: ["Python"],
    objective:
      "To create a simple application for managing everyday tasks.",
    problem:
      "Keeping track of tasks makes it easier to organize work and monitor progress.",
    methodology:
      "The application allows users to add tasks and mark completed tasks.",
    contribution:
      "Developed a to-do list application.",
    results:
      "Provides basic task creation and completion tracking.",
    limitations: "",
    sourceCodeUrl: null,
    images: [],
  },
  {
    slug: "hardware-based-object-detector",
    title: "Hardware-Based Object Detector",
    summary:
      "An Arduino-based hardware project that uses a sensor to detect an object in front of it and indicate the result through an LED.",
    categories: ["hardware"],
    tags: ["Arduino", "Sensors", "Hardware"],
    status: "completed",
    tools: ["Arduino", "Sensor", "LED"],
    objective:
      "To build a hardware-based object detection system.",
    problem:
      "A hardware system needs to detect an object and communicate the detection state.",
    methodology:
      "The system detects an object in front of it and changes the LED indicator between green and red.",
    contribution:
      "Built an Arduino-based object detection project.",
    results:
      "Demonstrates sensor-based detection with LED status indication.",
    limitations: "",
    sourceCodeUrl: null,
    images: [],
  },
  {
    slug: "vehicle-classification-cnn",
    title: "Vehicle Classification Using CNN",
    summary:
      "A custom convolutional neural network trained to classify images into vehicle-related categories.",
    categories: ["ai-ml", "computer-vision"],
    tags: ["CNN", "Python", "Computer Vision"],
    status: "completed",
    tools: ["CNN", "Computer Vision"],
    objective:
      "To classify images using a convolutional neural network.",
    problem:
      "Image classification requires a model that can learn visual patterns from image data.",
    methodology:
      "A custom CNN was trained on a dataset to classify aeroplanes, cars, motorcycles, and ships.",
    contribution:
      "Trained the CNN model and saved its weights.",
    results:
      "The project includes trained model weights for vehicle classification.",
    limitations: "",
    sourceCodeUrl: null,
    images: [],
  },
  {
    slug: "gender-classification-cnn",
    title: "Gender Classification Using CNN",
    summary:
      "A convolutional neural network project that classifies images into men and women categories.",
    categories: ["ai-ml", "computer-vision"],
    tags: ["CNN", "Computer Vision", "Image Classification"],
    status: "completed",
    tools: ["CNN", "Computer Vision"],
    objective:
      "To explore image classification using a convolutional neural network.",
    problem:
      "Image-based classification involves learning visual patterns from training images.",
    methodology:
      "A CNN-based model is used to classify images into the project's men and women categories.",
    contribution:
      "Developed a CNN-based image classification project.",
    results:
      "Demonstrates image classification using a convolutional neural network.",
    limitations: "",
    sourceCodeUrl: null,
    images: [],
  },
  {
    slug: "document-text-detection",
    title: "Document Text Detection — Urdu & English",
    summary:
      "A YOLO-based project focused on detecting Urdu and English text in documents during the PITB internship.",
    categories: ["ai-ml", "computer-vision"],
    tags: ["YOLO", "Text Detection", "Urdu", "English"],
    status: "completed",
    relatedExperienceId: "pitb",
    tools: ["YOLO"],
    objective:
      "To detect Urdu and English text in documents.",
    problem:
      "Documents containing Urdu and English text require text detection across different scripts.",
    methodology:
      "The project uses YOLO-based text detection for Urdu and English documents.",
    contribution:
      "Worked on document text detection during the PITB internship.",
    results:
      "Focused on detecting text in Urdu and English documents.",
    limitations: "",
    sourceCodeUrl: null,
    images: [],
  },
  {
    slug: "document-alignment-tilt-detection",
    title: "Document Alignment & Tilt-Angle Detection",
    summary:
      "A document-processing project using a custom CNN for document alignment and tilt-angle detection.",
    categories: ["ai-ml", "computer-vision"],
    tags: ["CNN", "Document Processing", "Alignment"],
    status: "completed",
    tools: ["CNN", "Computer Vision"],
    objective:
      "To detect document tilt angles and support document alignment.",
    problem:
      "Tilted documents may need alignment before further document processing.",
    methodology:
      "The project uses a custom CNN-based approach for document alignment and tilt-angle detection.",
    contribution:
      "Developed a CNN-based document alignment project.",
    results:
      "Focuses on document alignment and tilt-angle detection.",
    limitations: "",
    sourceCodeUrl: null,
    images: [],
  },
  {
    slug: "budget-tracker",
    title: "Budget Tracker",
    summary:
      "A database subject project developed during the third semester for tracking monthly expenses and budgets.",
    categories: ["software", "academic"],
    tags: ["Database", "Budget Management", "Expense Tracking"],
    status: "completed",
    tools: ["Database"],
    objective:
      "To track monthly expenses and monitor budgets.",
    problem:
      "Tracking spending helps users understand their expenses and avoid overspending.",
    methodology:
      "The project focuses on monthly budget management and expense tracking.",
    contribution:
      "Developed as a database subject project during the third semester.",
    results:
      "Provides a project focused on tracking expenses and monitoring monthly budgets.",
    limitations: "",
    sourceCodeUrl: null,
    images: [],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
