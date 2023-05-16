import {
    mobile,
    backend,
    creator,
    web,
    ui,
    javascript,
    laravel,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    eltelogo,
    epamlogo,
    vmszclogo,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "education",
        title: "Education",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "JavaScript Developer",
        icon: javascript,
    },
    {
        title: "React Developer",
        icon: reactjs,
    },
    {
        title: "Laravel Developer",
        icon: laravel,
    },
    {
        title: "UI/UX Designer",
        icon: ui,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Computer Scientist BsC",
        company_name: "Eötvös Loránd University - Faculty of Informatics",
        icon: eltelogo,
        iconBg: "#E6DEDD",
        date: "September 2020 - June 2023",
        points: [
            "Acquiring the theoretical and practical knowledge necessary to solve IT tasks.",
            "Gaining experience in several languages and environments, including web, mobile, backend and database development.",
            "Developing full-stack application as thesis using React and Laravel.",
            "Earning a bachelor's degree with excellent rating."
        ],
    },
    {
        title: "Junior Frontend Developer Course",
        company_name: "EPAM Systems",
        icon: epamlogo,
        iconBg: "#E6DEDD",
        date: "May 2022 - September 2022",
        points: [
            "Learning essential technical skills required to work in frontend development.",
            "Practicing the most popular frontend technologies, such as HTML, CSS, JavaScript and React.",
        ],
    },
    {
        title: "CAD-CAM IT Technician Profession",
        company_name: "Technikal Institute of Mechanics and Informatics Szombathely",
        icon: vmszclogo,
        iconBg: "#E6DEDD",
        date: "September 2015 - June 2020",
        points: [
            "Studying the basics of programming, web development and databases.",
            `Winning "Student of the year" award twice.`,
            `"School's excellent student" award.`
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
        name: "Car Rent",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Job IT",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, testimonials, projects };
