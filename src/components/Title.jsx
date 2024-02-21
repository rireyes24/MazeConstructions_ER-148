import { styled } from "styled-components";

const Container = styled.h2`
    font-size: 24px;
    color: #2d2d2d;
`;

const Title = ({children}) => {
    return <Container>{children}</Container>;
};

export { Title }