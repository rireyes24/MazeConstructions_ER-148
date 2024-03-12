import { Background, Container, Box, BackgorundContainer, Title, BtnSpanish, BtnEnglish, Flag, Text } from "./styled";
import { Welcome } from "../Welcome";
import { Logo } from "../Logo";
import { Language } from "../Language";
import { Navigator } from "../Navigator";
import { useState } from "react";

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
                <BackgorundContainer style={{backgroundImage: `url(${"/public/background-lan.svg"})`}}>
                    <Title>SELECCIONA TU IDOMA</Title>
                    <BtnSpanish                       
                        onClick={() => selectLanguage("ES")}
                    >
                        <Flag style={{backgroundImage: `url(${"/public/guatemalaGT.png"})`}}></Flag>
                        <Text>ESPAÑOL</Text>
                    </BtnSpanish>
                    <BtnEnglish 
                        onClick={() => selectLanguage("EN")
                    }>
                        <Flag style={{backgroundImage: `url(${"/public/united-statesUS.png"})`}}></Flag>
                        <Text>INGLES</Text>
                    </BtnEnglish>
                </BackgorundContainer> : <></>
            }
            {props.selectLanguage === "ES" ? 
                <Welcome>Somos tu socio confiable en Los Santos, Vice City & Liberty City.</Welcome> :
                <Welcome>We are your reliable partner in Los Santos, Vice City & Liberty City.</Welcome>     
            }          
            <Navigator
                selectLanguage={props.selectLanguage} 
            ></Navigator>
        </Container>
       </Background>
    );
};

export { Header };