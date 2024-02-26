import { styled } from "styled-components"

const Container = styled.footer`
    width: 100%;
    height: 40vh;
    background-color: brown;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("https://res.cloudinary.com/dejj8n6g7/image/upload/v1708531295/2024/MazeConstructions/banner-con-filtro_igdmpx.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom;
`

const Footer = () => {
    return (
        <Container>
            <h1>Footer</h1>
        </Container>
    )
}

export { Footer }