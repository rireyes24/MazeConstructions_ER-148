import { Welcome, MazeImage, ContainerImage } from "./styled"
import { Title } from "../../../Title";
import { Description } from "../../../Description";
import styled from "styled-components";


const ExperienceCard = styled.span`
    position: absolute; 
    left: 0;
    bottom: 0;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width: 120px;
    height: 160px;
`;

const WelcomeToMaze = (props) => {
    return (
        <Welcome id="section1">       
            <Title>{props.dataLanguage.data.body.sections.welcome.title}</Title>

            <Description>
                {props.dataLanguage.data.body.sections.welcome.description}
            </Description>

            <ContainerImage>
                <MazeImage 
                    src="https://res.cloudinary.com/dejj8n6g7/image/upload/v1708533723/2024/MazeConstructions/tractor-1_gujeul.jpg" 
                    alt="Tractor Naranja"
                />
                <ExperienceCard
                    style={{ backgroundImage: `url(${"./ten-years2.svg"})` }}
                ></ExperienceCard>                
            </ContainerImage> 
        </Welcome>
    )
}

export default WelcomeToMaze