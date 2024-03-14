import { styled } from "styled-components";

const Container = styled.h1`
    width: 84%;    
    height: 140px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    grid-row: 2;
    align-self: center;
    justify-self: center;
    font-size: 26px;
    letter-spacing: 1px;

    @media(max-width: 425px) {
        height: 180px;
        text-align: center;
    }
`

const Welcome = (props) => {
    return (
        <Container>
            {props.children}
        </Container>
    )
}

export { Welcome }