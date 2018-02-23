import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { ROUTES } from '../App';
import { COLORS } from '../constants/constants';
import RegisterForm from '../forms/RegisterForm';
import onLoginHOC from '../hoc/onLoginHOC';
import { onLogin, onRegister } from '../redux/user';
import { getErrorMessage } from '../services/hasDeepProperty';
import { Container } from './Login';
import styled from 'styled-components';

export const DangerTitle = styled.h2`
    color: ${COLORS.danger};
`;

class Register extends Component {
    submit = values => {
        this.props.onRegister(values);
    };

    render () {
        const message = getErrorMessage('user', this.props);
        return (
            <Container>
                {message && <DangerTitle>{message}</DangerTitle>}
                <RegisterForm onSubmit={this.submit}/>
            </Container>
        );
    }
}

export default compose(
    onLoginHOC((ownProps) => {
        ownProps.history.push(ROUTES.home.path);
    }),
    connect(state => ({}), dispatch => ({
        onRegister: (values) => dispatch(onRegister(values))
    }))
)(Register);