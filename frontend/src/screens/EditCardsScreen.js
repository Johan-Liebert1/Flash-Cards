import React from "react";
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

	const size = useWindowSize();

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
