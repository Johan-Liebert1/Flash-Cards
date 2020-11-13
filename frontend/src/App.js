import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import HomeScreen from './screens/LoginScreen'
import CardSetsScreen from './screens/CardSetsScreen'

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

        </BrowserRouter>
    );
}

export default App;
