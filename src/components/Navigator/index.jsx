import { styled } from "styled-components"

const Container = styled.nav`
    min-width: 640px;
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

const ContainerList = styled.ul`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 0;
    padding: 0;
`;

const ListItem = styled.li`
    height: 100%;
    color: white;    
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    transform: scale(1);
    animation: transform 0.5s linear;

    &:hover {
        transform: scale(1.09);
        animation: transform 0.5s linear;
    }
`;

const Button = styled.a`
    height: 100%;
    color: white;
    background-color: transparent;
    border: none;
    font-size: 16px;
    cursor: pointer;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Navigator = () => {

    const handleClick = (num) => {
        console.log(num);
    }

    return (
        <Container>
            <ContainerList>
                <ListItem>
                    <Button href={"#section1"}>Bienvenido</Button>
                </ListItem>            
                <ListItem>
                    <Button href={"#section2"}>Nuestra Especialidad</Button>
                </ListItem>
                <ListItem>
                    <Button href={"#section3"}>Nuestro Equipo</Button>
                </ListItem>
                <ListItem>
                    <Button href={"#section4"}>Contactanos</Button>
                </ListItem>
            </ContainerList>
        </Container>
    )
}

export { Navigator }