import { styled } from "styled-components";

const Container = styled.h2`
    width: 80%;
    font-size: 26px;
    color: #FFC500;
    grid-row: 1 / 2;
    grid-column: 1 / 3;
    justify-self: center;
    text-align: center;
`;

const Title = ({children}) => {
    return <Container>{children}</Container>;
};

export { Title }