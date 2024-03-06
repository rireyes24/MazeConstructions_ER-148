import styled from "styled-components";
import { Title } from "../../Title";
import { EmailForm } from "../../EmailForm";

const Container = styled.section`
    width: 100%;
    height: 68vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 34px 2%;
`;

const ContainerContact = styled.div`
    width: 100%;
    height: 80%;
    display: grid;
    grid-template-columns: 48% 4% 48%;
    grid-template-rows: 100%;
    margin-top: 58px;
`;


const Contact = () => {
    return(
        <Container>
            <Title>CONTACTANOS</Title>
            <ContainerContact>
                <EmailForm></EmailForm>
            </ContainerContact>
        </Container>
    );
}

export { Contact }