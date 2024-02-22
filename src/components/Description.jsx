import { styled } from "styled-components";

const Container = styled.p`
    font-size: 20px;
    width: 80%;
    color: #2d2d2d;
    justify-self: center;    
`;

const Description = ({ children, width }) => {
    return <Container style={{ width: width }}>{children}</Container>;
};

export { Description }