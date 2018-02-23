import React, { Component } from 'react';
import { withApiData } from 'react-api-data';
import { connect } from 'react-redux';
import { compose } from 'redux';
import styled from 'styled-components';
import { NAVBAR_HEIGHT } from '../constants/constants';
import { deepDiff } from '../services/Helpers';
import { onLogin } from '../redux/user';
import { getData, getErrorMessage, getMessage } from '../services/hasDeepProperty';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 4px - ${NAVBAR_HEIGHT});
  font-size: 40px;
  background: linear-gradient(20deg, rgb(219, 112, 147), #daa357);
`;

const Title = styled.h1`
    color: white;
`;

class Home extends Component {

    render () {
        const { hi_world } = getData('mock', this.props) || {};
        return (
            <Container>
                <span>💅💅💅💅💅💅💅💅💅💅</span>
                <br/>
                <Title>{hi_world}</Title>
            </Container>
        );
    }
}

export default compose(
    withApiData({ mock: 'myEndpoint' }),
)(Home);
