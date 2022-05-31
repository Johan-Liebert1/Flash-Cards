import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import EditCardsComponent from "../components/EditCardsComponent";
import NavbarComponent from "../components/NavbarComponent";
import { AnimatePresence, motion } from "framer-motion";
import { routeAnimations } from "../animations";

import "../styles/AnimationStyles.css";
import MobileNavbarComponent from "../components/MobileNavbarComponent";
import useWindowSize from "../hooks/useWindowSize";

const EditCardsScreen = ({ match }) => {
	const { cards } = useSelector(state => state.cards);
	const { cardSets } = useSelector(state => state.cardSets);

	const [currentCardSetName, setCurrentCardSetName] = useState("");

	const size = useWindowSize();

	useEffect(() => {
		const currentSet = cardSets.filter(set => set._id === match.params.setId);

		setCurrentCardSetName(currentSet[0].setName);
	}, []);

	return (
		<motion.div
			style={{ minHeight: "93vh", paddingBottom: "3rem", overflow: "hidden" }}
			variants={routeAnimations}
			initial="hidden"
			animate="show"
			exit="exit"
		>
			{size[0] < 900 ? <MobileNavbarComponent /> : <NavbarComponent />}

			<div className="container mt-4">
				<Link to={`/cardsets/${match.params.setName}/${match.params.setId}/cards`}>
					{"< Go To Cards"}
				</Link>

				<h2 style={{ textAlign: "center" }}>Edit Cards in set "{currentCardSetName}"</h2>

				<AnimatePresence>
					{!cards ? (
						<h1>Nothing to edit as there are no cards in this set</h1>
					) : (
						cards.map(card => (
							<EditCardsComponent
								question={card.question}
								answer={card.answer}
								key={card._id}
								cardId={card._id}
							/>
						))
					)}
				</AnimatePresence>
			</div>
		</motion.div>
	);
};

export default EditCardsScreen;
