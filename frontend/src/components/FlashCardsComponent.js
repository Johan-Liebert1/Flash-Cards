import React, { useState, useEffect } from "react";
import ReactCardFlip from "react-card-flip";
import { motion } from "framer-motion";

import "../styles/FlashCardsComponentStyles.css";

const FlashCardsComponent = ({ question, answer, index }) => {
	const [isFlipped, setIsFlipped] = useState(true);

	const keyDownListener = e => {
		e.preventDefault();
		switch (e.key) {
			case " ":
				setIsFlipped(!isFlipped);
				break;

			default:
				break;
		}
	};

	useEffect(() => {
		window.addEventListener("keydown", e => keyDownListener(e));

		return () => {
			window.removeEventListener("keydown", e => keyDownListener(e));
		};
	}, [keyDownListener]);

	return (
		<motion.div className="card-row">
			<ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
				<div className="row">
					<div
						className={`flash-card-container col-md-7 col-lg-5 col-xl-4 col-10`}
						onClick={() => setIsFlipped(!isFlipped)}
					>
						<div id="index">
							<h1> {index > 9 ? index : `0${index}`} </h1>
						</div>

						<div id="content">
							<h3> {answer} </h3>
						</div>
					</div>
				</div>

				<div className="row">
					<div
						className={`flash-card-container col-md-7 col-lg-5 col-xl-4 col-10`}
						onClick={() => setIsFlipped(!isFlipped)}
					>
						<div id="index">
							<h1> {index > 9 ? index : `0${index}`} </h1>
						</div>

						<div id="content">
							<h3> {question} </h3>
						</div>
					</div>
				</div>
			</ReactCardFlip>
		</motion.div>
	);
};

export default FlashCardsComponent;
