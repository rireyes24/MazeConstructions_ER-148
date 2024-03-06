import { styled } from "styled-components";
import { Welcome } from "../Welcome";
import { Logo } from "../Logo";
import { Language } from "../Language";
import { Navigator } from "../Navigator";
import { useState } from "react";

const Background = styled.header`
    width: 100%;
    height: 528px;
    position: relative;

    background-image: url("https://res.cloudinary.com/dejj8n6g7/image/upload/v1708531295/2024/MazeConstructions/banner-con-filtro_igdmpx.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    @media(max-width: 425px) {         
        height: 420px;    
    }
`;

const Container = styled.div`
    width: 100%;
    height: 528px;
    background-color: #12121365;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 20% 50% 30%;
    justify-content: center;
    align-items: center;

    @media(max-width: 425px) {         
        height: 420px;    
    }
`;

const Box = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media(max-width: 425px) {         
        height: 88px;
    }
`;

const BackgorundContainer = styled.div`
    width: 192px;
    height: 260px;
    position: absolute;
    right: 4vh;
    top: 92px;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 20% 20% 30% 30%;
    background-image: url("/public/language-background.svg");
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    padding-bottom: 20px;
`;

const Title = styled.h2`
    width: 80%;
    height: 100%;
    grid-row: 2 / 3;
    font-size: 12px;
    text-align: center;
    align-self: center;
    justify-self: center;
    display: grid;
    place-content: center;

`;

const BtnLanguage = styled.button`
    width: 80%;
    height: 48px;
    justify-self: center;
    align-self: center;
    border-radius: 8px;
    border: none;
    cursor: pointer;
`;

const BtnSpanish = styled(BtnLanguage)`
    grid-row: 3 / 4;
`;

const BtnEnglish = styled(BtnLanguage)`
    grid-row: 4 / 5;
`;

const Header = () => {

    const [buttonState, setButtonState] = useState(false);

    function handleClick(){
        setButtonState(!buttonState);
    }

    function selectLanguage(){
        setButtonState(false);
    }

    return (
       <Background>
         <Container>
            <Box>
                <Logo></Logo>
                <Language clickON={handleClick}></Language>
            </Box>
            {buttonState ? 
                <BackgorundContainer>
                    <Title>SELECCIONA TU IDOMA</Title>
                    <BtnSpanish onClick={selectLanguage}>Español</BtnSpanish>
                    <BtnEnglish onClick={selectLanguage}>Ingles</BtnEnglish>
                </BackgorundContainer> : <></>
            }
            <Welcome>Somos tu socio confiable en Los Santos, Vice City & Liberty City.</Welcome>            
            <Navigator></Navigator>
        </Container>
       </Background>
    );
};

export { Header };