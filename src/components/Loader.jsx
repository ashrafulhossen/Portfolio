import { Html, useProgress } from "@react-three/drei";
// eslint-disable-next-line no-unused-vars
import React from "react";

const CanvasLoader = () => {
	const { progress } = useProgress();
	return (
		<Html>
			<span className="canvas-load"></span>
			<p className="text-[16px] font-bold mt-[120px] text-[#f1f1f1]">
				{progress.toFixed(2)}%
			</p>
		</Html>
	);
};

export default CanvasLoader;
