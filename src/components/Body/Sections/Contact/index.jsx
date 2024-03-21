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

    @media(max-width: 425px) {        
        margin-bottom: 0px;
    }
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
        icon: "/networks/instagram.svg",
        url: "",
    },
    {
        id: "x",
        icon: "/networks/X.svg",
        url: "",
    },
    {
        id: "facebook",
        icon: "/networks/facebook.svg",
        url: "",
    },
    {
        id: "youtube",
        icon: "/networks/youtube.svg",
        url: "",
    },
    {
        id: "",
        icon: "",
        url: "",
    },
    {
        id: "tiktok",
        icon: "/networks/tiktok.svg",
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
                    {props.selectLanguage === "ES" ? 
                         <H3>Envianos un mensaje al indox o siguenos en nuestras redes sociales</H3> :
                         <H3>Send us a message to our inbox or follow us on our social media channels</H3>
                    }                   
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
                    {props.selectLanguage === "ES" ? 
                        <H3>Envianos un correo para agendar una cita</H3> :
                        <H3>Send us an email to schedule an appointment</H3>
                    }                    
                    <EmailForm></EmailForm>
                </ContainerForm>
            </ContainerContact>
        </Container>
    );
}

export { Contact }