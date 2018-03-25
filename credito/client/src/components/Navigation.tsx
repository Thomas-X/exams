import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Action, compose, Dispatch } from 'redux';
import styledComponent, { css } from 'styled-components';
import { ROUTES } from '../App';
import { BREAKPOINTS, COLORS, NAVBAR_HEIGHT } from '../constants/constants';
import { onLogout } from '../redux/user';
import { ReduxState, ReduxStateUser } from '../redux';
import { Col, Image, Row } from 'react-bootstrap';
import { StyledRow } from '../routes/Home';

const styled = styledComponent;

const Nav = styled.nav`
    width:100%;
    background-color: ${COLORS.white};
    display:flex;
    flex-direction: row;
    flex-wrap: nowrap;
    padding: 0 1rem;
    margin: 0 0 2rem 0;
    border: 1px solid black;
    
    @media screen and (max-width: ${BREAKPOINTS.sm}) {
        flex-direction:column;
    }
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
    @media screen and (max-width: ${BREAKPOINTS.sm}) {
        justify-content: flex-start;
    }
    ${NavListCss}
`;

const Right = styled.ul`
    justify-content: flex-end;
    @media screen and (max-width: ${BREAKPOINTS.sm}) {
        justify-content: flex-start;
    }
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

const Navigation = (props: Props) => {

    const renderNavItem = (label: string, to: string, key: number, onClick?: () => void) => (
        <NavItem key={`navitem-${key}`} onClick={onClick}>
            <Link to={to}>{label}</Link>
        </NavItem>
    );

    const {isLoggedIn} = props.user;

    return (
        <div>
            <Row style={{ margin: '0 0 1rem 0', width: '100%'}}>
                <Col xs={6} sm={4} md={3}>
                    <Image src={`https://i.imgur.com/DaliOpm.png`} responsive={true}/>
                </Col>
            </Row>
            <Nav>
                <Left>
                    {renderNavItem('Home', ROUTES.home.path, 3)}
                    {renderNavItem('Contact', ROUTES.contact.path, 4)}
                    {isLoggedIn && renderNavItem('Mijn credito', ROUTES.myCredito.path, 5)}
                    {isLoggedIn && renderNavItem('Zoek rekeningen', ROUTES.searchAccount.path, 6)}
                </Left>
                <Right>
                    {!isLoggedIn && ([renderNavItem('Login', ROUTES.login.path, 1), renderNavItem('Register', ROUTES.register.path, 2)])}
                    {isLoggedIn && (renderNavItem('Logout', '', 3, props.onLogout))}
                </Right>
            </Nav>
        </div>
    );
};

export default compose(
    connect(
        (state: ReduxState) => ({
            user: state.user,
        }),
        (dispatch: Dispatch<{}>) => ({
            onLogout: (): Action => dispatch(onLogout()),
        })),
)(Navigation);