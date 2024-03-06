import styled from "styled-components";
import { useForm, ValidationError } from "@formspree/react";
import { useEffect, useState } from "react";


const Container = styled.div`
    width: 80%;
    height: 96%;    
    color: #2b2b2b;
    align-self: center;
    justify-self: center;
`;

const TextBox = styled.input.attrs({ type: "text"})`
    width: 100%;
    height: 42px;
    border-radius: 12px;
    background-color: white;
    border: 1px solid #2b2b2b;
    color: #2b2b2b;
    padding-left: 12px;
    margin-bottom: 28px;
    color: #2b2b2b;

    &:focus {
        border-color: #009e28; /* Cambia el color del borde a rojo */
        outline: none; /* Quita el contorno predeterminado */
        color: #2b2b2b;
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
    
    &:focus {
        border: 2px solid #009e28; /* Cambia el color del borde a rojo */
        outline: none; /* Quita el contorno predeterminado */
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
    margin-top: 32px;
    font-size: 16px;
    letter-spacing: 2px;
    font-weight: bold;
`;

const Line = styled.div`
    width: 2px;
    height: 88%;
    background-color: #a7a7a7;
    align-self: center;
    justify-self: center;
    border-radius: 50px;
`;

const FormContainer = styled.form`
    width: 100%;
    height:420px;
    display: flex;
    flex-direction: column;
    margin-top: 62px;
`;

const EmailForm = () => {

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
                <h3>Envianos un correo para agendar una cita </h3>
                <FormContainer onSubmit={sendMessage} method="POST">  
                    <TextBox 
                        placeholder="Nombre*" 
                        id="name" 
                        type="text" 
                        name="name"
                        value={nameClient}
                        onChange={(e) => setNameClient(e.target.value)}
                    ></TextBox>
                    {hasContentName ? <p>OBLIGATORIO: Por favor ingrese su nombre!</p> : <></>}
                   
                   <TextBox 
                        placeholder="Email*" 
                        id="email" 
                        type="email" 
                        name="email" value={email}
                        onChange={(e) => setEmail(e.target?.value)}
                    ></TextBox>
                     {hasContentEmail ? <p>OBLIGATORIO: Por favor ingrese su correo!</p> : <></>}

                    <TextBox 
                        placeholder="Asunto" 
                        id="affair" 
                        type="text" 
                        name="affair"
                        value={affair}
                        onChange={(e) => setAffair(e.target.value)}
                    ></TextBox>
                                     
                    <TextArea 
                        placeholder="Mensaje*" 
                        id="message" 
                        name="Mensaje" 
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></TextArea>
                    {hasContentMessage ? <p>OBLIGATORIO: Por favor escriba un mensaje!</p> : <></>}
                   
                    <SubmitButton type="submit">ENVIAR</SubmitButton>
                    {msjSended ? <p>Mensaje Enviado, Pronto nos contactaremos con usted</p> : <></> }
                </FormContainer>
            </Container>

            <Line></Line>

            <Container>
                <h3>Envianos un mensaje al indox o siguenos en nuestras redes sociales</h3>
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