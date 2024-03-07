import { styled } from "styled-components";

const Container = styled.p`
    font-size: 20px;
    width: 80%;
    color: #2d2d2d;
    justify-self: center; 
    
    @media(max-width: 425px) {         
        font-size: 14px;        
    }
`;

const Description = (props) => {
    return (
        <Container style={{ width: props.width}}>
            {props.children}
        </Container>
    );
};

export { Description }