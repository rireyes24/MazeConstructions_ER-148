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
    height: 680px;
    background-color: #f8f8f8;
    justify-content: space-around;
    padding: 34px 0px;

    @media(max-width: 425px) {         
        display: flex; 
        flex-direction: column;     
        justify-content: space-around;
        padding: 0px 0px;
        padding-bottom: 8px;
        height: 1140px;
    }
`;

const Box = styled.div`
    width: 100%;
    height: 390px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    place-content: center;
    

    @media(max-width: 425px) { 
        width: 88%;       
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 240px;
        margin-top: 0;
        margin-bottom: 10px;
    }
`;

const ContainerBox = styled.div`
    width: 100%;
    height: 390px;
    display: grid;
    grid-template-columns: repeat(3, 33.33%);
    grid-template-rows: 100%;
    justify-content: center;
    align-items: center;
    place-content: center;
    margin-top: 20px;

    @media(max-width: 425px) { 
        width: 98%; 
        height: 840px;      
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin-top: 0;
    }
`;

const H5 = styled.h5`
    width: 84%;
    font-size: 14px;    
    font-weight: 700;
    letter-spacing: 0.5px;
    text-align: center;
    align-self: bottom;
    justify-self: center;
    margin-top: 24px;

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

const MazeImage = styled.img`    
    width: 280px;
    height: 220px;
    border-radius: 14px;
    object-fit: cover;    
    align-self: center;
    justify-self: center;

    -webkit-box-shadow: 3px 2px 18px -3px #1b1b1b;
    -moz-box-shadow: 3px 2px 18px -3px #1b1b1b;
    box-shadow: 3px 2px 18px -3px #1b1b1b;

    @media(max-width: 425px) {        
        width: 280px;
        height: 180px;
        margin-bottom: 18px;
        border-radius: 10px;
    }
`;

export { SpecialtyContainer, Box, H5, Address, MazeImage, ContainerBox }