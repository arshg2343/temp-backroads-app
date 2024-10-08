import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";

export const pageLinks = [
	{ id: 1, href: "#home", text: "home" },
	{ id: 2, href: "#about", text: "about" },
	{ id: 3, href: "#services", text: "services" },
	{ id: 4, href: "#tours", text: "tours" },
];
export const socialLinks = [
	{ id: 1, href: "https://www.facebook.com", icon: "fab fa-facebook" },
	{ id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
	{ id: 3, href: "https://www.twitter.com", icon: "fab fa-squarespace" },
];
export const services = [
	{
		id: 1,
		title: "saving money",
		class: "fas fa-wallet fa-fw",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
	},
	{
		id: 2,
		title: "endless hiking",
		class: "fas fa-tree fa-fw",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
	},
	{
		id: 3,
		title: "amazing comfort",
		class: "fas fa-socks fa-fw",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
	},
];
export const tours = [
	{
		id: 1,
		img: tour1,
		date: "august 26th, 2020",
		title: "Tibet Adventure",
		text: "Lorem ipsum dolor sit amet, consectetur adipisicingelit. Cumque vitae tempore voluptatum maximereprehenderit eum quod exercitationem fugit, quicorporis.",
		loc: "china",
		duration: "11 days",
		price: "from $1400",
	},
	{
		id: 2,
		img: tour2,
		date: "august 26th, 2020",
		title: "best of java",
		text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
		loc: "indonesia",
		duration: "8 days",
		price: "from $5000",
	},
	{
		id: 3,
		img: tour3,
		date: "august 26th, 2020",
		title: "explore hong kong",
		text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
		loc: "hong kong",
		duration: "6 days",
		price: "from $12000",
	},
];
