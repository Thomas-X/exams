import React, { Component } from 'react';
import { Col, Row, Container } from 'react-grid-system';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import { Footer } from './components/Footer';
import { COLORS } from './constants/constants';
import Contact from './routes/Contact';
import Login from './routes/Login';
import Navigation from './components/Navigation';
import Register from './routes/Register';
import Home from './routes/Home';
import styled from 'styled-components';
import logo from './assets/img/logo.png';

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
    },
    contact: {
        path: '/contact',
        exact: true,
        component: Contact,
    }
};

const BodyContainer = styled.div`
    min-height: 90vh;
    > section {
        min-height: 90vh;
    } 
`;

const Logo = styled.img`
    width: 300px;
    height: 150px;
`;

class App extends Component {

    render () {
        return (
            <div>
                <Logo src={logo}/>
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
