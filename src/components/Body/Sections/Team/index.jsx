import { TeamContainer, BoxTeam, MazeImage } from "./styled"
import { Title } from "../../../Title"
import { Description } from "../../../Description"
import { dataTeam } from "../../../../data/dataTeam"

const Team = (props) => {
    return(
        <>
            <TeamContainer id="section3">

                <Title>{props.dataLanguage.data.body.sections.team.title}</Title>
                <Description>{props.dataLanguage.data.body.sections.team.description}</Description>
                
                <BoxTeam>
                    {dataTeam.map((item, index) => {
                        return(
                            <MazeImage
                                src={item.url} 
                                name={item.alt}
                                key={index}
                            />
                        );
                    })}                   
                </BoxTeam>
            </TeamContainer>
        </>
    ) 
}

export { Team }