import { motion } from "framer-motion";
import PropTypes from "prop-types"
// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaEye, FaGithub } from "react-icons/fa6";
import { Tilt } from "react-tilt";
import { projects } from "../constant";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ project, index }) => {
	const { image, name, description, source_code_link, live_link, tags } =
		project;
	return (
		<motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
			<Tilt
				options={{ max: 45, scale: 1, speed: 450 }}
				className="bg-gradient-left p-5 rounded-lg md:w-[430px] w-full lg:h-[555px]"
			>
				<div className="w-full h-[230px] relative">
					<img
						src={image}
						alt={name}
						className="w-full h-full object-cover rounded-md"
					/>
					<div
						onClick={() => window.open(source_code_link, "_blank")}
						className="absolute top-1 right-1 bg-tertiary p-1 rounded-full cursor-pointer"
					>
						<FaGithub className="w-6 h-6 text-primary" />
					</div>
					<div
						onClick={() => window.open(live_link, "_blank")}
						className="absolute top-1 right-9 bg-tertiary p-1 rounded-full cursor-pointer"
					>
						<FaEye className="w-6 h-6 text-primary" />
					</div>
				</div>
				<div className="my-4">
					<h3 className="text-primary text-2xl font-bold">{name}</h3>
					<p className="text-white text-base mt-2">{description}</p>
				</div>
				<div className="flex flex-wrap items-center justify-start gap-2 h-auto">
					{tags.map((tag) => (
						<p
							key={`${tag.name} tag`}
							className={`${tag.color} text-base`}
						>
							{" "}
							#{tag.name}
						</p>
					))}
				</div>
			</Tilt>
		</motion.div>
	);
};

ProjectCard.propTypes = {
	project: PropTypes.object.isRequired,
	index: PropTypes.number.isRequired
}

const Works = () => {
	return (
		<section id="project" className="max-w py-16">
			<div>
				<motion.div variants={textVariant()} className="text-center">
					<p className={"text-xl font-semibold text-secondary"}>
						My Work
					</p>
					<h2 className={"text-4xl font-bold text-primary"}>
						Project.
					</h2>
				</motion.div>

				<motion.p
					variants={fadeIn("", "", 0.1, 1)}
					className="mt-8 text-secondary text-lg text-center mx-auto max-w-3xl leading-[30px]"
				>
					Following projects showcases my skills and experience
					through real-world examples of my work. Each project is
					briefly described with links to code repositories and live
					demos in it. It reflects my ability to solve complex
					problems, works with different technologies and manage
					projects effectively.
				</motion.p>
			</div>
			<div className="mt-20 flex items-center justify-evenly gap-6 flex-wrap">
				{projects.map((project, index) => (
					<ProjectCard
						key={project.name}
						project={project}
						index={index}
					/>
				))}
			</div>
		</section>
	);
};

export default Works;
