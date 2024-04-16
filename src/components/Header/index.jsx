import { Background, Container, Box, BackgorundContainer, Title, BtnSpanish, BtnEnglish, Flag, BtnHebrew, Text } from "./styled";
import { Welcome } from "../Welcome";
import { Logo } from "../Logo";
import { Language } from "../Language";
import { useState } from "react";
import { keyframes } from "styled-components";
import { languages } from "../../data/dataLanguages";

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
    
    function changeLanguage(lan) {
        setButtonState(false);
        props.setDataLanguage(lan);
    }

    return (
       <Background>
         <Container>
            <Box>
                <Logo></Logo>
                <Language 
                    clickON={handleClick} 
                    selectLanguage={props.selectLanguage}
                    dataLanguage={props.dataLanguage}
                ></Language>
            </Box>
            {buttonState ? 
                <BackgorundContainer 
                    style={{                        
                        animation: `${buttonState ? "none" : `${moveRightAnimation} 2s cubic-bezier(0.25, 0.1, 0.25, 1) forwards`}`
                    }}>

                    <Title>{props.dataLanguage.languages.title}</Title>

                    <BtnEnglish 
                        onClick={() => changeLanguage(languages[0])
                    }>
                        <Flag style={{backgroundImage: `url(${"/united-statesUS.png"})`}}></Flag>
                        <Text>{props.dataLanguage.languages.en}</Text>
                    </BtnEnglish>

                    <BtnSpanish                       
                        onClick={() => changeLanguage(languages[1])}
                    >
                        <Flag style={{backgroundImage: `url(${"/spainES.png"})`}}></Flag>
                        <Text>{props.dataLanguage.languages.es}</Text>
                    </BtnSpanish>

                    <BtnHebrew 
                        onClick={() => changeLanguage(languages[2])
                    }>
                        <Flag style={{backgroundImage: `url(${"/israelHE.png"})`}}></Flag>
                        <Text>{props.dataLanguage.languages.he}</Text>
                    </BtnHebrew>

                </BackgorundContainer> : <></>
            }
            <Welcome>{props.dataLanguage.data.header.welcome}</Welcome>           
        </Container>
       </Background>
    );
};

export { Header };