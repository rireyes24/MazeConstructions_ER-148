import { styled } from "styled-components";

const Container = styled.h2`
    width: 80%;
    font-size: 32px;
    color: #ffe600;
    grid-row: 1 / 2;
    grid-column: 1 / 3;
    justify-self: center;
    text-align: center;
    letter-spacing: 1px;

    @media(max-width: 425px) {         
        font-size: 24px;
        margin-top: 14px;
    }
`;

const Title = ({children}) => {
    return <Container>{children.toUpperCase()}</Container>;
};

export { Title }