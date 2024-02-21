import { styled } from "styled-components";

const Container = styled.p`
    font-size: 16px;
    width: 80%;
    color: #2d2d2d;
    justify-self: center;
`;

const Description = ({ children }) => {
    return <Container>{children}</Container>;
};

export { Description }