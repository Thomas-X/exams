import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { ROUTES } from '../App';
import { COLORS } from '../constants/constants';
import RegisterForm from '../forms/RegisterForm';
import onLoginHOC from '../hoc/onLoginHOC';
import { clearError, onRegister } from '../redux/user';
import { getErrorMessage } from '../services/hasDeepProperty';
import { Container } from './Login';
import styled from 'styled-components';

export const DangerTitle = styled.h2`
    color: ${COLORS.red};
`;

interface Props {
    clearError: () => void;
    onRegister: (values: any) => void;
    history: any;
}

class Register extends Component<Props, {}> {

    public componentWillUnmount() {
        const message = getErrorMessage('user', this.props);
        if (message.length > 0) {
            this.props.clearError();
        }
    }

    private submit = (values: any) => {
        this.props.onRegister(values);
    }

    public render() {
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
    onLoginHOC((ownProps: Props) => {
        ownProps.history.push(ROUTES.home.path);
    }),
    connect(() => ({}), (dispatch: any) => ({
        onRegister: (values: any): any => dispatch(onRegister(values)),
        clearError: (): any => dispatch(clearError()),
    }))
)(Register);