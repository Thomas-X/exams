import React from 'react';
import { compose } from 'redux';
import { Col, Image, Row } from 'react-bootstrap';
import styled from 'styled-components';

export const StyledImage = styled(Image as any)`
    ${(props: any) => props.marginBottom ? `margin: ${props.marginBottom};` : ''}
`;

export const flexCenter = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
};

export const StyledCol = styled(Col as any)`
    padding: 0;
`;

export const StyledRow = styled(Row)`
    margin: 0 0 5rem 0;
    width: 100%;
`;

export const Grids = styled.div`
    
`;

const Home = () => {
    const OneThirdCol = (props: any) => {
        return (
            <StyledCol sm={6} md={4} xs={12} {...props}>
                {props.children}
            </StyledCol>
        );
    };

    const renderTextContent = (title: string, subtext: string) => {

        return (
            <div style={{width: '85%', textAlign: 'center'}}>
                <h3>{title}</h3>
                <small>{subtext}</small>
            </div>
        );
    };

    return (
        <div>
            <Grids>
                <StyledRow>
                    <OneThirdCol>
                        <Image responsive={true} src={`https://picsum.photos/640/380`}/>
                    </OneThirdCol>
                    <OneThirdCol>
                        <Image responsive={true} src={`https://picsum.photos/640/380`}/>
                    </OneThirdCol>
                    <OneThirdCol>
                        <Image responsive={true} src={`https://picsum.photos/640/380`}/>
                    </OneThirdCol>
                </StyledRow>
                <StyledRow>
                    <OneThirdCol style={flexCenter}>
                        {renderTextContent('Organisates', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci aperiam architecto, aspernatur autem dolorem eos et eveniet maxime molestias mollitia, nemo quaerat quo quos saepe tempora vel veritatis voluptatem.')}
                    </OneThirdCol>
                    <OneThirdCol style={flexCenter}>
                        {renderTextContent('Veilig betalen', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci aperiam architecto, aspernatur autem dolorem eos et eveniet maxime molestias mollitia, nemo quaerat quo quos saepe tempora vel veritatis voluptatem.')}
                    </OneThirdCol>
                    <OneThirdCol style={flexCenter}>
                        {renderTextContent('Rekeningoverzicht', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci aperiam architecto, aspernatur autem dolorem eos et eveniet maxime molestias mollitia, nemo quaerat quo quos saepe tempora vel veritatis voluptatem.')}
                    </OneThirdCol>
                </StyledRow>
            </Grids>
        </div>
    );
};

export default compose(
)(Home);
