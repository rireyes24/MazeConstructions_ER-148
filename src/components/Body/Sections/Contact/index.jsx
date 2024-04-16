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
            <Title>{props.dataLanguage.data.body.sections.contact.title}</Title>

            <ContainerContact>
                <ContainerNetworks>

                    <H3>{props.dataLanguage.data.body.sections.contact.description2}</H3>                 
                    <NetworksTable>
                        {dataNetworks.map((data, index) => {
                            return(
                                <div key={index}>
                                    {index === 4 ?
                                        <span></span> :
                                        <Network 
                                            href={data.url} 
                                            target="_blank"                                             
                                            style={{backgroundImage: `url(${data.icon})`}}                                           
                                        ></Network>
                                    }
                                </div>
                            )
                        })}
                    </NetworksTable>
                </ContainerNetworks>
                <Line></Line>
                <ContainerForm>

                    <H3>{props.dataLanguage.data.body.sections.contact.description}</H3>
                    <EmailForm
                        selectLanguage={props.selectLanguage}
                    ></EmailForm>
                </ContainerForm>
            </ContainerContact>
        </Container>
    );
}

export { Contact }