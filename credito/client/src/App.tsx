import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Footer } from './components/Footer';
import Contact from './routes/Contact';
import Login from './routes/Login';
import Navigation from './components/Navigation';
import Register from './routes/Register';
import Home from './routes/Home';
import styled from 'styled-components';
import MyCredito from './routes/MyCredito';
import SearchAccounts from './routes/SearchAccounts';

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
    myCredito: {
        component: MyCredito,
        exact: true,
        path: '/myCredito',
    },
    searchAccount: {
        component: SearchAccounts,
        exact: true,
        path: '/searchAccounts'
    }
};

const App = () => {
    return (
        <div>
            <Navigation/>
            <div>
                <Switch>
                    {Object.keys(ROUTES).map((routeKey, index) => <Route key={index} {...ROUTES[routeKey]}/>)}
                </Switch>
            </div>
            <Footer/>
        </div>
    );
};

export default App;
