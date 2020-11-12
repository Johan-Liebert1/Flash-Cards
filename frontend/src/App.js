import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './store'
import HomeScreen from './screens/LoginScreen'

function App() {
    return (
        <Provider store = {store}>
            <BrowserRouter>
                <Route
                    exact
                    path = '/'
                    render = { (routeProps) => <HomeScreen {...routeProps} /> }
                />
            </BrowserRouter>
        </Provider>
    );
}

export default App;
