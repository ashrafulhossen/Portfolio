import {
	HiBriefcase,
	HiClipboardDocumentList,
	HiCommandLine,
	HiMiniHome,
	HiMiniUserCircle,
	HiOutlineBriefcase,
	HiOutlineClipboardDocumentList,
	HiOutlineCommandLine,
	HiOutlineHome,
	HiOutlineUserCircle
} from "react-icons/hi2";
import chineseCookbook from "../../public/projects/chinese-cookbook.png";
import kidsplay from "../../public/projects/kidsplay.png";
import tigerSpiritMartialArtAcademy from "../../public/projects/tiger-spirit-martial-art-academy .png";
import css from "../assets/css.png";
import git from "../assets/git.png";
import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import mongodb from "../assets/mongodb.png";
import nodejs from "../assets/nodejs.png";
import reactjs from "../assets/reactjs.png";
import tailwind from "../assets/tailwind.png";

const allNavMenu = [
	{
		title: "Home",
		icon: <HiOutlineHome className="nav-link" />,
		activeIcon: <HiMiniHome className="nav-link" />,
		link: "#home"
	},
	{
		title: "About",
		icon: <HiOutlineUserCircle className="nav-link" />,
		activeIcon: <HiMiniUserCircle className="nav-link" />,
		link: "#about"
	},
	{
		title: "Skill",
		icon: <HiOutlineClipboardDocumentList className="nav-link" />,
		activeIcon: <HiClipboardDocumentList className="nav-link" />,
		link: "#skill"
	},
	{
		title: "Project",
		icon: <HiOutlineCommandLine className="nav-link" />,
		activeIcon: <HiCommandLine className="nav-link" />,
		link: "#project"
	},
	{
		title: "Contact",
		icon: <HiOutlineBriefcase className="nav-link" />,
		activeIcon: <HiBriefcase className="nav-link" />,
		link: "#contact"
	}
];

// projects
const projects = [
	{
		name: "Tigeer Spirit Martial Art School Academy",
		description:
			"Web application educational platform to learn martial art, self defence technique. Students can easily save and enroll their favorite instructors class. They can enroll classes using stripe payment system. ",
		tags: [
			{ name: "React", color: "text-[#00ff]" },
			{ name: "Tailwindcss", color: "text-[#00ff88]" },
			{ name: "MongoDB", color: "text-[#00ffff]" },
			{ name: "Express JS", color: "text-[#ff0]" }
		],
		image: tigerSpiritMartialArtAcademy,
		source_code_link:
			"https://github.com/programming-hero-web-course1/b712-summer-camp-client-side-asrafulhossencht",
		live_link: "https://tiger-spirit-martial-art.web.app/"
	},
	{
		name: "Chinese CookBook",
		description:
			"A chinese food recipe web application from where user can find out many types of chinese food recipes of the best chef of china. They can also get recipes based on chefs. It provides both traditional and modern chinese food recipes.",
		tags: [
			{ name: "React", color: "text-[#00ff]" },
			{ name: "Tailwindcss", color: "text-[#00ff88]" },
			{ name: "MongoDB", color: "text-[#00ffff]" },
			{ name: "Express JS", color: "text-[#ff0]" }
		],
		image: chineseCookbook,
		source_code_link:
			"https://github.com/programming-hero-web-course-4/b7a10-chef-recipe-hunter-client-side-asrafulhossencht",
		live_link: "nese-cookbook.web.app"
	},
	{
		name: "KidsPlay",
		description:
			"Web based platform where any one can find math, science and engineering related toys for kids. Toys are categorized and also sub categorized to find out the perfect toys which user wanted.",
		tags: [
			{ name: "React", color: "text-[#00ff]" },
			{ name: "Tailwindcss", color: "text-[#00ff88]" },
			{ name: "MongoDB", color: "text-[#00ffff]" },
			{ name: "Express JS", color: "text-[#ff0]" }
		],
		image: kidsplay,
		source_code_link:
			"https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-client-side-asrafulhossencht",
		live_link: "https://kidsplay-f6664.web.app/"
	}
];

// Technologies
const technologies = [
	{
		name: "HTML 5",
		icon: html,
		progress: 90
	},
	{
		name: "CSS 3",
		icon: css,
		progress: 85
	},
	{
		name: "JavaScript",
		icon: javascript,
		progress: 90
	},

	{
		name: "React JS",
		icon: reactjs,
		progress: 70
	},

	{
		name: "Tailwind CSS",
		icon: tailwind,
		progress: 80
	},
	{
		name: "Node JS",
		icon: nodejs,
		progress: 65
	},
	{
		name: "MongoDB",
		icon: mongodb,
		progress: 60
	},

	{
		name: "git",
		icon: git,
		progress: 80
	}
];

export { allNavMenu, projects, technologies };
