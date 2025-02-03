import {
  mobile,
  backend,
  creator,
  web,
  blender,
  unreal,
  starbucks,
  tesla,
  first,
  third,
  fourth,
  unity,
  threedsmax,
  premierepro,
  maya,
  gamemaker,
  second,
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
    name: "Game Maker",
    icon: gamemaker,
  },
  {
    name: "Blender",
    icon: blender,
  },
  {
    name: "3ds max",
    icon: threedsmax,
  },
  {
    name: "Maya",
    icon: maya,
  },
  {
    name: "premiere pro",
    icon: premierepro,
  },
];

const experiences = [
  {
    title: "3D modeling",
    company_name: "Com Global Projects",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Jan 2023 - Dec 2023",
    points: [
      "Creating detailed 3D models of buildings, interiors, and landscapes.",
      "Texturing, lighting, and rendering for high-quality visualizations.",
      "Architectural design principles and attention to detail.",
      "Producing realistic visualizations for presentations and project approvals.",
    ],
  },
  {
    title: "Freelancing",
    company_name: "",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2024 -Present",
    points: [
      "Modeling and texturing game-ready assets (characters, props, environments).",
      "Animating and rigging objects for game mechanics.",
      "Texturing, lighting, and material application for realistic visualization.",
      "Creating interactive environments and level design elements.",
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
    image: first,
    source_code_link: "https://drive.google.com/file/d/1Y7bggslnWunX3Yd79fG3qhw25UauipTs/view?usp=drivesdk",
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
    image: second,
    source_code_link: "https://drive.google.com/file/d/1JxjJXubSWFS_vuqfY3NtopV_XQx5Q8nw/view?usp=drivesdk",
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
    image: third,
    source_code_link: "https://drive.google.com/file/d/16SeQCqDtR9G4akjQVTFHHso5Semz5gge/view?usp=drivesdk",
  },
  {
    name: "Campus Paradox",
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
    image: fourth,
    source_code_link: "https://drive.google.com/file/d/1KqDgX30Q6Si0abmz6gUQOI6WHB1UENiT/view?usp=drivesdk",
  },
];

export { services, technologies, experiences, testimonials, projects };
