import { FaFacebookF, FaInstagram } from "react-icons/fa";
import {
  HiHome,
  HiUser,
  HiDocumentText,
  HiServer,
  HiMail,
  HiChartBar,
  HiBriefcase,
} from "react-icons/hi";
import { IoFilmOutline, IoColorPaletteOutline } from "react-icons/io5";

import {
  ResumeEntry,
  SkillsData,
  ServicesData,
  ContactData,
  HeroData,
  AboutData,
  SidebarData,
  PortfolioData,
} from "./types";

import imgHero from "../../public/image/heroimg.jpg";
import imgAbout from "../../public/image/aboutimg.jpg";
import logo from "../../public/image/logo.jpg";
import imgColorGrading from "../../public/image/Color Grading.jpg";
import imgVideoEditing from "../../public/image/Video Editing.jpg";
import imgFilmFeElKhamsina from "../../public/image/Film fe el khamsina.jpg";
import imgEvent from "../../public/image/Event.jpg";
import imgPodcast from "../../public/image/Podcast.jpg";
import imgShortFilm from "../../public/image/Short film.jpg";
import imgPromo from "../../public/image/Promo.jpg";
import imgReels from "../../public/image/imgReels.jpeg";

// Sidebar Data
export const sidebarData: SidebarData = {
  name: "Ahmed Diaa",
  logo: logo,
  socialLinks: [
    {
      icon: FaFacebookF,
      href: "https://www.facebook.com/share/1BzUrgj9Uh/?mibextid=wwXIfr",
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/ahmed.diaa54?igsh=b3MzeDVoY3Y2ZG04&utm_source=qr",
    },
  ],
  navigationLinks: [
    { name: "Home", icon: HiHome, href: "#home", id: "home" },
    { name: "About", icon: HiUser, href: "#about", id: "about" },
    { name: "Skills", icon: HiChartBar, href: "#skills", id: "skills" },
    { name: "Resume", icon: HiDocumentText, href: "#resume", id: "resume" },
    {
      name: "Portfolio",
      icon: HiBriefcase,
      href: "#portfolio",
      id: "portfolio",
    },
    { name: "Services", icon: HiServer, href: "#services", id: "services" },
    { name: "Contact", icon: HiMail, href: "#contact", id: "contact" },
  ],
};

// Hero Section Data
export const heroData: HeroData = {
  name: "Ahmed Diaa",
  titles: ["Video Editor", "Colorist"],
  backgroundImage: imgHero,
};
// About Section Data
export const aboutData: AboutData = {
  title: "Editor & Colorist.",
  intro:
    "I’ve been working in the video editing field for a year. I started by taking specialized courses in editing and color grading. I trained and worked at media production companies.",
  bio: "Passionate about bringing stories to life through visual editing and precise color correction to create a compelling final product.",
  personalDetails: [
    { label: "Birthday", value: "15 June 2003" },
    { label: "Age", value: "22" },
    { label: "Phone", value: "01276321825" },
    { label: "Degree", value: "Student (Senior 2026)" },
    { label: "Email", value: "ahmeddiaa120@icloud.com" },
    { label: "City", value: "6th Of October" },
    { label: "Freelance", value: "Available" },
  ],
  image: imgAbout,
};

// Skills Section Data
export const skillsData: SkillsData = {
  intro:
    "Proficient in a variety of industry-standard software to bring creative visions to life through precise editing and professional color grading.",
  skillList: [
    { name: "Premiere Pro", percentage: 100 },
    { name: "DaVinci Resolve", percentage: 70 },
    { name: "Photoshop", percentage: 40 },
    { name: "After Effects", percentage: 40 },
  ],
};

// Resume Section Data
export const resumeData = {
  summary: {
    name: "AHMED DIAA",
    text: "A dedicated and creative video editor and colorist, currently studying Media Arts, with hands-on training experience in major media production environments. Passionate about visual storytelling and creating polished, impactful content.",
  },
  education: [
    {
      title: "BACHELOR OF APPLIED ARTS",
      date: "2022 - 2026 (Expected)",
      subtitle: "Faculty of Applied Arts, Media Arts & Advertising Section",
      description:
        "Focusing on the core principles of visual communication, advertising strategies, and modern media arts to build a strong foundation in the creative industry.",
    },
  ] as ResumeEntry[],
  experience: [
    {
      title: "VIDEO EDITOR",
      date: "Present",
      subtitle: "“Film Fe El Khamsinia” YouTube Channel",
      responsibilities: [
        "Editing and assembling recorded raw material into a suitable, finished product ready for broadcasting.",
        "Applying color correction, sound mixing, and visual effects to enhance video quality.",
      ],
    },
    {
      title: "TRAINEE",
      date: "Past Experience",
      subtitle: "ON TV Network & Media Production Company",
      responsibilities: [
        "Gained hands-on experience in professional studio environments.",
        "Trained in fundamental and advanced techniques of studio lighting and photography.",
        "Assisted in various stages of media production, from pre-production to post-production.",
      ],
    },
  ] as ResumeEntry[],
};

