// eslint-disable-next-line no-unused-vars
import React from "react";
import { allNavMenu } from "../constant";

const Navbar = () => {
	return (
		<nav className="w-full px-2 flex item-center justify-center fixed bottom-4 z-50">
			<ul className="w-96 flex items-center justify-between px-4 py-3 rounded-full primary-gradient-right">
				{allNavMenu.map((navMenu) => (
					<li key={navMenu.title}>
						<a
							className={`text-white cursor-pointer transition-all`}
							href={navMenu.link}
						>
							{navMenu.icon}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navbar;
