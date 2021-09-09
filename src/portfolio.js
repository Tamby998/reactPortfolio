const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "HERIHARSON Tamby Mampionona | Portfolio",
  description:
    "Developpeur Informatique",
  og: {
    title: "Tamby Mampionona Portfolio",
    type: "website",
    url: "http://tambymampionona.netlify.com/",
  },
};

//Home Page
const greeting = {
  title: "Hello! Me,",
  sub: "Tamby Mampionona",
  logo_name: "Tamby Mampionona",
  resumeLink: "https://drive.google.com/file/d/12jHgnxzVq4TumTyLeq5-rjz9Pe6lDA-V/view?usp=sharing",
};

// home logos
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Github",
      iconifyClassname: "simple-icons:github",
      style: {
        color: "white",
      },
      profileLink: "https://github.com/Tamby998",
    },
    {
      siteName: "Instagram",
      iconifyClassname: "simple-icons:instagram",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.instagram.com/mampiononatamby/",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/tambymampionina",
    },
    {
      siteName: "Twitter",
      iconifyClassname: "simple-icons:twitter",
      style: {
        color: "#323754",
      },
      profileLink: "https://twitter.com/MampiononaTamby",
    },
    {
      siteName: "LinkedIn",
      iconifyClassname: "simple-icons:linkedin",
      style: {
        color: "#0077b5",
      },
      profileLink: "https://www.linkedin.com/in/tamby-mampionona-752276198/",
    },
    {
      siteName: "Facebook",
      iconifyClassname: "simple-icons:facebook",
      style: {
        color: "#2962ff",
      },
      profileLink: "https://www.facebook.com/tamby.heriharson/",
    },
  ],
};

