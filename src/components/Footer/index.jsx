import { styled } from "styled-components"
import { Logo } from "../Logo";

const Container = styled.footer`
    width: 100%;
    height: 28vh;
    background-color: #292929;
    display: flex;
    justify-content: center;
    align-items: center;
    display: grid;
    grid-template-columns: 35% 35% 30%;
    padding: 4% 2%;
`;

const MyLogoContainer = styled.div`
    width: 200px;
    height: 110px;
    display: grid;
    grid-template-rows: 30% 70%;
    grid-template-columns: 100%;
    grid-column: 3 / 4;
    justify-self: center;
    align-self: center;

    @media (max-width: 425px) {
        width: 100px;
    }
`;

const Text = styled.p`
    width: 98%;
    height: 80px;
    color: white;

    @media (max-width: 425px) {
        font-size: 12px;
    }
`;

const MyLogo = styled.a`
    width: 160px;
    height: 80px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    display: flex;
    justify-self: right;
    align-self: center;

    @media (max-width: 425px) {
        width: 80px;
    }
`;

const Footer = ({selectLanguage}) => {
    return (
        <Container>
            <Logo height={"68px"}></Logo>
            <MyLogoContainer>
                {selectLanguage === "ES" ?
                    <Text>Sitio Web diseñado por: </Text> :
                    <Text>Website designed by: </Text>                
                }
                <MyLogo 
                    style={{backgroundImage: `url(${"/public/Rireyes_Light.svg"})`}}
                    href="https://rireyesdev24.netlify.app/"
                    target="_blank"
                ></MyLogo>
            </MyLogoContainer>
        </Container>
    )
}

export { Footer }