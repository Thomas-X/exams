import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import styled, { css } from 'styled-components';
import { ROUTES } from '../App';
import { COLORS, NAVBAR_HEIGHT } from '../constants/constants';
import { onLogout } from '../redux/user';

const Nav = styled.nav`
    width:100%;
    background-color: ${COLORS.white};
    height: ${NAVBAR_HEIGHT};
    display:flex;
    flex-direction: row;
    flex-wrap: nowrap;
    padding: 0 1rem;
    position:fixed;
    top:0;
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

class Navigation extends Component {

    renderNavItem = (label, to, key, onClick) => (
        <NavItem key={`navitem-${key}`}>
            <Link to={to}>{label}</Link>
        </NavItem>
    );

    render () {
        const { isLoggedIn } = this.props.user;
        return (
            <Nav>
                <Left>
                    {this.renderNavItem('Home', ROUTES.home.path)}
                </Left>
                <Right>
                    {!isLoggedIn && (
                        [
                            this.renderNavItem('Login', ROUTES.login.path, 1),
                            this.renderNavItem('Register', ROUTES.register.path, 2),
                        ]
                    )}
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
    connect(state => ({
        user: state.user,
    }), dispatch => ({
        onLogout: () => dispatch(onLogout())
    })),
)(Navigation);