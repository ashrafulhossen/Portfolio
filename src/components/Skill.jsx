import ProgressBar from "@ramonak/react-progress-bar";
import { motion } from "framer-motion";
// eslint-disable-next-line no-unused-vars
import React from "react";
import { technologies } from "../constant";
import { textVariant } from "../utils/motion";

const Skill = () => {
	return (
		<section id="skill" className="max-w py-16">
			<motion.div variants={textVariant()} className="text-center">
				<p className={"text-xl font-semibold text-secondary"}>
					What I know
				</p>
				<h2 className={"text-4xl font-bold text-primary"}>Skill.</h2>
			</motion.div>
			<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-16">
				{technologies.map((technology) => (
					<div
						key={technology.name}
						className="flex items-center justify-center gap-2 relative"
					>
						<img
							src={technology.icon}
							className="h-10 w-10 object-contain absolute left-2"
							alt="technology"
						/>
						<div className="w-full">
							<ProgressBar
								completed={technology.progress}
								bgColor="#0002b9"
								height="48px"
								borderRadius="10px"
								baseBgColor="#ccc9c9"
								labelColor="#06d5fd"
								transitionDuration="0.5"
								maxCompleted={100}
							/>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Skill;