// Portfolio Section Data

import imgscreenshots2 from "../../public/video/color grading/v2/v2.png";
import imgscreenshots3 from "../../public/video/color grading/v3/v3.png";
import imgscreenshots4 from "../../public/video/color grading/v4/v4.png";
import imgscreenshots5 from "../../public/video/color grading/v5/v5.png";
import imgscreenshots6 from "../../public/video/color grading/v6/v6.png";
import imgscreenshots7 from "../../public/video/color grading/v7/v7.png";
import imgscreenshots8 from "../../public/video/color grading/v8/v8.png";
import imgscreenshots9 from "../../public/video/color grading/v9/v9.png";
import imgscreenshots10 from "../../public/video/color grading/v10/v10.png";

export const portfolioData: PortfolioData = {
  // ==================== Video Editing Section ====================
  videoEditing: {
    title: "Video Editing",
    description:
      "A collection of my video editing projects, including promos, events, podcasts, and short films.",
    imageUrl: imgVideoEditing,
    subCategories: [
      {
        slug: "film-fe-el-khamsina",
        title: "Film Fe El Khamsina",
        description:
          "A showcase of my editing work for the distinctive 'Film Fe El Khamsina' series.",
        imageUrl: imgFilmFeElKhamsina,
        projects: [
          {
            id: 1,
            description:
              "Showcasing the progression of video editing in Film fe el khamsinia",
            videoUrl: "/video/video editing/film fe el khamsina/v3.mp4",
            videoType: "widescreen",
          },
          {
            id: 2,
            videoUrl: "/video/video editing/film fe el khamsina/v2.mp4",
            videoType: "widescreen",
          },
          {
            id: 3,
            videoUrl: "/video/video editing/film fe el khamsina/v1.MP4",
            videoType: "widescreen",
          },
          {
            id: 35,
            description:
              "Edited 100+ videos, including several that exceeded 1M views. Here are some examples",
            links: [
              {
                label: "Youtube",
                url: "https://www.youtube.com/watch?v=NTE19wgT-EI",
              },
              {
                label: "Youtube",
                url: "https://www.youtube.com/watch?v=hX4ACtLHk-w",
              },
              {
                label: "Youtube",
                url: "https://www.youtube.com/watch?v=Gg0E9jUQzkc",
              },
              {
                label: "Youtube",
                url: "https://www.youtube.com/watch?v=_copPKZDnrM",
              },
              {
                label: "Youtube",
                url: "https://www.youtube.com/watch?v=UU-YpiXSl3U",
              },
            ],
          },
        ],
      },
      {
        slug: "reels",
        title: "Reels",
        description:
          "Dynamic, short-form vertical videos crafted to capture attention and boost engagement.",
        imageUrl: imgReels,
        projects: [
          {
            id: 4,
            videoUrl: "/video/video editing/reels/2-3.mp4",
            videoType: "reel",
          },
          {
            id: 5,
            videoUrl: "/video/video editing/reels/3-1.mp4",
            videoType: "reel",
          },
          {
            id: 6,
            videoUrl: "/video/video editing/reels/5-1.mp4",
            videoType: "reel",
          },
          {
            id: 7,
            videoUrl: "/video/video editing/reels/5-2.mp4",
            videoType: "reel",
          },
          {
            id: 8,
            videoUrl: "/video/video editing/reels/8.mp4",
            videoType: "reel",
          },
          {
            id: 9,
            videoUrl: "/video/video editing/reels/Makeup Vlog.mp4",
            videoType: "reel",
          },
          {
            id: 10,
            videoUrl: "/video/video editing/reels/TRY 1.mp4",
            videoType: "reel",
          },
          {
            id: 11,
            videoUrl: "/video/video editing/reels/try 2.mp4",
            videoType: "reel",
          },
          {
            id: 12,
            videoUrl: "/video/video editing/reels/tryy 5.mp4",
            videoType: "reel",
          },
          {
            id: 13,
            videoUrl: "/video/video editing/reels/vid 5.mp4",
            videoType: "reel",
          },
          {
            id: 14,
            videoUrl: "/video/video editing/reels/vid 33.mp4",
            videoType: "reel",
          },
        ],
      },
      {
        slug: "podcast",
        title: "Podcast",
        description:
          "Transforming audio podcasts into engaging visual experiences with multi-camera editing.",
        imageUrl: imgPodcast,
        projects: [
          {
            id: 15,
            videoUrl: "/video/video editing/podcast/new intro podcast.mp4",
            videoType: "reel",
          },
          {
            id: 16,
            videoUrl: "/video/video editing/podcast/new podddd.mp4",
            videoType: "widescreen",
          },
          {
            id: 17,
            videoUrl: "/video/video editing/podcast/pod 1.mp4",
            videoType: "reel",
          },
        ],
      },
      {
        slug: "promo",
        title: "Promo",
        description:
          "High-impact promotional videos and trailers designed to generate excitement and drive action for brands and events.",
        imageUrl: imgPromo,
        projects: [
          {
            id: 18,
            videoUrl: "/video/video editing/promo/Is It Hip-Hop.mp4",
            videoType: "reel",
          },
          {
            id: 19,
            videoUrl: "/video/video editing/promo/khanna 3.mp4",
            videoType: "reel",
          },
          {
            id: 20,
            videoUrl: "/video/video editing/promo/MATHAF .mp4",
            videoType: "widescreen",
          },
          {
            id: 21,
            videoUrl: "/video/video editing/promo/vedio 111.mp4",
            videoType: "reel",
          },
          {
            id: 22,
            videoUrl: "/video/video editing/promo/ZAYA 1.mp4",
            videoType: "reel",
          },
        ],
      },
      {
        slug: "event",
        title: "Event",
        description:
          "Transforming audio podcasts into engaging visual experiences with multi-camera editing.",
        imageUrl: imgEvent,
        projects: [
          {
            id: 23,
            videoUrl: "/video/video editing/event/event 1.mp4",
            videoType: "reel",
          },
        ],
      },
      {
        slug: "short-film",
        title: "Short Film",
        description:
          "Transforming audio podcasts into engaging visual experiences with multi-camera editing.",
        imageUrl: imgShortFilm,
        projects: [
          {
            id: 24,
            videoUrl: "/video/video editing/short film/Day 01.mp4",
            videoType: "widescreen",
          },
        ],
      },
    ],
  },

  // ==================== Color Grading Section ====================
  colorGrading: {
    title: "Color Grading",
    description:
      "A showcase of my color grading work, transforming footage to create a specific mood and cinematic look.",
    imageUrl: imgColorGrading,
    projects: [
      {
        id: 25,
        videoBeforeUrl: "/video/color grading/v2/v2.mp4",
        videoAfterUrl: "/video/color grading/v2/v2.mov",
        screenshots: [imgscreenshots2],
      },
      {
        id: 26,
        videoBeforeUrl: "/video/color grading/v3/v3b.mp4",
        videoAfterUrl: "/video/color grading/v3/v3.mov",
        screenshots: [imgscreenshots3],
      },
      {
        id: 27,
        videoBeforeUrl: "/video/color grading/v4/v4.mp4",
        videoAfterUrl: "/video/color grading/v4/v4 .mov",
        screenshots: [imgscreenshots4],
      },
      {
        id: 28,
        videoBeforeUrl: "/video/color grading/v5/5b.mp4",
        videoAfterUrl: "/video/color grading/v5/v5.mov",
        screenshots: [imgscreenshots5],
      },
      {
        id: 29,
        videoBeforeUrl: "/video/color grading/v6/v6.mp4",
        videoAfterUrl: "/video/color grading/v6/vid 6.mov",
        screenshots: [imgscreenshots6],
      },
      {
        id: 30,
        videoBeforeUrl: "/video/color grading/v7/v7.mp4",
        videoAfterUrl: "/video/color grading/v7/v7.mov",
        screenshots: [imgscreenshots7],
      },
      {
        id: 31,
        videoBeforeUrl: "/video/color grading/v8/v8.mp4",
        videoAfterUrl: "/video/color grading/v8/v8.mov",
        screenshots: [imgscreenshots8],
      },
      {
        id: 32,
        videoBeforeUrl: "/video/color grading/v9/v9.mp4",
        videoAfterUrl: "/video/color grading/v9/v9.mov",
        screenshots: [imgscreenshots9],
      },
      {
        id: 33,
        videoBeforeUrl: "/video/color grading/v10/v10.mp4",
        videoAfterUrl: "/video/color grading/v10/v10.mov",
        screenshots: [imgscreenshots10],
      },
    ],
  },
};

// Services Section Data
export const servicesData: ServicesData = {
  intro:
    "From raw footage to a polished final product, I offer specialized services in video editing and color grading to make your vision a reality.",
  serviceList: [
    {
      icon: IoFilmOutline,
      title: "Comprehensive Video Editing",
      description:
        "I specialize in editing all kinds of videos, including commercials, vlogs, short films, reels, podcasts, events, and more to tell a compelling story.",
    },
    {
      icon: IoColorPaletteOutline,
      title: "Professional Color Grading",
      description:
        "I breathe new life into videos by professionally restoring and enhancing their colors, creating a cinematic and consistent look for your project.",
    },
  ],
};

export const contactData: ContactData = {
  intro:
    "Feel free to get in touch with me. I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions.",
  address: "El Khazan St., 4th District, 6th of October City, Giza, Egypt",
  phone: "+20 127 632 1825",
  email: "ahmeddiaa120@icloud.com",
};

// Footer Data
export const footerData = {
  copyrightName: "Ahmed Diaa",
  year: new Date().getFullYear(),
};
