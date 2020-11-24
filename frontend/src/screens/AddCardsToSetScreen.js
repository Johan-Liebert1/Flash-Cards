import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import CreateSetFormComponent from "../components/CreateSetFormComponent";
import MobileNavbarComponent from "../components/MobileNavbarComponent";
import NavbarComponent from "../components/NavbarComponent";
import { routeAnimations } from "../animations";

const AddCardsToSetScreen = ({ match }) => {
	const smallWindow = window.innerWidth < 900;

	return (
		<motion.div variants={routeAnimations} initial="hidden" animate="show" exit="exit">
			{smallWindow ? <MobileNavbarComponent /> : <NavbarComponent />}
			<div className="container mt-3">
				<Link to={`/cardsets/${match.params.setName}/${match.params.setId}/cards`}>
					{"< Go To Cards"}
				</Link>
			</div>
			<CreateSetFormComponent />
		</motion.div>
	);
};

export default AddCardsToSetScreen;