//What I do?
const skills = {
  data: [
    {
      title: "Web development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive websites using HTML5, CSS3, BootStrap5, ReactJS, and NodeJS",
        "⚡ Creation of an application backend in PHP & MERN",
        "⚡ Creating a PHP application (CodeIgniter)",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "BootStrap",
          fontAwesomeClassname: "logos-bootstrap",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Design very attractive user interfaces for web applications",
        "⚡ Customize logo designs and create logos from Canva",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Canva",
          fontAwesomeClassname: "simple-icons:canva",
          style: {
            color: "#808080",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Adobe Photoshop",
          fontAwesomeClassname: "simple-icons:adobephotoshop",
          style: {
            color: "#2fa3f7",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
      ],
    },
    {
      title: "Data Science & Analysis",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Knowledge of NumPy, Tensorflow, Python, Pandas, Tableau",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "NumPy",
          fontAwesomeClassname: "logos-numpy",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Tableau",
          fontAwesomeClassname: "logos-tableau",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Believing that I have the essential skills and qualities of a good web developer, I am convinced that I will be able to properly complement your team. In addition, I sincerely hope that my candidacy will attract your attention and that I will have the honor to count among your employees.",
};

//project cards
// colors:[primary,secondary,success,danger,warning,info,light,dark,]
const projectcards = {
  list: [
    {
      title: "Portfolio",
      img_path: "project-06.gif",
      description:
        "A portfolio is a personal file in which the learning outcomes and experience acquired by a person are defined and demonstrated with a view to recognition by an educational institution or an employer.",
      tags: [
        {
          lang: "React",
          color: "#004782",
        },
        {
          lang: "TaillWind CSS",
          color: "#820032",
        },
        {
          lang: "GIF",
          color: "#00a100",
        },
        {
          lang: "Github",
          color: "#ff4b4b",
        },
        {
          lang: "Netlify",
          color: "#3c0095",
        },
      ],
      link: "https://tamby.netlify.app/",
      code: "https://github.com/Tamby998/portfol",
      linkcolor: "white",
    },

    {
      title: "Publoc",
      img_path: "70361-searching.gif",
      description:
        "PubLoc is revolutionizing the way to search and reserve advertising spaces in Madagascar.",
      tags: [
        {
          lang: "PHP",
          color: "red",
        },
        {
          lang: "CodeIgniter",
          color: "#004782",
        },
        {
          lang: "GoogleMap",
          color: "#c47206",
        },
        {
          lang: "Bootstrap",
          color: "#4257f5",
        },
        {
          lang: "TaillWind Css",
          color: "#ff4b4b",
        },
      ],
      link: "http://publoc.wellcom.mg/",
      code: "https://github.com/Tamby998/publoc",
      linkcolor: "white",
    },
    {
      title: "Portfolio",
      img_path: "project-06.gif",
      description:
        "A portfolio is a personal file in which the learning outcomes and experience acquired by a person are defined and demonstrated with a view to recognition by an educational institution or an employer.",
      tags: [
        {
          lang: "React",
          color: "#004782",
        },
        {
          lang: "TaillWind CSS",
          color: "#820032",
        },
        {
          lang: "GIF",
          color: "#00a100",
        },
        {
          lang: "Github",
          color: "#ff4b4b",
        },
        {
          lang: "Vercel",
          color: "#3c0095",
        },
      ],
      link: "http://tambymampionona.vercel.com/",
      code: "https://github.com/Tamby998/portfolioreact",
      linkcolor: "white",
    },
    {
      title: "Memory React",
      img_path: "game.gif",
      description:
        "Game memory.",
      tags: [
        {
          lang: "React JS",
          color: "red",
        },
        {
          lang: "Netlify",
          color: "#ff4b4b",
        },
      ],
      link: "https://tambymemoire.netlify.app/",
      code: "https://github.com/Tamby998/JeuMemory",
      linkcolor: "white",
    },
    {
      title: "Calculator",
      img_path: "calculate.gif",
      description:
        "Calculator Machine.",
      tags: [
        {
          lang: "React",
          color: "#004782",
        },
        {
          lang: "Netlify",
          color: "#ff4b4b",
        },
      ],
      link: "https://calculatricetamby.netlify.app/",
      code: "https://github.com/Tamby998/Calculator",
      linkcolor: "white",
    },
  ],
};

const resumeleft = {
  left: {
    title: ["Experience"],
    data: [
      {
        title: "Software developer",
        subtitle: "Et Ceterum",
        date: "Since Avril 2021 - In progress",
        content: [
          "Web developer",
        ],
      },
      {
        title: "Developer",
        subtitle: "FullStack Developer within Malaza Trading",
        date: "Novembre 2020 - Mars 2021",
        content: [
          "Concepteur(in charge of identifying user needs and specifying them).",
          "Web developer",
        ],
      },
      {
        title: "Traineeship",
        subtitle: "Intern at SuperVision",
        date: "Nov 2018 - January 2019",
        content: [
          "Concepteur(in charge of identifying user needs and specifying them).",
          "Web Application Developer",
        ],
      },
    ],
  },
};

const resumeright = {
  right: [
    {
      title: ["Education"],
      data: [
        {
          title: "Master",
          subtitle: "IT University Andoharanofotsy",
          date: "2021-In progress",
          content: ["Master 1"],
        },
        {
          title: "Licence",
          subtitle: "IFT Fianarantsoa",
          date: "2016 - 2020",
          content: [
            "3rd Year of License",
            "2nd Year of License",
            "1st Year of License",],
        },
      ],
    },
  ],
};

//certificate cards
const certifications = {
  certifications: [
    {
      title: "Udemy",
      subtitle: "Udemy",
      logo_path: "udemy-01.png",
      certificate_link:
        "https://www.udemy.com/user/tamby-mampionona-heriharson/",
      alt_name: "Udemy",
      color_code: "#000000",
    },
    {
      title: "Machine Learning",
      subtitle: "Stanford University",
      logo_path: "coursera-01.png",
      certificate_link:
        "https://www.coursera.org/user/ae1a8825a2192c556ea175e0062c3bda",
      alt_name: "Stanford University",
      color_code: "#000000",
    },
    {
      title: "Data Visualization",
      subtitle: "Coursera",
      logo_path: "coursera-01.png",
      certificate_link:
        "https://www.coursera.org/user/ae1a8825a2192c556ea175e0062c3bda",
      alt_name: "Coursera",
      color_code: "#000000",
    },
    {
      title: "Data Scientist Career Track",
      subtitle: "DataCamp",
      logo_path: "datacamp-01.png",
      certificate_link:
        "#",
      alt_name: "DataCamp",
      color_code: "#000000",
    },
    {
      title: "PowerBI Masters",
      subtitle: "iNeuron.ai",
      logo_path: "ineuron-01.png",
      certificate_link:
        "#",
      alt_name: "HackerRank",
      color_code: "#000000",
    },
    {
      title: "Tableau Masters",
      subtitle: "iNeuron.ai",
      logo_path: "ineuron-01.png",
      certificate_link:
        "#",
      alt_name: "HackerRank",
      color_code: "#000000",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact me",
    profile_image_path: "contact.jpg",
    description:
      "I am available on almost all social networks. You can message me, I will reply to you within 24 hours.",
  },
  addressSection: {
    title: "Address",
    subtitle: "Antananarivo, Anjanahary IIO-167",
  },
  phoneSection: {
    title: "Phone number",
    subtitle: "+261 340652221, +261 328672151",
  },
};

//contact icons
const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/Tamby998",
    iconifyClassname: "simple-icons:hackerrank",
    fontAwesomeIcon: "fa-github", 
    backgroundColor: "#181717", 
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/tamby-mampionona-752276198/",
    fontAwesomeIcon: "fa-linkedin-in", 
    backgroundColor: "#0077B5",
  },
  {
    name: "Twitter",
    link: "https://twitter.com/MampiononaTamby",
    fontAwesomeIcon: "fa-youtube", 
    backgroundColor: "#FF0000",
  },
  {
    name: "Gmail",
    link: "mailto:tambymampioninaheriharson@gmail.com",
    fontAwesomeIcon: "fa-google", 
    backgroundColor: "#D14836", 
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/mampiononatamby/",
    fontAwesomeIcon: "fa-instagram",
    backgroundColor: "#E4405F", 
  },
];

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  projectsHeader,
  contactPageData,
  projectcards,
  certifications,
  resumeleft,
  resumeright,
};
