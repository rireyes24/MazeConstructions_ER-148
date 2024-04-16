import { useEffect } from "react";
import { Container, ContainerList, ListItem, Button, Line } from "./styled"


const Navigator = (props) => {

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

    const navButtons = props.dataLanguage.data.header.nav;

    return (
        <Container>            
            <ContainerList>
                <ListItem>
                    <Button id={"button1"}>{navButtons.welcome.toUpperCase()}</Button>
                </ListItem>
                <Line></Line>          
                <ListItem>
                    <Button id={"button2"}>{navButtons.specialty.toUpperCase()}</Button>
                </ListItem>
                <Line></Line> 
                <ListItem>
                    <Button id={"button3"}>{navButtons.team.toUpperCase()}</Button>
                </ListItem>
                <Line></Line> 
                <ListItem>
                    <Button id={"button4"}>{navButtons.location.toUpperCase()}</Button>
                </ListItem>
                <Line></Line> 
                <ListItem>
                    <Button id={"button4"}>{navButtons.contact.toUpperCase()}</Button>
                </ListItem>
            </ContainerList>              
        </Container>
    )
}

export { Navigator }

