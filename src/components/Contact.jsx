import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Lottie from "react-lottie";
import Swal from "sweetalert2";
import loginData from "../../public/login.json";
import { textVariant } from "../utils/motion";

const Contact = () => {
	const [form, setForm] = useState({ name: "", email: "", message: "" });
	const [loading, setLoading] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);

		emailjs
			.send(
				import.meta.env.VITE_EmailServiceID,
				import.meta.env.VITE_EmailTemplateID,
				{
					from_name: form.name,
					to_name: "Ashraful Hossen",
					from_email: form.email,
					to_email: "b.asrafulhossencht@gmail.com",
					message: form.message
				},
				import.meta.env.VITE_EmailPublicKey
			)
			.then(() => {
				setLoading(false);
				setForm({ name: "", email: "", message: "" });
				Swal.fire("Success", "Message sent successfully", "success");
			})
			.catch((err) => {
				setLoading(false);
				console.log(err);
				Swal.fire(
					"Opps...",
					"Something went wrong. Pease try again",
					"error"
				);
			});
	};

	const handleChange = (e) => {
		e.preventDefault();
		const { name: inputName, value } = e.target;
		setForm({ ...form, [inputName]: value });
	};

	// Lottie Animation
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: loginData
	};

	return (
		<section id="contact" className="max-w pt-16 pb-32">
			<motion.div variants={textVariant()} className="text-center">
				<p className={"text-xl font-semibold text-secondary"}>
					What you say
				</p>
				<h2 className={"text-4xl font-bold text-primary"}>Contact.</h2>
			</motion.div>
			<div className="flex items-center justify-evenly flex-col md:flex-row -mt-10 md:mt-10 xl:mt-0 2xl:-mt-10">
				<div className="w-full md:w-1/2 mt-10">
					<Lottie options={defaultOptions} />
				</div>
				<div className="flex items-center justify-center">
					<form
						onSubmit={handleSubmit}
						className="flex flex-col items-start gap-4"
					>
						<label className="flex flex-col gap-1">
							<span className="text-primary text-xl font-semibold">
								Name:
							</span>
							<input
								onChange={handleChange}
								value={form.name}
								className="input-field"
								type="name"
								name="name"
								placeholder="Enter Your Name"
								required
							/>
						</label>
						<label className="flex flex-col gap-1">
							<span className="text-primary text-xl font-semibold">
								Email:
							</span>
							<input
								onChange={handleChange}
								value={form.email}
								className="input-field"
								type="email"
								name="email"
								placeholder="Enter Your Email"
								required
							/>
						</label>
						<label className="flex flex-col gap-1">
							<span className="text-primary text-xl font-semibold">
								Message:
							</span>
							<textarea
								onChange={handleChange}
								value={form.message}
								className="input-field"
								name="message"
								rows="10"
								required
							></textarea>
						</label>
						<input
							className="font-bold text-xl cursor-pointer input-field hover:scale-105 active:scale-100 transition-all"
							type="submit"
							value={loading ? "Sending...." : "Send"}
						/>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
