import { useEffect } from "react";
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

const Button = styled.button`
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

    useEffect(() => {
        const btnScroll1 = document.getElementById("button1");
        const section1 = document.getElementById("section1");

        const handleClick = (num) => {
            section1.scrollIntoView({ behavior: 'smooth'});
        }

        btnScroll1.addEventListener('click', handleClick)

        return () => {
            btnScroll1.removeEventListener('click', handleClick);
        }
    }, [])

    useEffect(() => {
        const btnScroll2 = document.getElementById("button2");
        const section2 = document.getElementById("section2");

        const handleClick = (num) => {
            section2.scrollIntoView({ behavior: 'smooth'});
        }

        btnScroll2.addEventListener('click', handleClick)

        return () => {
            btnScroll2.removeEventListener('click', handleClick);
        }
    }, [])

    useEffect(() => {
        const btnScroll3 = document.getElementById("button3");
        const section3 = document.getElementById("section3");

        const handleClick = (num) => {
            section3.scrollIntoView({ behavior: 'smooth'});
        }

        btnScroll3.addEventListener('click', handleClick)

        return () => {
            btnScroll3.removeEventListener('click', handleClick);
        }
    }, [])

    useEffect(() => {
        const btnScroll4 = document.getElementById("button4");
        const section4 = document.getElementById("section4");

        const handleClick = (num) => {
            section4.scrollIntoView({ behavior: 'smooth'});
        }

        btnScroll4.addEventListener('click', handleClick)

        return () => {
            btnScroll4.removeEventListener('click', handleClick);
        }
    }, [])

    return (
        <Container>
            <ContainerList>
                <ListItem>
                    <Button id={"button1"}>Bienvenido</Button>
                </ListItem>            
                <ListItem>
                    <Button id={"button2"}>Nuestra Especialidad</Button>
                </ListItem>
                <ListItem>
                    <Button id={"button3"}>Nuestro Equipo</Button>
                </ListItem>
                <ListItem>
                    <Button id={"button4"}>Contactanos</Button>
                </ListItem>
            </ContainerList>
        </Container>
    )
}

export { Navigator }