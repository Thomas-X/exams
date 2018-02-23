import React, { Component } from 'react';
import { connect, Dispatch } from 'react-redux';
import { compose } from 'redux';
import { ROUTES } from '../App';
import LoginForm from '../forms/LoginForm';
import styled from 'styled-components';
import onLoginHOC from '../hoc/onLoginHOC';
import { clearError, onLogin } from '../redux/user';
import { getErrorMessage } from '../services/hasDeepProperty';
import { DangerTitle } from './Register';
import { ReduxState } from '../redux';

export const Container = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-direction: column;
    height: 100%;
`;

interface Props {
    onLogin: (values: any) => void;
    clearError: () => void;
    history: any;
}

class Login extends Component<Props, {}> {
    public componentWillUnmount() {
        const message = getErrorMessage('user', this.props);
        if (message) {
            if (message.length > 0) {
                this.props.clearError();
            }
        }
    }

    private submit = (values: any) => {
        if (values) {
            this.props.onLogin(values);
        }
    }

    public render() {
        const message = getErrorMessage('user', this.props);
        return (
            <Container>
                {message && <DangerTitle>{message}</DangerTitle>}
                <LoginForm onSubmit={this.submit}/>
            </Container>
        );
    }
}

export default compose(
    onLoginHOC((ownProps: Props) => {
        ownProps.history.push(ROUTES.home.path);
    }),
    connect(() => ({}), (dispatch: any) => ({
        onLogin: (values: any): any => dispatch(onLogin(values)),
        clearError: (): any => dispatch(clearError()),
    }))
)(Login);