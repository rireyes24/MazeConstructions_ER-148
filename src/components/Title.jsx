import { styled } from "styled-components";

const Container = styled.h2`
    font-size: 24px;
`;

const Title = ({children}) => {
    return <Container>{children}</Container>;
};

export { Title }