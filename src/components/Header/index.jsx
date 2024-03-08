import { Background, Container, Box, BackgorundContainer, Title, BtnSpanish, BtnEnglish } from "./styled";
import { Welcome } from "../Welcome";
import { Logo } from "../Logo";
import { Language } from "../Language";
import { Navigator } from "../Navigator";
import { useState } from "react";

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