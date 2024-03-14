import styled from "styled-components";

const Sections = styled.section`
    width: 100%;
    height: 40vh;
    display: flex;
    flex-direction: column;    
    align-items: center;
`;


const ContainerLocation = styled(Sections)`
    width: 100%;
    height: 720px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 20px 0px;    
    background-color:  #f8f8f8;
    padding: 34px 0px;

    @media(max-width: 425px) {        
        height: 1400px;
        display: flex;
        flex-direction: column;
        padding: 0px 0px;
        padding-bottom: 20px;
    }
`;

const Box = styled.div`
    width: 92%;
    height: 520px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 100%;

    place-content: center;
    margin-top: 20px;

    @media(max-width: 425px) {        
        height: 1640px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
`;

const MiniBox = styled.a`
    width: 300px;
    height: 460px;   
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 42% 58%;
    grid-row: 1 / 3;
    justify-self: center;
    align-self: center;
    background-color: #f8f8f8; 
    border-radius: 16px;
    text-decoration: none;

    -webkit-box-shadow: 3px 2px 18px -3px #535353a8;
    -moz-box-shadow: 3px 2px 18px -3px #535353a8;
    box-shadow: 3px 2px 18px -3px #535353a8;

    @media(max-width: 425px) {        
        display: flex;
        height: 400px; 
        flex-direction: column;
        margin-bottom: 20px;
    }
`;
// #EEA016
const MiniBoxData = styled.div`
    width: 300px;
    height: 100%;   
    grid-row: 1 / 2;
    justify-self: center;
    align-self: center;  
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 12% 0;  
`;

const City = styled.h4`
    font-size: 22px;
    font-weight: bold;
    letter-spacing: 1px;
    text-align: center;
    color: #272727;
`;

const Phone = styled.h5`
    font-size: 14px;    
    font-weight: 500;
    letter-spacing: 1px;
    text-align: center;
    color: #272727;
`;

const Address = styled.h5`
    font-size: 12px;    
    font-weight: 500;
    letter-spacing: 1px;
    text-align: center;
    color: #272727;
`;

const MazeImage = styled.img`    
    width: 100%;
    height: 260px;
    border-radius: 0 0px 16px 16px;
    object-fit: cover;    
    align-self: end;
    justify-self: center;

    @media(max-width: 425px) {        
        width: 100%;
        height: 100%;
    }
`;

export { ContainerLocation, Box, MiniBox, MiniBoxData, City, Address, MazeImage, Phone }