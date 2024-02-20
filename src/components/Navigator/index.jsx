import { styled } from "styled-components"

const Container = styled.nav`
    height: 40px;
    background-color: black;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 0px 30px;

    align-self: center;
    justify-self: center;
`;

const Navigator = () => {
    return (
        <Container>
            <h1>Bienvenido</h1>            
            <h1>Nuestra Especialidad</h1>
            <h1>Nuestro equipo</h1>
            <h1>Contactanos</h1>
        </Container>
    )
}

export { Navigator }