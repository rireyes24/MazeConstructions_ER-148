import { styled } from "styled-components";

const Container = styled.p`
    font-size: 1.5rem;
    width: 80%;
    color: #2d2d2d;
`;

const Description = ({ children }) => {
    return <Container>{children}</Container>;
};

export { Description }