import React, { Component } from 'react';
import { withApiData } from 'react-api-data';
import { Col, Row } from 'react-grid-system';
import { compose } from 'redux';
import styled from 'styled-components';
import { getData, getMessage } from '../services/hasDeepProperty';
import Obfuscate from 'react-obfuscate'

const FlexContainer = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    height: 400px;
`;
const FlexChild = styled.div`
    flex: 1;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
`;

const FlexChildText = styled.div`
    display:flex;
    flex-direction: column;
    margin: 4rem;
`;

class Home extends Component {

    render () {
        const { pictures, services } = getData('home', this.props) || {};
        return (
            <div>
                {pictures && <Row>
                    {pictures && pictures.map((picture, index) => {
                        return (
                            <Col md={6} sm={12} lg={4} key={`text-${index}`} className="marginTopMd">
                                <FlexChild key={index}>
                                    <Image src={picture.src}/>
                                </FlexChild>
                            </Col>
                        );
                    })}
                </Row>}

                {services && <Row>
                    {services && Object.keys(services).map((servicesKey, index) => {
                        const val = services[servicesKey];
                        return (
                            <Col md={12} lg={4} key={`text-${index}`}>
                                <FlexChildText>
                                    <h4>{val.title}</h4>
                                    <p>{val.body}</p>
                                </FlexChildText>
                            </Col>
                        );
                    })}
                </Row>}
            </div>
        );
    }
}

export default compose(
    withApiData({ home: 'getHomePage' }),
)(Home);
