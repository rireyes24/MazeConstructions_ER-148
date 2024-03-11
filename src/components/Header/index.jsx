import { Background, Container, Box, BackgorundContainer, Title, BtnSpanish, BtnEnglish } from "./styled";
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
                <Language clickON={handleClick}></Language>
            </Box>
            {buttonState ? 
                <BackgorundContainer>
                    <Title>SELECCIONA TU IDOMA</Title>
                    <BtnSpanish onClick={() => selectLanguage("ES")}>Español</BtnSpanish>
                    <BtnEnglish onClick={() => {
                        selectLanguage("EN")
                        console.log(props.selectLanguage);
                    }}>Ingles</BtnEnglish>
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