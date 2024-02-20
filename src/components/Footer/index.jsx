import { styled } from "styled-components"

const Container = styled.footer`
    width: 100vw;
    height: 40vh;
    background-color: brown;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Footer = () => {
    return (
        <Container>
            <h1>Footer</h1>
        </Container>
    )
}

export { Footer }