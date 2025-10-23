// Centralized content for the portfolio site.
// Edit these values to customize copy, links, and metadata.

export type NavItem = { id: string; label: string; href?: string };
export type Project = {
	name: string;
	description: string;
	tech: string[];
	image: string;
	imageAlt: string;
	link: string;
	spotlight?: string;
};
export type ExperienceEntry = {
	company: string;
	role: string;
	period: string;
	items: string[];
};
export type ExperienceTimelineEntry = {
	company: string;
	role: string;
	period: string;
	summary: string;
	achievements: string[];
};
export type HeroContent = {
  name: string;
  title: string;
  highlights: string[];
  availability: string;
  tagline: string;
  resumeUrl: string;
  photo: string;
  photoAlt: string;
};

export const heroContent: HeroContent = {
  name: "Mahir Jeet",
  title: "Software Engineer & Quality Test Automation Engineer",
  highlights: ["javascript", "Python", "Cypress","Slenium","Manual Testing"],
  availability: "Available for opportunities",
  tagline: "I build reliable and efficient software solutions.",
  resumeUrl: "https://drive.google.com/file/d/1ScEwPrYnlmTbiF7B6xqK_cdf9lflFjnI/view?usp=sharing",
  photo: "/images/mahir.png",
  photoAlt: "Portrait of Mahir Jeet",
};




export type Social = { name: string; href: string };

export const site = {
	name: "Mahir Jeet",
	title: "Software Engineer",
	description:
		"A cinematic, code-inspired portfolio built with Next.js 14, React 18, and Three.js.",
};

export const navItems: NavItem[] = [
	{ id: "home", label: "Home", href: "#home" },
	{ id: "about", label: "About", href: "#about" },
	{ id: "experience", label: "Experience", href: "#experience" },
	{ id: "projects", label: "Projects", href: "#projects" },
	{ id: "contact", label: "Contact", href: "#contact" },
];

export const hero = {
	heading: "Mahir Jeet",
	subheading: "Software Engineer",
	tagline: "I build reliable and efficient software solutions.",
	ctaPrimary: { label: "View Work", href: "#projects" },
	ctaSecondary: { label: "Contact", href: "#contact" },
};

export const projects: Project[] = [
	{
		name: "Ecommerce Platform For Headphone Store",
		description: "This is a full-featured ecommerce platform developed for a headphone store online",
		tech: ["JavaScript", "React.js", "Next.js"],
		image: "/images/ecommerceWebsite.jpg",
		imageAlt: "Screenshot of Sample Project",
		link: "https://audio-shop-wk3n.vercel.app/",
	
	},
];

export const experience: ExperienceEntry[] = [
	{
		company: "Tech Serve For You",
		role: "Quality Assurance Automation Engineer",
		period: "Jan 2023 — Aug 2024",
		items: [
			"Executed functional, regression, and smoke tests on high-traffic web applications using Selenium and Postman,ensuring 99 percent release stability across 5+ major product releases",
			"Achievement or responsibility two.",
		],
	},
];

// This is the data actually consumed by components/sections/experience-section.tsx
export const experiences: ExperienceTimelineEntry[] = [
	{
		company: "Tech Serve For You",
		role: "Quality Assurance Automation Engineer",
		period: "Jan 2023 — Aug 2024",
		summary:
			"Shipped automated QA suites and collaborated with engineering to improve reliability.",
		achievements: [
			"Built end-to-end test coverage for critical user journeys",
			"Executed functional, regression, and smoke tests on high-traffic web applications using Selenium and Postman,ensuring 99 percent release stability across 5+ major product releases",
            "Reported, tracked, and prioritized over 200 defects in Jira, collaborating with developers to resolve 95 percent ofcritical issues.",
            "Performed comprehensive cross-device and cross-browser testing on 10+ devices and 5 major browsers, ensuringconsistent functionality and user experience for 100k+ active users."
		],
	},
    {
		company: "Tech Serve For You",
		role: "Software Engineer",
		period: "Aug 2024 — Present",
		summary:
			"Developed and maintained web applications with a focus on performance and user experience.",
		achievements: [
			"Architected and developed scalable SPA frontend components using React, TypeScript, JavaScript, HTML, CSS,Liquid for an e-commerce platform with multi-vendor support.",
			"Managed complex application state using Redux within a SPA architecture, ensuring seamless data flow and UI consistecy across multiple user roles; gained experience in modular component design relevant to migrating legacy frontend systems.",
            "Applied performance optimizations and security best practices in frontend development",
            "Deployed frontend apps on AWS with Docker for reliable, scalable releases supporting concurrent vendor operationsin a multi-vendor ecosystem"
		],
	},
];

export const skills: string[] = [
	"TypeScript",
	"React",
	"Next.js",
	"Javascript",
	"Python",
	"Node.js",
];

export const socials: Social[] = [
	{ name: "GitHub", href: "https://github.com/mahir21" },
	{ name: "LinkedIn", href: "https://www.linkedin.com/in/mahir-frontend-developer/" },
];

export const codePanels = [
	{
		title: "about.ts",
		lines: [
			"export const about = {",
			'  name: "Mahir Jeet",',
			'  role: "Software Engineer & Quality Test Automation Engineer",',
			"};",
		],
	},
];

// About section content consumed by AboutSection
export const aboutContent = {
	narrative: [
		"Software Engineer and Quality Test Automation Engineer focused on building robust software solutions.",

	],
	skillGroups: [
		{
			label: "Core",
			items: ["Javascript", "Typescript","Python", "Next.js", "Node.js"],
		},
        {
			label: "Testing Tools",
			items: ["Cypress", "Selenium", "Manual Testing"],
		},
		{
			label: "Frameworks and Libraries",
			items: ["ReactJS", "NextJS", "Flask","Django"],
		},
        {
			label: "Others",
			items: ["AWS", "CI/CD Pipeline", "Git","Agile Methodologies","SQL",],
		},
		
	],
};

// Contact section content consumed by ContactSection
export const contactContent = {
	availabilityNote:
		"Currently open to impactful opportunities and collaborations.",
	email: "mahirjeetts4u@gmail.com",
	socials: [
		{ label: "GitHub", url: "https://github.com/mahir21" },
		{ label: "LinkedIn", url: "https://www.linkedin.com/in/mahir-frontend-developer/" }
	],
};

// Convenience bundle for default/named imports
export const content = {
	site,
	navItems,
	hero,
	projects,
	experience,
	experiences,
	skills,
	socials,
	codePanels,
	aboutContent,
	contactContent,
};

export default content;

