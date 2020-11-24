import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import HomeScreen from "./screens/LoginScreen";
import CardSetsScreen from "./screens/CardSetsScreen";
import CreateSetScreen from "./screens/CreateSetScreen";
import FlashCardsScreen from "./screens/FlashCardsScreen";
import EditCardsScreen from "./screens/EditCardsScreen";
import AddCardsToSetScreen from "./screens/AddCardsToSetScreen";
import FooterComponent from "./components/FooterComponent";

function App() {
	const location = useLocation();

	return (
		<AnimatePresence>
			<Switch location={location} key={location.pathname}>
				<Route exact path="/" render={routeProps => <HomeScreen {...routeProps} />} />

				<Route
					exact
					path="/cardsets"
					render={routeProps => <CardSetsScreen {...routeProps} />}
				/>

				<Route
					exact
					path="/cardsets/create"
					render={routeProps => <CreateSetScreen {...routeProps} />}
				/>

				<Route
					exact
					path="/cardsets/:setName/:setId/cards"
					render={routeProps => <FlashCardsScreen {...routeProps} />}
				/>

				<Route
					exact
					path="/cardsets/:setName/:setId/cards/edit"
					render={routeProps => <EditCardsScreen {...routeProps} />}
				/>

				<Route
					exact
					path="/cardsets/:setName/:setId/cards/add"
					render={routeProps => <AddCardsToSetScreen {...routeProps} />}
				/>
				<FooterComponent />
			</Switch>
		</AnimatePresence>
	);
}

export default App;
