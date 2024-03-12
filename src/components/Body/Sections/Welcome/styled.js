import { styled } from "styled-components";

const Sections = styled.section`
    width: 100%;
    height: 40vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Welcome = styled(Sections)`
    height: 580px;
    display: grid;
    grid-template-rows: 30% 70%;
    grid-template-columns: 55% 45%;
    padding-bottom:80px;
    background-color: #FFFFFF;

    @media(max-width: 425px) {         
        display: flex; 
        flex-direction: column;     
        justify-content: space-around;
        padding-bottom: 8px;
    }
`;

const MazeImage = styled.img`    
    min-width: 300px;
    max-width: 400px;
    height: 280px;
    
    align-self: center;
    justify-self: right;
    margin-right: 20%;
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

export { Sections, Welcome, MazeImage }