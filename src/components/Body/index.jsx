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
                selectLanguage={props.selectLanguage} 
                dataLanguage={props.dataLanguage}
            ></WelcomeToMaze>
            <Specialty
                selectLanguage={props.selectLanguage} 
                dataLanguage={props.dataLanguage}
            ></Specialty>
            <Team
                selectLanguage={props.selectLanguage} 
                dataLanguage={props.dataLanguage}
            ></Team>            
            <Location
                selectLanguage={props.selectLanguage} 
                dataLanguage={props.dataLanguage}
            ></Location>
            <Contact
                selectLanguage={props.selectLanguage} 
                dataLanguage={props.dataLanguage}
            ></Contact>
        </Container>
    )
}
