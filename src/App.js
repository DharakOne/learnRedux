import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar';

import SingUp from './pages/SingUp';
import SignIn from './pages/SignIn';
import Home from './pages/Home';




export default function App() {

    return (
        <div className="App">
            <Navbar />
            <Switch>
                <Route path='/SingIn' component={SignIn} />
                <Route path='/SingUp' component={SingUp} />
                <Route path='/' component={Home} />

            </Switch>
        </div>
    )
}