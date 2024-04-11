import { Container } from "./styled"

import WelcomeToMaze  from "./Sections/Welcome"
import { Specialty } from "./Sections/Speciality"
import { Team } from "./Sections/Team"
import { Location } from "./Sections/Location"
import { Contact } from "./Sections/Contact"

export default function Main (props) {
    return (
        <Container>
            <WelcomeToMaze                 
                dataLanguage={props.dataLanguage}
            ></WelcomeToMaze>
            <Specialty                
                dataLanguage={props.dataLanguage}
            ></Specialty>
            <Team                
                dataLanguage={props.dataLanguage}
            ></Team>            
            <Location                
                dataLanguage={props.dataLanguage}
            ></Location>
            <Contact                
                dataLanguage={props.dataLanguage}
            ></Contact>
        </Container>
    )
}
