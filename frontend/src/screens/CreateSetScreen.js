import React from "react";
import { motion } from "framer-motion";
import { routeAnimations } from "../animations";

import CreateSetFormComponent from "../components/CreateSetFormComponent";
import MobileNavbarComponent from "../components/MobileNavbarComponent";
import NavbarComponent from "../components/NavbarComponent";

const CreateSetScreen = () => {
	const smallWindow = window.innerWidth < 900;

	return (
		<motion.div variants={routeAnimations} initial="hidden" animate="show" exit="exit">
			{smallWindow ? <MobileNavbarComponent homeNavbar /> : <NavbarComponent homeNavbar />}
			<CreateSetFormComponent isCreatingSet />
		</motion.div>
	);
};

export default CreateSetScreen;
