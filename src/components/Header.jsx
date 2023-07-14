// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import logo from "/logo.png";

const Header = () => {
	return (
		<div className="max-w py-4 flex items-center flex-col xs:flex-row justify-between gap-4">
			<Link to="/">
				<h2 className="inline-flex font-bold uppercase flex-row items-center justify-center">
					<img src={logo} className="w-14 sm:w-16" alt="logo" />{" "}
					<span className="text-lg sm:text-[23px] primary-gradient-top bg-clip-text text-transparent pt-3 flex flex-col items-start justify-center">
						<span>Ashraful</span>
						<span>Hossen</span>
					</span>
				</h2>
			</Link>
			<a
				href="https://drive.google.com/uc?export=download&id=19ghJE9bQp7NFMFhiAXIoiwiuthHujGej"
				// https://drive.google.com/uc?export=download&id=1Od0mfxNZxCTMf9tZ8bLqgwMYih5vJJs5
				download={"Web Developer Resume"} rel="noreferrer"
				className="rounded-full primary-gradient-right text-white px-4 py-2 border border-blue-400 active:scale-100 hover:scale-105 transition-all text-center"
			>
				Download Resume
			</a>
		</div>
	);
};

export default Header;
