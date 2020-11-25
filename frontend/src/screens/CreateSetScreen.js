import React from "react";
import { motion } from "framer-motion";
import { routeAnimations } from "../animations";

import CreateSetFormComponent from "../components/CreateSetFormComponent";
import MobileNavbarComponent from "../components/MobileNavbarComponent";
import NavbarComponent from "../components/NavbarComponent";
import useWindowSize from "../hooks/useWindowSize";

const CreateSetScreen = () => {
	const size = useWindowSize();

	return (
		<motion.div
			style={{ minHeight: "93vh" }}
			variants={routeAnimations}
			initial="hidden"
			animate="show"
			exit="exit"
		>
			{size[0] < 900 ? <MobileNavbarComponent homeNavbar /> : <NavbarComponent homeNavbar />}
			<CreateSetFormComponent isCreatingSet />
		</motion.div>
	);
};

export default CreateSetScreen;
