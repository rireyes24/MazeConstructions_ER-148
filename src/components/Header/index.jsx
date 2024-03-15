import { Background, Container, Box, BackgorundContainer, Title, BtnSpanish, BtnEnglish, Flag, Text } from "./styled";
import { Welcome } from "../Welcome";
import { Logo } from "../Logo";
import { Language } from "../Language";
import { useState } from "react";
import { keyframes } from "styled-components";

// Crear el keyframe para la animación
const moveRightAnimation = keyframes`
  0% {
    transform: translateX(107%);
    display: grid;
  }
  100% {
    transform: translateX(14%);
  }
`;

const Header = (props) => {

    const [buttonState, setButtonState] = useState(false);

    function handleClick(){
        setButtonState(!buttonState);
    }

    function selectLanguage(lan){
        setButtonState(false);
        props.setSelectLanguage(lan);
    }

    return (
       <Background>
         <Container>
            <Box>
                <Logo></Logo>
                <Language clickON={handleClick} selectLanguage={props.selectLanguage} ></Language>
            </Box>
            {buttonState ? 
                <BackgorundContainer 
                    style={{
                        
                        animation: `${buttonState ? "none" : `${moveRightAnimation} 2s cubic-bezier(0.25, 0.1, 0.25, 1) forwards`}`
                    }}>
                    <Title>SELECCIONA TU IDOMA</Title>
                    <BtnSpanish                       
                        onClick={() => selectLanguage("ES")}
                    >
                        <Flag style={{backgroundImage: `url(${"/guatemalaGT.png"})`}}></Flag>
                        <Text>ESPAÑOL</Text>
                    </BtnSpanish>
                    <BtnEnglish 
                        onClick={() => selectLanguage("EN")
                    }>
                        <Flag style={{backgroundImage: `url(${"/united-statesUS.png"})`}}></Flag>
                        <Text>INGLES</Text>
                    </BtnEnglish>
                </BackgorundContainer> : <></>
            }
            {props.selectLanguage === "ES" ? 
                <Welcome>Somos tu socio confiable en Los Santos, Vice City & Liberty City.</Welcome> :
                <Welcome>We are your reliable partner in Los Santos, Vice City & Liberty City.</Welcome>     
            }          
           
        </Container>
       </Background>
    );
};

export { Header };