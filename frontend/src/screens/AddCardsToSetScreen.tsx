import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

import CreateSetFormComponent from "../components/CreateSetFormComponent";
import MobileNavbarComponent from "../components/MobileNavbarComponent";
import NavbarComponent from "../components/NavbarComponent";
import { routeAnimations } from "../animations";
import useWindowSize from "../hooks/useWindowSize";

const AddCardsToSetScreen = ({ match }) => {
	const size = useWindowSize();
	const { cardSets } = useSelector(state => state.cardSets);

	const [currentCardSetName, setCurrentCardSetName] = useState("");

	useEffect(() => {
		const currentSet = cardSets.filter(set => set._id === match.params.setId);
		setCurrentCardSetName(currentSet[0].setName);
	}, []);

	return (
		<motion.div
			style={{ minHeight: "93vh", paddingBottom: "3rem" }}
			variants={routeAnimations}
			initial="hidden"
			animate="show"
			exit="exit"
		>
			{size[0] < 900 ? <MobileNavbarComponent /> : <NavbarComponent />}
			<div className="container mt-3">
				<Link to={`/cardsets/${match.params.setName}/${match.params.setId}/cards`}>
					{"< Go To Cards"}
				</Link>

				<h2 className="mt-3"> Add cards to set "{currentCardSetName}" </h2>
			</div>
			<CreateSetFormComponent />
		</motion.div>
	);
};

export default AddCardsToSetScreen;
