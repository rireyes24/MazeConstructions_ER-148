import styled from "styled-components";

const Sections = styled.section`
    width: 100%;
    height: 40vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const TeamContainer = styled(Sections)`
    width: 100%;
    height: 630px;        
    justify-content: space-around;
    background-color:  #FFFFFF;
    padding: 34px 0px;

    @media(max-width: 425px) {        
        height: 860px;
        padding: 0px 0px;
    }
`;

const BoxTeam = styled.div`
    width: 98%;
    height: 360px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 100%;
    place-content: center;
    place-items: center;
    align-items: center;
    margin-top: 20px;

    @media(max-width: 425px) {        
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 620px;
        margin-top: 0px;
    }
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
        margin-bottom: 0px;
        border-radius: 10px;
    }
`;

export { Sections, TeamContainer, BoxTeam, MazeImage }