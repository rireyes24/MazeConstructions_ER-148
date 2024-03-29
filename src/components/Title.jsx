import { styled } from "styled-components";

const Container = styled.h2`
    width: 80%;
    font-size: 32px;
    color: #FFC500;
    grid-row: 1 / 2;
    grid-column: 1 / 3;
    justify-self: center;
    text-align: center;
    letter-spacing: 1px;
    margin-bottom: 24px;

    @media(max-width: 425px) {         
        font-size: 24px;
        margin-top: 32px;
    }
`;

const Title = ({children}) => {
    return <Container>{children.toUpperCase()}</Container>;
};

export { Title }