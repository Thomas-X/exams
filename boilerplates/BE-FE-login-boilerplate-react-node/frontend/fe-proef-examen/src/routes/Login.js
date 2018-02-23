import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { ROUTES } from '../App';
import LoginForm from '../forms/LoginForm';
import styled from 'styled-components';
import onLoginHOC from '../hoc/onLoginHOC';
import { onLogin } from '../redux/user';
import { deepDiff } from '../services/Helpers';

export const Container = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-direction: column;
    height: 100%;
`;


class Login extends Component {

    submit = values => {
        if(values) {
            this.props.onLogin(values);
        }
    };

    render () {
        return (
            <Container>
                <LoginForm onSubmit={this.submit}/>
            </Container>
        );
    }
}

export default compose(
    onLoginHOC((ownProps) => {
        ownProps.history.push(ROUTES.home.path);
    }),
    connect(state => ({}), dispatch => ({
        onLogin: (values) => dispatch(onLogin(values))
    }))
)(Login);