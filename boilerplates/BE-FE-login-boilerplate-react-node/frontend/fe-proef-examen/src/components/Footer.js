import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 200px;
    width: 100%;
    background-color: #212121;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Text = styled.span`
    color: white;
    font-size: 18px;
    letter-spacing: 4px;
`;

export const Footer = props => {
    
    return (
        <Container>
            <Text>Made with ❤️ by Thomas-X</Text>
        </Container>
    )
};