import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
// eslint-disable-next-line no-unused-vars
import React, { Suspense, useEffect, useState } from "react";
import CanvasLoader from "./Loader";

const Computers = ({ isMobile, isTab }) => {
	const computer = useGLTF("./computer/scene.gltf");
	return (
		<mesh>
			<hemisphereLight intensity={0.15} groundColor="black" />
			<pointLight intensity={1} />
			<spotLight
				position={[-20, 50, 10]}
				angle={0.12}
				penumbra={10}
				intensity={1}
				castShadow
				shadow-mapSize={1024}
			/>
			<primitive
				object={computer.scene}
				scale={isTab ? 1.1 : isMobile ? 0.8 : 1.5}
				position={[-0, -3.25, -0]}
				rotation={[0.001, -5.1, 0.01]}
			/>
		</mesh>
	);
};

const ComputerCanvas = () => {
	const [isMobile, setIsMobile] = useState(false);
	const [isTab, setIsTab] = useState(false);

	useEffect(() => {
		// Add a listener for changes to the screen size
		const mobileMediaQuery = window.matchMedia("(max-width: 500px)");
		const tabMediaQuery = window.matchMedia("(max-width: 800px)");

		// Set the initial value of the `isMobile` state variable
		setIsMobile(mobileMediaQuery.matches);
		setIsTab(tabMediaQuery.matches);

		// Define a callback function to handle changes to the media query
		const handleMobileMediaQueryChange = (event) => {
			setIsMobile(event.matches);
		};

		const handleTabMediaQueryChange = (event) => {
			setIsTab(event.matches);
		};

		// Add the callback function as a listener for changes to the media query
		mobileMediaQuery.addEventListener(
			"change",
			handleMobileMediaQueryChange
		);
		tabMediaQuery.addEventListener("change", handleTabMediaQueryChange);

		// Remove the listener when the component is unmounted
		return () => {
			mobileMediaQuery.removeEventListener(
				"change",
				handleMobileMediaQueryChange
			);
			tabMediaQuery.removeEventListener(
				"change",
				handleTabMediaQueryChange
			);
		};
	}, []);

	return (
		<Canvas
			style={{
				height: isMobile ? "300px" : isTab ? "450px" : "700px",
				width: isMobile ? "300px" : isTab ? "450px" : "800px"
			}}
			frameloop="demand"
			shadows
			dpr={[1, 2]}
			camera={{ position: [20, 3, 5], fov: 25 }}
			gl={{ preserveDrawingBuffer: true }}
		>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls
					enableZoom={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
				/>
				<Computers isMobile={isMobile} isTab={isTab} />
			</Suspense>

			<Preload all />
		</Canvas>
	);
};

export default ComputerCanvas;
