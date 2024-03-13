import styled from "styled-components";

const Container = styled.section`
    width: 100%;
    height: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color:  #FFFFFF;
    padding: 34px 2%;

    @media(max-width: 425px) {        
        height: 900px;
        padding: 0px 0%;
    }
`;

const ContainerContact = styled.div`
    width: 100%;
    height: 80%;
    display: grid;
    grid-template-columns: 48% 4% 48%;
    grid-template-rows: 100%;
    margin-top: 18px;    

    @media(max-width: 425px) {        
        grid-template-columns: 100%;
        grid-template-rows: 38% 4% 58%;
        margin-top: 38px;
    }
`;

const Line = styled.div`
    width: 2px;
    height: 88%;
    background-color: #a7a7a7;
    align-self: center;
    justify-self: center;
    border-radius: 50px;

    @media(max-width: 425px) {        
        width: 88%;
        height: 2px;
        grid-row: 2 / 3;
    }
`;

const ContainerNetworks = styled.div`
    width: 88%;
    height: 96%;    
    color: #2b2b2b;
    align-self: center;
    justify-self: center;

    grid-column: 3 / 4;
    grid-row: 1 / 2;

    @media(max-width: 425px) {
        grid-row: 1 / 2;
    }
`;

const ContainerForm = styled.div`
    width: 88%;
    height: 96%;    
    color: #2b2b2b;
    align-self: center;
    justify-self: center;
    display: flex;
    flex-direction: column; 
    
    grid-column: 1 / 2;
    grid-row: 1 / 2;

    @media(max-width: 425px) {
        width: 98%;
        grid-row: 3 / 4;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

const H3 = styled.h3`
    font-size: 16px;
    text-align: center;
    margin-bottom: 24px;
`;

export { Container, ContainerContact, Line, ContainerNetworks, ContainerForm, H3 }