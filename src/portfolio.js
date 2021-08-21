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
  title: "Bonjour! Moi,",
  sub: "Tamby Mampionona",
  logo_name: "Tamby Mampionona",
  resumeLink: "",
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

//Ce que je fais?
const skills = {
  data: [
    {
      title: "Développement web",
      fileName: "FullStackImg",
      skills: [
        "⚡ Création de sites Web réactifs à l'aide de HTML5, CSS3, BootStrap5, ReactJS et NodeJS",
        "⚡ Création d'un backend d'application en PHP & MERN",
        "⚡ Création d'un application en PHP(CodeInginer)",
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
        "⚡ Concevoir des interfaces utilisateur très attrayantes pour les applications Web",
        "⚡ Personnalisation des conceptions de logo et création de logos à partir de Canva",
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
        "⚡ Connaissances sur NumPy, Tensorflow, Python, Pandas, Tableau",
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
    "Estimant posséder les compétences et qualités essentielles d'un bon développeur web, je suis persuadé que je saurai dûment compléter votre équipe. En outre j'espère sincèrement que ma candidature retiendra votre attention et que j'aurai l'honneur de compter parmi vos employés.",
};

//project cards
// colors:[primary,secondary,success,danger,warning,info,light,dark,]
const projectcards = {
  list: [
    {
      title: "Portfolio",
      img_path: "project-06.gif",
      description:
        "Un portfolio est un dossier personnel dans lequel les acquis de formation et les acquis de l'expérience d'une personne sont définis et démontrés en vue d'une reconnaissance par un établissement d'enseignement ou un employeur",
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
        "PubLoc révolutionne la manière de chercher et de réserver des emplacements publicitaires a Madagascar.",
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
      img_path: "porto.gif",
      description:
        "Un portfolio est un dossier personnel dans lequel les acquis de formation et les acquis de l'expérience d'une personne sont définis et démontrés en vue d'une reconnaissance par un établissement d'enseignement ou un employeur",
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
      link: "http://tambymampionona.netlify.com/",
      code: "https://github.com/Tamby998/portfolioreact",
      linkcolor: "white",
    },
    {
      title: "Memory React",
      img_path: "game.gif",
      description:
        "Jeux de memory.",
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
        "Machine Calculatrice.",
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
    title: ["Expérience"],
    data: [
      {
        title: "Développeur Logiciel",
        subtitle: "Et Ceterum",
        date: "Avril 2021 - en cours",
        content: [
          "Développeur Web",
        ],
      },
      {
        title: "Concepteur Développeur",
        subtitle: "Développeur FullStack au sein de Malaza Trading",
        date: "Novembre 2020 - Mars 2021",
        content: [
          "Concepteur(en charge d'indentifier les besoins utilisateurs et de les spécifies).",
          "Développeur Web",
        ],
      },
      {
        title: "Stage",
        subtitle: "Stagiaire au sein de SuperVision",
        date: "Nov 2018 - January 2019",
        content: [
          "Concepteur(en charge d'indentifier les besoins utilisateurs et de les spécifies).",
          "Développeur d'Application Web",
        ],
      },
      // {
      //   title: "Summer Analytics Participant",
      //   subtitle: "IIT Guwahati",
      //   date: "April 2020 - June 2020",
      //   content: [
      //     "Learnt & applied various Machine Learning libraries",
      //     "Had hands-on with Data Visualization techniques using matplotlib, plotly, streamlit",
      //     "Understood and applied Neural networks using Tensorflow and finally competed in Kaggle Hackathon ranking 135 (top 16 percentile) among 854 Kaggle participants",
      //     "Ranked 85 out of 1500+ students for overall performance.",
      //   ],
      // },
    ],
  },
};

const resumeright = {
  right: [
    {
      title: ["Éducation"],
      data: [
        {
          title: "Master",
          subtitle: "IT University Andoharanofotsy",
          date: "2021-en Cours",
          content: ["Master 1"],
        },
        {
          title: "Licence",
          subtitle: "IFT Fianarantsoa",
          date: "2016 - 2020",
          content: [
            "3e Année de Licence",
            "2e Année de Licence",
            "1 ère Année de Licence",],
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
    title: "Contactez moi",
    profile_image_path: "contact.jpg",
    description:
      "Je suis disponible sur presque tous les réseaux sociaux. Vous pouvez m'envoyer un message, je vous répondrai dans les 24 heures.",
  },
  addressSection: {
    title: "Addresse",
    subtitle: "Antananarivo, Anjanahary IIO-167",
  },
  phoneSection: {
    title: "Numéro de téléphone",
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
