import { styled } from "styled-components";

const Background = styled.header`
    width: 100%;
    height: 528px;
    position: relative;

    background-image: url("https://res.cloudinary.com/dejj8n6g7/image/upload/v1708531295/2024/MazeConstructions/banner-con-filtro_igdmpx.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    @media(max-width: 425px) {         
        height: 440px;            
    }
`;

const Container = styled.div`
    width: 100%;
    height: 528px;
    background-color: #12121365;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 20% 56% 24%;
    justify-content: center;
    align-items: center;

    @media(max-width: 425px) {         
        height: 440px;    
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
    width: 318px;
    height: 240px;
    position: absolute;
    right: 4vh;
    top: 92px;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 14% 16% 30% 30%;   
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;  

    @media(max-width: 425px) { 
        width: 268px;
        height: 240px;
        grid-template-rows: 14% 20% 29% 28%;   
        right: 3vh;
        top: 58px;
    }  
`;

const Title = styled.h2`
    width: 80%;
    height: 40%;
    grid-row: 2 / 3;
    font-size: 16px;
    text-align: center;
    align-self: end;
    justify-self: center;
    display: grid;
    place-content: center;
    color: #413A3A;

    @media(max-width: 425px) { 
        font-size: 14px;
    } 

`;

const BtnLanguage = styled.button`
    width: 188px;
    height: 52px;
    justify-self: center;
    align-self: end;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    display: flex;    
    align-items: center;
    justify-content: space-evenly;
    background-color: #6e6e6e;
    padding: 2% 0;
    background-color: #413A3A;

    &:hover {
        transform: scale(1.04)
    }

    @media(max-width: 425px) { 
        width: 148px;
        height: 42px;
        align-self: center;
    }  
`;

const BtnSpanish = styled(BtnLanguage)`
    grid-row: 3 / 4;
`;

const BtnEnglish = styled(BtnLanguage)`
    grid-row: 4 / 5;
`;

const Flag = styled.span`
    display: block;
    width: 60px;
    height: 32px;    
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;  

    @media(max-width: 425px) { 
        width: 48px;
        height: 28px;
    }  
`;

const Text = styled.h3`
    width: 78px;
    font-size: 16px;
    letter-spacing: 1px;
    text-align: left;
    margin: 0;
    color: #E7E7DD;

    @media(max-width: 425px) { 
        font-size: 14px; 
    }
`;

export { Background, Container, Box, BackgorundContainer, Title, BtnSpanish, BtnEnglish, Flag, Text }