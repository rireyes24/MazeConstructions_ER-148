import { Container, ContainerContact, Line, ContainerNetworks, ContainerForm, H3 } from "./styled"
import { Title } from "../../../Title";
import { EmailForm } from "../../../EmailForm";

const Contact = () => {
    return(
        <Container>
            <Title>CONTACTANOS</Title>
            <ContainerContact>
                <ContainerNetworks>
                    <H3>Envianos un mensaje al indox o siguenos en nuestras redes sociales</H3>
                </ContainerNetworks>
                <Line></Line>
                <ContainerForm>
                        <H3>Envianos un correo para agendar una cita</H3>
                    <EmailForm></EmailForm>
                </ContainerForm>
            </ContainerContact>
        </Container>
    );
}

export { Contact }