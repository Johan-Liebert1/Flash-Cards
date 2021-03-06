import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCardSets } from "../actions/cardSetActions";
import CardSetDisplayComponent from "../components/CardSetDisplayComponent";
import { AnimatePresence, motion } from "framer-motion";
import { routeAnimations } from "../animations";

import NavbarComponent from "../components/NavbarComponent";
import "../styles/AnimationStyles.css";
import MobileNavbarComponent from "../components/MobileNavbarComponent";
import useWindowSize from "../hooks/useWindowSize";

const CardSetsScreen = ({ history }) => {
	const { userLoginInfo } = useSelector(state => state.userLoginInfo);
	const { cardSets } = useSelector(state => state.cardSets);

	const dispatch = useDispatch();

	useEffect(() => {
		if (userLoginInfo) {
			dispatch(getAllCardSets(userLoginInfo.token));
		} else {
			history.push("/");
		}
	}, [dispatch, userLoginInfo]);

	const size = useWindowSize();

	return (
		<motion.div
			style={{ minHeight: "93vh", paddingBottom: "3rem" }}
			variants={routeAnimations}
			initial="hidden"
			animate="show"
			exit="exit"
		>
			{size[0] < 900 ? <MobileNavbarComponent homeNavbar /> : <NavbarComponent homeNavbar />}
			<div className="container mt-3">
				<h1
					style={{
						textAlign: "center",
						color: "rgb(220, 220, 220)",
						fontWeight: "bolder"
					}}
				>
					Your Sets
				</h1>
				<motion.div className="row">
					<AnimatePresence>
						{cardSets &&
							cardSets.map((set, index) => (
								<CardSetDisplayComponent
									index={index + 1}
									key={set._id}
									cardSet={set}
									setId={set._id}
									setName={set.setName}
								/>
							))}
					</AnimatePresence>
				</motion.div>
			</div>
		</motion.div>
	);
};

export default CardSetsScreen;
