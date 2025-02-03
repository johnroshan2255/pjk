import {
  mobile,
  backend,
  creator,
  web,
  blender,
  unreal,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  unity,
  threedsmax,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Game Developer",
    icon: web,
  },
  {
    title: "Game Visual Designer",
    icon: mobile,
  },
  {
    title: "Virtual Scene Creator",
    icon: backend,
  },
  {
    title: "Digital Asset Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Unity",
    icon: unity,
  },
  {
    name: "Unreal Engine",
    icon: unreal,
  },
  {
    name: "Blender",
    icon: blender,
  },
  {
    name: "3ds max",
    icon: threedsmax,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Elude and Evade",
    description:
      `A fun and competitive multiplayer game set in a 3D-modeled version of Cambrian
      College. Players are divided into two teams of two real players each. The goal is
      to eliminate the opposing team by using dusters as throwable weapons while
      strategically hiding behind walls and pillars. Tactical gameplay and team
      coordination makes the team win.`,
    tags: [
      {
        name: "Unity",
        color: "blue-text-gradient",
      },
      {
        name: "Blender",
        color: "green-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Street skates",
    description:
      `This is a 3D game where the player goes on a skateboard infinitely. Players can
      collect coins to gain points and boosters to speedup skateboarding. There will be
      many traps so players need to change sides accordingly. Some traps can only be
      overcome by using skills like jump or slide with a skateboard.`,
    tags: [
      {
        name: "Unity",
        color: "blue-text-gradient",
      },
      {
        name: "Blender",
        color: "green-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Escape Shadows",
    description:
      `A survival-horror game where you seek refuge in a haunted chapel during a
      storm. With no weapons, you must use stealth, holy water, salt, and crucifixes to
      survive vengeful spirits, each with unique behaviors. Navigate hidden passages,
      solve cryptic puzzles, and manage sanity as hallucinations blur reality.`,
    tags: [
      {
        name: "Unreal Engine",
        color: "blue-text-gradient",
      },
      {
        name: "3ds max",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Need to find a name",
    description:
      `A college student who accidentally travels to a future version of his campus
      realising an apocalypse happened. It’s now an abandoned ruin and to escape
      back to your time, player must solve puzzles, uncover hidden messages and
      restore power to time-altering machines. Your choices determine whether you
      escape or stay trapped.`,
    tags: [
      {
        name: "Unreal Engine",
        color: "blue-text-gradient",
      },
      {
        name: "3ds max",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
