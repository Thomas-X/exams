import React, { Component } from 'react';
import { connect, Dispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import styled, { css } from 'styled-components';
import { ROUTES } from '../App';
import { COLORS, NAVBAR_HEIGHT } from '../constants/constants';
import { onLogout } from '../redux/user';
import { ActionType, ReduxState, ReduxStateUser } from '../redux';

const Nav = styled.nav`
    width:100%;
    background-color: ${COLORS.white};
    display:flex;
    flex-direction: row;
    flex-wrap: nowrap;
    padding: 0 1rem;
    margin: 0 0 2rem 0;
    border: 1px solid black;
`;

const NavListCss = css`
    margin: 0;
    padding: 0;
    flex-grow: 1;
    display:flex;
    flex-direction: row;
    align-items: center;
`;

const Left = styled.ul`
    justify-content: flex-start;
    ${NavListCss}
`;

const Right = styled.ul`
    justify-content: flex-end;
    ${NavListCss}
`;

const NavItem = styled.li`
    list-style: none;
    height: ${NAVBAR_HEIGHT};
    min-width: 2rem;
    padding: 0 1rem;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

interface Props {
    user: ReduxStateUser;
    onLogout: () => void;
}

class Navigation extends Component<Props, {}> {

    private renderNavItem = (label: string, to: string, key: number, onClick?: () => void) => (
        <NavItem key={`navitem-${key}`}>
            <Link to={to}>{label}</Link>
        </NavItem>
    )

    public render() {
        const {isLoggedIn} = this.props.user;

        return (
            <Nav>
                <Left>
                    {this.renderNavItem('Home', ROUTES.home.path, 3)}
                    {isLoggedIn && (this.renderNavItem('Contact', ROUTES.contact.path, 4))}
                </Left>
                <Right>
                    {!isLoggedIn && ([this.renderNavItem('Login', ROUTES.login.path, 1), this.renderNavItem('Register', ROUTES.register.path, 2)])}
                    {isLoggedIn && (
                        <NavItem key={`navitem-1234`} onClick={this.props.onLogout}>
                            <Link to={``}>{'Logout'}</Link>
                        </NavItem>
                    )}
                </Right>
            </Nav>
        );
    }
}

export default compose(
    connect(
        (state: ReduxState) => ({
            user: state.user,
        }),
        (dispatch: any) => ({
            onLogout: (): any => dispatch(onLogout())
        })),
)(Navigation);