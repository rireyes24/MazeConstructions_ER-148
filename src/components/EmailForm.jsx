import styled from "styled-components";
import { useForm, ValidationError } from "@formspree/react";


const Container = styled.div`
    width: 80%;
    height: 90%;    
    color: #2b2b2b;
    align-self: center;
    justify-self: center;
`;

const TextBox = styled.input.attrs({ type: "text"})`
    width: 100%;
    height: 38px;
    border-radius: 12px;
    background-color: white;
    border: 2px solid #2b2b2b;
    color: #2b2b2b;
    padding-left: 12px;
    margin-top: 32px;

    &:focus {
    border-color: red; /* Cambia el color del borde a rojo */
    outline: none; /* Quita el contorno predeterminado */
  }
`;

const MiniBox = styled.div`
    width: 100%;
    height: 40px;
    display: flex;    
    gap: 10px;
    margin-bottom: 20px;
`;

const TextArea = styled.input.attrs({ type: "textarea"})`
    width: 100%;
    height: 88px;
    border-radius: 12px;
    background-color: white;
    border: 2px solid #2b2b2b;
    color: #2b2b2b;
    padding-left: 12px;
    margin-top: 32px;

    &:focus {
    border: 1px solid red; /* Cambia el color del borde a rojo */
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
    height: 80%;
    background-color: #a7a7a7;
    align-self: center;
    justify-self: center;
    border-radius: 50px;
`;

function ContactMessage(){
    const [state, handleSubmit] = useForm("xgegygrw");

    return(
        <>
            <Container>
                <h3>Envianos un correo para agendar una cita </h3>
                <form onSubmit={handleSubmit} method="POST">                   
                    <TextBox placeholder="Nombre" id="name" type="text" name="name"></TextBox>
                    <ValidationError 
                        prefix="Name" 
                        field="name" 
                        errors={state.errors}
                    ></ValidationError>

                    <TextBox placeholder="Asunto" id="affair" type="text" name="affair"></TextBox>
                    <ValidationError 
                        prefix="Affair" 
                        field="affair" 
                        errors={state.errors}
                    ></ValidationError>

                    <TextBox placeholder="Email" id="email" type="email" name="email"></TextBox>
                    <ValidationError 
                        prefix="Email" 
                        field="email" 
                        errors={state.errors}
                    ></ValidationError>
                    {/* <TextBox placeholder="Asunto"></TextBox> */}
                    <TextArea placeholder="Mensaje" id="message" name="message"></TextArea>
                    <ValidationError 
                        prefix="Message" 
                        field="message" 
                        errors={state.errors}
                    ></ValidationError>
                    <SubmitButton type="submit" disabled={state.submitting}>ENVIAR</SubmitButton>
                    {state.succeeded ? <p>Mensaje Enviado, Pronto nos contactaremos con usted</p> : <></> }
                </form>
            </Container>
            <Line></Line>
            <Container>
                <h3>Envianos un mensaje al indox o siguenos en nuestras redes sociales</h3>
            </Container>
        </>
    );
}

const EmailForm = () => {

   return(
    <>
        <ContactMessage></ContactMessage>
    </>
   )
}

export { EmailForm }