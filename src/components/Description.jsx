import { styled } from "styled-components";

const Container = styled.p`
    font-size: 20px;
    width: 80%;
    color: #10113D;
    justify-self: center; 
    text-align: center;
    
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