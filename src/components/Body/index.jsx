import { styled } from "styled-components"

const Container = styled.main`
    width: 100vw;
    height: 40vh;
    background-color: #39399b;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Body = () => {
    return (
        <Container>
            <h1>Body</h1>
        </Container>
    )
}

export { Body }