import { styled } from "styled-components";

const Sections = styled.section`
    width: 100%;
    height: 40vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Welcome = styled(Sections)`
    height: 680px;
    display: grid;
    grid-template-rows: 30% 70%;
    grid-template-columns: 55% 45%;
    padding-bottom:80px;
    background-color: white;
    margin-top: 54px;
    margin-bottom: 34px;

    @media(max-width: 425px) {         
        display: flex; 
        flex-direction: column;     
        justify-content: space-around;
        padding-bottom: 8px;
        height: 740px;
    }
`;

const MazeImage = styled.img`    
    min-width: 300px;
    max-width: 400px;
    height: 280px;
    
    align-self: center;
    justify-self: right;
    border-radius: 20px 0px 20px 0px;
    object-fit: cover;

    -webkit-box-shadow: 3px 2px 18px -3px #1b1b1b;
    -moz-box-shadow: 3px 2px 18px -3px #1b1b1b;
    box-shadow: 3px 2px 18px -3px #1b1b1b;

    @media(max-width: 425px) {         
        min-width: 300px;
        max-width: 300px; 
        height: 180px;          
        justify-self: center;        
        margin-right: 0;  
    }
`;

const ContainerImage = styled.div`
    position: relative;
    width: 480px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    align-self: center;
    justify-self: center;

    @media(max-width: 425px) {         
        width: 100%;
        margin-top: 0px;
        height: 280px;
    }
`;

export { Sections, Welcome, MazeImage, ContainerImage }