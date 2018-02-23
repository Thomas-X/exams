import React, { Component } from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import { Footer } from './components/Footer';
import { COLORS } from './constants/constants';
import Login from './routes/Login';
import Navigation from './components/Navigation';
import Register from './routes/Register';
import Home from './routes/Home';
import styled from 'styled-components';

export const ROUTES = {
    home: {
        path: '/',
        exact: true,
        component: Home,
    },
    login: {
        path: '/login',
        exact: true,
        component: Login,
    },
    register: {
        path: '/register',
        exact: true,
        component: Register,
    }
};

const BodyContainer = styled.div`
    min-height: 90vh;
    background-color: ${COLORS.lightWhite};
    > section {
        min-height: 90vh;
    } 
`;

class App extends Component {

    render () {
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
