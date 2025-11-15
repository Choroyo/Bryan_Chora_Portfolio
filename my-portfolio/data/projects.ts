export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  image: string;
  technologies: string[];
  highlights: string[];
  repoUrl?: string;
  liveUrl?: string;
  year: string;
};

export const projects: Project[] = [
  {
    slug: "rowdy-runner",
    title: "RowdyRunner",
    summary: "Fast-paced endless runner built with Pygame and a custom physics loop.",
    description:
      "RowdyRunner is an arcade-style endless runner that I built to experiment with procedural obstacle generation and custom physics. The game adapts to the player’s skill level by tweaking spawn frequency and surface friction in real-time. I also wrote a simple animation system that bundles sprite sheets and hitboxes into a single config file, so creating new enemies is as easy as dropping an image.",
    image: "/images/RowdyRunner.png",
    technologies: ["Python", "Pygame", "Aseprite"],
    highlights: [
      "Procedural difficulty scaling keeps play sessions engaging.",
      "Tight keyboard controls and custom physics loop for smooth gameplay.",
      "Tooling pipeline automatically slices sprite sheets for the engine.",
    ],
    liveUrl: "https://www.youtube.com/watch?v=iCcqmYLD114",
    year: "2024",
  },
  {
    slug: "world-champion-2026",
    title: "The Next World Champion 2026",
    summary: "Machine learning powered model that predicts World Cup outcomes.",
    description:
      "Our hackathon team ingested decades of FIFA match data, generated player/team embeddings, and trained an ensemble of gradient boosting and logistic regression models to predict scores for upcoming fixtures. I owned the feature store, data cleaning, and evaluation harness that let us test every experiment with a single CLI command.",
    image: "/images/AITXhackathon.png",
    technologies: ["Python", "NumPy", "pandas", "scikit-learn"],
    highlights: [
      "Automated data normalization for 15+ public soccer datasets.",
      "Explainable model cards so non-technical judges understood the predictions.",
      "Won the AITX Hackathon award for best predictive analytics project.",
    ],
    repoUrl: "https://github.com/Otter2022/AITXhackathon",
    year: "2023",
  },
  {
    slug: "door-ai",
    title: "Door.AI",
    summary: "Face-recognition security prototype powered by TensorFlow and OpenCV.",
    description:
      "Door.AI combines OpenCV powered facial detection with a TensorFlow Lite classifier running on an embedded device. The system unlocks a smart deadbolt when a trusted face is detected and sends real-time alerts with a snapshot for every failed attempt. I focused on model quantization and the secure handoff between the ML layer and the hardware relay.",
    image: "/images/Door_pic.png",
    technologies: ["TensorFlow", "OpenCV", "Raspberry Pi", "Flask"],
    highlights: [
      "Supports on-device enrollment with multi-factor verification.",
      "Streaming dashboard built with Flask + WebSockets for monitoring events.",
      "Optimized inference pipeline runs under 150ms on a Raspberry Pi 4.",
    ],
    liveUrl:
      "https://utsacloud-my.sharepoint.com/:p:/g/personal/justin_pardo_my_utsa_edu/EZ9-i8u_pGVFiYjgFLUY1RkBRJAmL4Qnn3iGQR9QWg7jvA?rtime=ztUgU7_R3Eg",
    year: "2023",
  },
  {
    slug: "asl-dinosaurs",
    title: "ASL Dinosaurs",
    summary: "Real-time ASL translation demo that recognizes gestures from any webcam.",
    description:
      "ASL Dinosaurs began as a Devpost hackathon project focused on bridging the accessibility gap for video calls. We trained a lightweight CNN on custom hand-shape data and wrapped it with a WebRTC interface that draws the detected sign overlaid on the live feed. My work included the data labeling pipeline and the interactive UI built with React and Canvas.",
    image: "/images/AI_Picture.png",
    technologies: ["Python", "TensorFlow", "React", "WebRTC"],
    highlights: [
      "Custom data augmentation pipeline increased accuracy by 14%.",
      "Live feedback loop so users can adjust hand placement in real time.",
      "Deployed the demo on Vercel with an edge-friendly WASM runtime.",
    ],
    liveUrl: "https://devpost.com/software/asl-live-translation",
    year: "2022",
  },
  {
    slug: "nitro-coffee",
    title: "Nitro Coffee",
    summary: "Android social platform for coffee lovers with gamified challenges.",
    description:
      "Nitro Coffee is a community app where users share tasting notes, unlock brewing achievements, and find local pop-up cafes. I built the feed experience, push notification service, and offline mode using Room so posts sync automatically when a device reconnects.",
    image: "/images/coffeAppPic.png",
    technologies: ["Java", "Android Studio", "Firebase", "Room"],
    highlights: [
      "Modularized codebase with clear boundaries for features and data.",
      "Implemented Firebase Authentication + Firestore security rules.",
      "Offline-first caching reduced API calls by 38% on flaky networks.",
    ],
    repoUrl: "https://github.com/UTSA-CS-3443/JavaCoffee/tree/secondmain",
    year: "2021",
  },
];
