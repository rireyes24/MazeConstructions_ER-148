import { Container, ContainerContact, Line, ContainerNetworks, ContainerForm, H3 } from "./styled"
import { Title } from "../../../Title";
import { EmailForm } from "../../../EmailForm";
import styled from "styled-components";

const NetworksTable = styled.div`
    width: 340px;
    height: 260px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    align-self: center;
    justify-self: center;
    margin-bottom: 110px;
`;

const Network = styled.a`
    display: flex;
    width: 52px;
    height: 52px;
    margin: 0 8px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    align-self: center;
    justify-self: center;
    transition: ease 0.5s;

    &:hover {
        transform: scale(1.06);
        transition: ease 0.5s;
    }
    
`;

const dataNetworks = [
    {
        id: "instagram",
        icon: "/public/networks/instagram.svg",
        url: "",
    },
    {
        id: "x",
        icon: "/public/networks/X.svg",
        url: "",
    },
    {
        id: "facebook",
        icon: "/public/networks/facebook.svg",
        url: "",
    },
    {
        id: "youtube",
        icon: "/public/networks/youtube.svg",
        url: "",
    },
    {
        id: "",
        icon: "",
        url: "",
    },
    {
        id: "tiktok",
        icon: "/public/networks/tiktok.svg",
        url: "",
    }
]

const Contact = (props) => {
    return(
        <Container>
            {props.selectLanguage === "ES" ? 
                <Title>CONTACTANOS</Title> : 
                <Title>CONTACT US</Title>
            }
            <ContainerContact>
                <ContainerNetworks>
                    <H3>Envianos un mensaje al indox o siguenos en nuestras redes sociales</H3>
                    <NetworksTable>
                        {dataNetworks.map((data, index) => {
                            return(
                                <>
                                    {index === 4 ?
                                        <span></span> :
                                        <Network 
                                            href={data.url} 
                                            target="_blank" 
                                            key={data.id}
                                            style={{backgroundImage: `url(${data.icon})`}}
                                        ></Network>
                                    }
                                </>
                            )
                        })}
                    </NetworksTable>
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