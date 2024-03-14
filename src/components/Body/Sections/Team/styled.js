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
    height: 660px;        
    justify-content: space-around;
    background-color:  #FFFFFF;
    padding: 34px 0px;

    @media(max-width: 425px) {        
        height: 1060px;
        padding: 0px 0px;
    }
`;

const BoxTeam = styled.div`
    width: 92%;
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
        height: 820px;
        margin-top: 0px;
    }
`;

const MazeImage = styled.img`    
    width: 280px;
    height: 320px;
    border-radius: 12px;
    object-fit: cover;    
    align-self: center;
    justify-self: center;
    transition: transform ease 0.5s;

    -webkit-box-shadow: 3px 2px 18px -3px #535353a8;
    -moz-box-shadow: 3px 2px 18px -3px #535353a8;
    box-shadow: 3px 2px 18px -3px #535353a8;

    @media(max-width: 425px) {        
        width: 300px;
        height: 220px;
        margin-bottom: 0px;
        border-radius: 10px;
    }

    &:hover {
        transform: scale(1.04);
        transition: ease 0.5s;
    }
`;

export { Sections, TeamContainer, BoxTeam, MazeImage }