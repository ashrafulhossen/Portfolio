// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter } from "react-router-dom";
import About from "../components/About";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Skill from "../components/Skill";
import Work from "../components/Work";

const Main = () => {
	return (
		<div className="bg-gradient-right w-full min-h-screen relative z-0 scroll-smooth">
			<BrowserRouter>
				<Header />
				<Navbar />
				<Hero />
				<About />
				<Skill />
				<Work />
				<Contact />
			</BrowserRouter>
		</div>
	);
};

export default Main;
