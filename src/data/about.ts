import type {
  AboutData,
  Skill,
  ExperienceItem,
  EducationItem,
  PersonalInfoEntry,
} from "@/types";

export const aboutData: AboutData = {
  heading: "ABOUT ME",
  pageTitleLead: "ABOUT",
  pageTitleAccent: "ME",
  subheading: "Resume",
  description: [
    "Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.",
  ],
  image: "/faraz-portfolio/img/img-mobile.jpg",
  stats: [
    { value: "12", label: "years of experience" },
    { value: "97", label: "completed projects" },
    { value: "81", label: "Happy customers" },
    { value: "53", label: "awards won" },
  ],
  cvLink: "/faraz-portfolio/img/sample.pdf",
};

/** Personal info columns (home “more about me” modal + About page hero) */
export const personalInfo: {
  left: PersonalInfoEntry[];
  right: PersonalInfoEntry[];
} = {
  left: [
    { label: "first name", value: "Steve" },
    { label: "Age", value: "27 Years" },
    { label: "Freelance", value: "Available", emphasis: "available" },
    { label: "phone", value: "+21621184010" },
    { label: "Skype", value: "steve.milner" },
  ],
  right: [
    { label: "last name", value: "Milner" },
    { label: "Nationality", value: "Tunisian" },
    { label: "Address", value: "Tunis" },
    { label: "Email", value: "you@mail.com" },
    { label: "langages", value: "French, English" },
  ],
};

export const skills: Skill[] = [
  { name: "html", percentage: 25, category: "technical" },
  { name: "javascript", percentage: 89, category: "technical" },
  { name: "css", percentage: 70, category: "technical" },
  { name: "php", percentage: 66, category: "technical" },
  { name: "wordpress", percentage: 95, category: "technical" },
  { name: "jquery", percentage: 50, category: "technical" },
  { name: "angular", percentage: 65, category: "technical" },
  { name: "react", percentage: 45, category: "technical" },
];

export const experience: ExperienceItem[] = [
  {
    role: "Web Developer",
    company: "Envato",
    period: "2018 - Present",
    description:
      "Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit",
    current: true,
  },
  {
    role: "UI/UX Designer",
    company: "Themeforest",
    period: "2013 - 2018",
    description:
      "Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt",
    current: false,
  },
  {
    role: "Consultant",
    company: "Videohive",
    period: "2005 - 2013",
    description:
      "Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur elit, sed do eiusmod tempor duntt",
    current: false,
  },
];

export const education: EducationItem[] = [
  {
    degree: "Engineering Degree",
    institution: "Oxford University",
    period: "2015",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do tempor incididunt ut labore",
  },
  {
    degree: "Master Degree",
    institution: "Kiev University",
    period: "2012",
    description:
      "Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut adipisicing",
  },
  {
    degree: "Bachelor Degree",
    institution: "Tunis High School",
    period: "2009",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ut labore",
  },
];
