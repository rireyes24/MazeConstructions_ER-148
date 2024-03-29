import styled from "styled-components";
import { useEffect, useState } from "react";


const Container = styled.div`
    width: 80%;
    height: 96%;    
    color: #2b2b2b;
    align-self: center;
    justify-self: center;

    @media(max-width: 425px) {        
        grid-row: 3 / 4;
    }
`;

const TextBox = styled.input.attrs({ type: "text"})`
    width: 100%;
    height: 42px;
    border-radius: 12px;
    background-color: white;
    border: 1px solid #2b2b2b;
    color: #2b2b2b;
    padding-left: 12px;
    color: #2b2b2b;

    &:focus {
        border-color: #009e28; /* Cambia el color del borde a rojo */
        outline: none; /* Quita el contorno predeterminado */
        color: #2b2b2b;
    }

    @media(max-width: 425px) {
        margin-bottom: 4px;
        height: 32px;
        border-radius: 8px;
    }

   
`;

const TextArea = styled.input.attrs({ type: "textarea"})`
    width: 100%;
    height: 88px;
    border-radius: 12px;
    background-color: white;
    border: 1px solid #2b2b2b;
    color: #2b2b2b;
    padding-left: 12px;
    margin-top: 18px;
    
    &:focus {
        border: 2px solid #009e28; /* Cambia el color del borde a rojo */
        outline: none; /* Quita el contorno predeterminado */
    }

    @media(max-width: 425px) {        
        margin-top: 18px;
        margin-bottom: 14px;
        border-radius: 8px;
    }
`;

const SubmitButton = styled.button`
    width: 40%;
    height: 38px;
    border-radius: 12px;
    background-color: white;
    background-color: #FFC500;
    border: none;
    cursor: pointer;
    color: #ececec;    
    margin-top: 12px;
    font-size: 16px;
    letter-spacing: 2px;
    font-weight: bold;

    @media(max-width: 425px) {
        margin-top: 6px;
    }
`;



const FormContainer = styled.form`
    width: 100%;
    height:420px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-top: 8px;

    @media(max-width: 425px) {
        height: 400px;                
        margin-top: 0;
        justify-content: space-around;
    }
`;

const Error = styled.p`
    font-size: 13px;
    color: red;
    margin: 10px;
    @media(max-width: 425px) {
        font-size: 12px;
        margin-bottom: 18px;
    }
`;

const Send = styled.p`
    font-size: 16px;
    color: green;
`;

const EmailForm = (props) => {

    const [nameClient, setNameClient] = useState("");
    const [email, setEmail] = useState("");
    const [affair, setAffair] = useState("");
    const [message, setMessage] = useState("");

    const [msjSended, setMsjSended] = useState(false);

    const [hasContentName, setHasContentName] = useState(false);
    const [hasContentEmail, setHasContentEmail] = useState(false);
    const [hasContentMessage, setHasContentMessage] = useState(false);


    function ValidationTextBox(){
        if(nameClient.length > 1){
            setHasContentName(false);  
        } else{
            setHasContentName(true);
        }

        if(email.length > 1){
            setHasContentEmail(false);
        }else{
            setHasContentEmail(true);
        }

        if(message.length > 1){
            setHasContentMessage(false);            
        }else{
            setHasContentMessage(true);
        }
    };

    function ClearForm(){
        setNameClient("");
        setEmail("");
        setAffair("");
        setMessage("");
    }

    const sendMessage = async (event)  => {
        event.preventDefault();
        ValidationTextBox();

        try {
            if(nameClient.length > 1 && email.length > 1 && message.length > 1){
                setMsjSended(true);
                ClearForm();
            }          
        } catch (error) {
            console.error('Error:', error);
            alert('Hubo un problema al enviar el formulario. Por favor, inténtalo de nuevo más tarde.');
        }
    };

    return(
        <>
            <Container>                
                <FormContainer onSubmit={sendMessage} method="POST">  
                    <TextBox 
                        placeholder={props.selectLanguage === "ES" ? "Nombre*" : "Name*"} 
                        id="name" 
                        type="text" 
                        name="name"
                        value={nameClient}
                        onChange={(e) => setNameClient(e.target.value)}
                    ></TextBox>
                    {hasContentEmail ? 
                        props.selectLanguage === "ES" ?
                            <Error>OBLIGATORIO: Por favor ingrese su nombre!</Error> :
                            <Error>REQUIRED: Please enter your name!</Error>
                    : <></>}
                    {hasContentName ? <Error></Error> : <></>}
                   
                   <TextBox 
                        placeholder="Email*" 
                        id="email" 
                        type="email" 
                        name="email" value={email}
                        onChange={(e) => setEmail(e.target?.value)}
                    ></TextBox>                    
                    {hasContentEmail ? 
                        props.selectLanguage === "ES" ?
                            <Error>OBLIGATORIO: Por favor ingrese su correo!</Error> :
                            <Error>REQUIRED: Please enter your email address!</Error>
                    : <></>}

                    <TextBox 
                        placeholder={props.selectLanguage === "ES" ? "Asunto*" : "Affair*"}
                        id="affair" 
                        type="text" 
                        name="affair"
                        value={affair}
                        onChange={(e) => setAffair(e.target.value)}
                    ></TextBox>
                                     
                    <TextArea 
                        placeholder={props.selectLanguage === "ES" ? "Mensaje*" : "Message*"} 
                        id="message" 
                        name="Mensaje" 
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></TextArea>
                    {hasContentEmail ? 
                        props.selectLanguage === "ES" ?
                            <Error>OBLIGATORIO: Por favor escriba un mensaje!</Error> :
                            <Error>REQUIRED: Please write a message!</Error>
                    : <></>}
                    {hasContentMessage ? <Error></Error> : <></>}
                   
                    {props.selectLanguage === "ES" ? 
                        <SubmitButton type="submit">ENVIAR</SubmitButton> : 
                        <SubmitButton type="submit">SEND</SubmitButton>
                    }                    
                    {msjSended ? 
                        props.selectLanguage === "ES" ?
                            <Send>CORREO ENVIADO: Pronto nos contactaremos</Send> : 
                            <Send>EMAIL SENT: We will contact you soon</Send>
                    : <></> }
                </FormContainer>
            </Container>
        </>
    );
}

export { EmailForm }


// const response = await fetch('https://formspree.io/xgegygrw', {
//               method: 'POST',
//               headers: {
//                 'Content-Type': 'application/json',
//               },
//               body: JSON.stringify({ nameClient, email, affair, message }),
//             });
      
//             if (response.ok) {
//               setMsjSended(true);
//               ClearForm();
//             } else {
//               alert('Hubo un problema al enviar el formulario. Por favor, inténtalo de nuevo más tarde.');
//             }