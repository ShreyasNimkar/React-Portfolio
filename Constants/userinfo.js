//PLEASE FOLLOW THE FORMAT OF THIS FILE.

import {
  faGithubAlt,
  faLinkedinIn,
  faMediumM,
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
  faBehance,
} from "@fortawesome/free-brands-svg-icons";

export const userinfo = {
  logoText: "SN",
  contact: {
    email: "nimkarshreyas22@gmail.com",
    phone: "9930940480",
    countrycode: "+91",
  },
  socials: [
    {
      type: "github",
      link: "https://github.com/ShreyasNimkar",
      icon: faGithubAlt,
    },
    {
      type: "linkedin",
      link: "https://www.linkedin.com/in/shreyas-nimkar/",
      icon: faLinkedinIn,
    },
  ],
  greeting: {
    title: "Hi, I am Shreyas Nimkar Welcome to my portfolio",
    subtitle:
      "I am a senior at VIT Vellore pursuing CSE with spec. Business systems.",
  },
  capabilities: [
    {
      category: "FrontEnd",
      skills: ["React Js", "Next Js", "Tailwind CSS"],
    },
    {
      category: "BackEnd",
      skills: ["Express", "Django"],
    },
    {
      category: "Competitive Coding",
      skills: ["C", "C++", "Java"],
    },
  ],
  about: {
    content:
      "I am a passionate developer with interest in Finance and stock market. I am adept at learning new skills and my work demonstrates the same. I am always willing to acquire new skills and experiences.",
    resume: "/",
  },
  education: {
    visible: true,
    educationList: [
      {
        time: "2021-Present",
        title:
          "BTech. Computer Science Engineering with spec. Business Systems",
        organization: "Vellore Institute of Technology , Vellore",
        description: "",
      },
      {
        time: "2019-2021",
        title: "XII – CBSE Board",
        organization: "B.K. Birla Public School, Kalyan",
        description: "",
      },
      {
        time: "2010-2019",
        title: "X - ICSE Board",
        organization: "Podar International School ,Kalyan",
        description: "",
      },
    ],
  },
  experience: {
    visible: false,
    experienceList: [
      {
        company: "Optel Vision Pvt Ltd",
        companylogo: "",
        position: "Summer intern trainee",
        time: "",
        description:
          "Learnt about traceability, unique solutions provided to the customers and backend development using Django",
      },
    ],
  },
  blogs: {
    visible: false,
  },
};

export const headings = {
  workHomePage: "Work",
  workMainPage: "Projects",
  capabilities: "Capabilities",
  about: "About Me",
  education: "Education",
  experience: "Experiences",
  blogs: "I write!",
  contact: "Contact Me",
};

export const ctaTexts = {
  landingCTA: "My work",
  workCTA: "View All",
  capabCTA: "Get in Touch",
  educationCTA: "About Me",
  resumeCTA: "Resume",
  submitBTN: "Submit",
};
