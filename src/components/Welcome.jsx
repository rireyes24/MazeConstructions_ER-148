import { styled } from "styled-components";

const Container = styled.h1`
    width: 76%;    
    height: 140px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    grid-row: 2;
    align-self: center;
    justify-self: center;
    font-size: 28px;
    letter-spacing: 1px;
`

const Welcome = (props) => {
    return (
        <Container>
            {props.children}
        </Container>
    )
}

export { Welcome }