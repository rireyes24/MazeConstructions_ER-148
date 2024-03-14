import styled from "styled-components"

const Sections = styled.section`
    width: 100%;
    height: 40vh;
    display: flex;
    flex-direction: column;
    align-items: center;    
`;

const SpecialtyContainer = styled(Sections)`
    width: 100%;
    height: 760px;
    background-color: #f8f8f8;
    justify-content: space-around;
    padding: 34px 0px;

    @media(max-width: 425px) {         
        display: flex; 
        flex-direction: column;     
        justify-content: space-around;
        padding: 0px 0px;
        padding-bottom: 24px;
        height: 1440px;
    }
`;

const Box = styled.div`
    position: relative;
    width: 300px;
    height: 348px;
    display: grid;
    grid-template-rows: 58% 42%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    place-content: center;
    background-color: #FFFFFF;
    border-radius: 16px;
    margin-top: 20px;
    align-self: center;
    justify-self: center;

    -webkit-box-shadow: 3px 2px 18px -3px #535353a8;
    -moz-box-shadow: 3px 2px 18px -3px #535353a8;
    box-shadow: 3px 2px 18px -3px #535353a8;
    
`;

const ContainerBox = styled.div`
    width: 92%;
    height: 400px;  
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 100%;
    place-content: center;
    margin-top: 20px;

    @media(max-width: 425px) { 
        width: 98%; 
        height: 1140px;      
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin-top: 0;
    }
`;

const MazeImage = styled.img`  
    width: 100%;
    height: 100%;
    border-radius: 16px 16px 0 0;
    object-fit: cover;    
    align-self: center;
    justify-self: center;
`;

const MiniBoxData = styled.div`
    width: 300px;
    height: 100%;   
    justify-self: center;
    align-self: center;  
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 8% 0;  
`;

const H5 = styled.h5`
    width: 92%;
    height: 30px;
    font-size: 14px;    
    font-weight: 700;
    letter-spacing: 0.5px;
    text-align: center;
    align-self: bottom;
    justify-self: center;
    text-align: center;
    

    @media(max-width: 425px) {        
        align-self: center;
        justify-self: center;
        margin-top: 8px;
    }
`;

const Address = styled.h5`
    width: 100%;
    font-size: 14px;    
    font-weight: 300;
    letter-spacing: 0.5px;
    text-align: center;
    align-self: bottom;
    justify-self: center;
`;



export { SpecialtyContainer, Box, H5, Address, MazeImage, ContainerBox, MiniBoxData }