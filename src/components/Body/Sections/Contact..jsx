import styled from "styled-components";
import { Title } from "../../Title";

const Container = styled.section`
    width: 100%;
    height: 52vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 4% 2%;

`;

const ContainerContact = styled.div`
    width: 100%;
    height: 80%;
    display: grid;
    grid-template-columns: 45% 10% 45%;
    grid-template-rows: 100%;
`;


const Contact = () => {
    return(
        <Container>
            <Title>CONTACTANOS</Title>
            <ContainerContact></ContainerContact>
        </Container>
    );
}

export { Contact }