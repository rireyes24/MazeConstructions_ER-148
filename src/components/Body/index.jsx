import { styled } from "styled-components"

const Container = styled.main`
    width: 100vw;
    height: 80vh;
    background-color: #e9e9e9;
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