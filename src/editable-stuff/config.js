// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#337aff, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Gijsbert",
  middleName: "van",
  lastName: "Gemert",
  message: " Trying a bit of everything. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/GJSBRT",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/g.s.b.r.t/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/GSBRT",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/GSBRT1",
    },
  ],
};

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/gsbrt.jpg"),
  imageSize: 375,
  message:
    "My name is Gijsbert van Gemert. I’m currently a Student at the Noordgouw studying Mavo. I'm most passionate about creating things, and my goal is to pursue this passion within the field of software engineering and electronics. In my free time I like working on open source projects.",
  resume: "https://docs.google.com/document/d/1xNC0NdmX6vLqU-_vfh7BhjHCSCtdN5sUGjr7k0FbiFY/edit?usp=sharing",
};

// PROJECTS SECTION
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "GJSBRT", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/gsbrt.jpg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/gsbrt.jpg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Visual Basic", value: 20 },
    { name: "SQL", value: 35 },
    { name: "Networking", value: 70 },
    { name: "Linux", value: 70 },
    { name: "JavaScript", value: 40 },
    { name: "Windows", value: 90 },
    { name: "HTML/CSS", value: 45 },
    { name: "System Administration", value: 85 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 75 },
    { name: "Collaboration", value: 70 },
    { name: "Positivity", value: 85 },
    { name: "Adaptability", value: 90 },
    { name: "Problem Solving", value: 85 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "If you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "g@gijs.eu",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'CEO and Founder',
      companylogo: require('../assets/img/dutchis.png'),
      date: 'December 2020 – Present',
    },
    {
      role: 'Mavo Student',
      companylogo: require('../assets/img/noordgouw.png'),
      date: 'September 2017 – Present',
    },
  ]
}

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
