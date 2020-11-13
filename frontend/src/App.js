import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import HomeScreen from './screens/LoginScreen'
import CardSetsScreen from './screens/CardSetsScreen'
import CreateSetScreen from './screens/CreateSetScreen';

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
                path = {`/cardsets`}
                render = { (routeProps) => <CardSetsScreen {...routeProps} /> }
            />

            <Route 
                exact
                path = '/cardsets/create'
                render = { (routeProps) => <CreateSetScreen {...routeProps} /> }
            />

        </BrowserRouter>
    );
}

export default App;
