// eslint-disable-next-line no-unused-vars
import React from "react";
import ComputerCanvas from "./Computer";

const Hero = () => {
	return (
		<section
			className="max-w mt-16 pt-24 pb-32 md:pb-72 relative flex-col flex items-center md:items-start justify-start gap-3"
			id="home"
		>
			<div className="w-full flex items-start justify-start mt-16 md:mt-0">
				<div className="flex items-center justify-center flex-col -mt-12 pr-6">
					<div className="w-8 h-8 rounded-full primary-gradient-bottom" />
					<div className="w-2 h-96 transparent-gradient -mt-[2px]" />
				</div>
				<div className="w-full relative h-full">
					<h2 className="text-primary font-bold text-5xl xs:text-6xl">
						<span className="">Hi, I am </span>
						<span className="text-[#2701ff]">Ashraful Hossen</span>
					</h2>
					<p className="mt-6 text-3xl text-secondary">
						I develop web applications.
					</p>
					<div className=" md:mt-16 lg:-mt-2 sm:mt-24 xs:mt-44 mt-40 absolute top-0 right-0 xs:right-8 md:w-5/6 lg:w-full justify-self-end flex items-center justify-end">
						<ComputerCanvas />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
