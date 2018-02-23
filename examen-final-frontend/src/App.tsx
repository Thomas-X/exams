import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Footer } from './components/Footer';
import Contact from './routes/Contact';
import Login from './routes/Login';
import Navigation from './components/Navigation';
import Register from './routes/Register';
import Home from './routes/Home';
import styled from 'styled-components';

export const ROUTES = {
    contact: {
        component: Contact,
        exact: true,
        path: '/contact',
    },
    home: {
        component: Home,
        exact: true,
        path: '/',
    },
    login: {
        component: Login,
        exact: true,
        path: '/login',
    },
    register: {
        component: Register,
        exact: true,
        path: '/register',
    },
};

const BodyContainer = styled.div`
    min-height: 90vh;
    > section {
        min-height: 90vh;
    } 
`;

class App extends Component<{}, {}> {

    public render() {
        return (
            <div>
                <Navigation/>
                <BodyContainer>
                    <Switch>
                        {Object.keys(ROUTES).map((routeKey, index) => <Route key={index} {...ROUTES[routeKey]}/>)}
                    </Switch>
                </BodyContainer>
                <Footer/>
            </div>
        );
    }
}

export default App;
