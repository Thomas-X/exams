import * as React from 'react';
import { compose } from 'redux';
import { Col, Label } from 'react-bootstrap';
import styled from 'styled-components';
import ContactForm from '../forms/ContactForm';
import Obfuscate from 'react-obfuscate';
import { formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import { ReduxState } from '../redux';
import { FORM_NAMES } from '../services/validations';
import ReactDOM from 'react-dom';

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const ContactInformation = styled.div`
    width: 100%;
`;

const LabelContainer = styled.span`
    width: 50px;
    margin-bottom: .5rem;
    margin-right: 1rem;
`;

const StyledObfuscate = styled(Obfuscate)`
    display:none;
`;

interface Props {
    subject: string;
    body: string;
}

class Contact extends React.Component<Props, {}> {
    private obfuscate: any;

    private onSubmit = (values: any) => {
        const domNode = ReactDOM.findDOMNode(this.obfuscate);
        // @ts-ignore
        domNode.click();
    }

    public render() {
        const renderContactInformation = (label: string, thChildren: any) => {
            return (
                <div style={{paddingBottom: '1rem'}}>
                    <LabelContainer>
                        <Label>
                            {label}
                        </Label>
                    </LabelContainer>
                    <LabelContainer>
                        {thChildren}
                    </LabelContainer>
                </div>
            );
        };

        const RouteLink = (
            <a href="https://www.google.nl/maps/search/Enschedeseweg+81+1229+DE+Enschede/@52.2232581,6.7985084,12z/data=!3m1!4b1">
                &emsp;Route beschrijving
            </a>
        );

        const Telephone = (
            <span><strong>06493922</strong></span>
        );

        const Email = (
            <span><strong>info@credito-services.nl</strong></span>
        );

        return (
            <Container>
                <h1>Contact pagina</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aspernatur dolores ex facere iste,
                    nostrum
                    nulla quae quas tempora! Accusamus aspernatur dolor esse illo itaque quasi quos ullam vitae?
                    Voluptatem.</p>

                <br/>
                <Col sm={12} md={6} lg={4} style={{padding: '0', marginBottom: '5rem'}}>
                    <ContactForm onSubmit={this.onSubmit}/>
                </Col>
                <ContactInformation>
                    {renderContactInformation('Route', RouteLink)}
                    {renderContactInformation('Telefoon', Telephone)}
                    {renderContactInformation('Email', Email)}
                </ContactInformation>
                <StyledObfuscate
                    innerRef={(ref: HTMLElement) => {
                        this.obfuscate = ref;
                    }}
                    email="info@credito-services.com"
                    headers={
                        {
                            subject: this.props.subject,
                            body: this.props.body,
                        }
                    }
                />
            </Container>
        );
    }
}

// @ts-ignore
const selector = formValueSelector('contact');

export default compose(
    connect((state: ReduxState) => ({
        subject: selector(state, FORM_NAMES.contactSubject),
        body: selector(state, FORM_NAMES.contactBody),
    })),
// @ts-ignore. I'm sorry. :(
)(Contact);