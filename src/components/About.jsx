import { motion } from "framer-motion";
// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaBriefcase, FaCircleCheck, FaUserClock } from "react-icons/fa6";
import { textVariant } from "../utils/motion";
import avatar from "/3d-avatar.png";

const About = () => {
	return (
		<section className="max-w py-16" id="about">
			<motion.div variants={textVariant()} className="text-center mb-16">
				<p className={"text-xl font-semibold text-secondary"}>
					Introduction
				</p>
				<h2 className={"text-4xl font-bold text-primary"}>Overview.</h2>
			</motion.div>
			<div className="flex flex-col-reverse md:flex-row md:items-start items-center justify-center gap-10">
				<div className="flex items-center flex-col gap-8">
					<p className="text-secondary text-xl w-11/12 text-center md:text-left">
						As a react developer, I have enrich hands-on experience
						by building many web applications using React, NodeJS,
						MongoDb. I also use various features like user
						authentication, data management, API integrations while
						building responsive and user friendly web applications.
						I have a solid knowledge on HTML, CSS and Javascript.
						Proficiency in popular frameworks such as Bootstrap and
						Tailwind CSS enables me to create modern and visually
						engaging web interfaces.
					</p>
					<div className="flex items-center flex-wrap gap-10 justify-center">
						<div className="flex items-center justify-center gap-2 flex-col bg-gradient-left w-56 h-36 rounded-xl">
							<FaBriefcase className="w-8 h-8 text-primary" />
							<p className="text-2xl font-bold text-primary">
								Experience
							</p>
							<p className="text-secondary text-xl">
								Looking For
							</p>
						</div>
						<div className="flex items-center justify-center gap-2 flex-col bg-gradient-left w-56 h-36 rounded-xl">
							<FaCircleCheck className="w-8 h-8 text-primary" />
							<p className="text-2xl font-bold text-primary">
								Completed
							</p>
							<p className="text-secondary text-xl">
								3+ Full Stack
							</p>
						</div>
						<div className="flex items-center justify-center gap-2 flex-col bg-gradient-left w-56 h-36 rounded-xl">
							<FaUserClock className="w-8 h-8 text-primary" />
							<p className="text-2xl font-bold text-primary">
								Support
							</p>
							<p className="text-secondary text-xl">
								Online 24/7
							</p>
						</div>
					</div>
				</div>
				<div className="md:-mt-20 min-w-[300px] max-w-[600px]">
					<img
						className="w-full h-full object-contain rounded-full"
						src={avatar}
						alt="avatar image"
					/>
				</div>
			</div>
		</section>
	);
};

export default About;
