import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import HomeScreen from './screens/LoginScreen'
import CardSetsScreen from './screens/CardSetsScreen'
import CreateSetScreen from './screens/CreateSetScreen';
import FlashCardsScreen from './screens/FlashCardsScreen';
import EditCardsScreen from './screens/EditCardsScreen';

function App() {
    return (
        <BrowserRouter>

            <Route
                exact
                path = '/'
                render = { (routeProps) => <HomeScreen {...routeProps} /> }
            />

            <Route
                exact
                path = '/cardsets'
                render = { (routeProps) => <CardSetsScreen {...routeProps} /> }
            />

            <Route 
                exact
                path = '/cardsets/create'
                render = { (routeProps) => <CreateSetScreen {...routeProps} /> }
            />

            <Route
                exact
                path = '/cardsets/:setName/:setId/cards'
                render = { (routeProps) => <FlashCardsScreen {...routeProps} /> } 
            />

            <Route
                exact
                path = '/cardsets/:setName/:setId/cards/edit'
                render = { (routeProps) => <EditCardsScreen {...routeProps} /> }
            />

        </BrowserRouter>
    );
}

export default App;
