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
            ></WelcomeToMaze>
            <Specialty
                selectLanguage={props.selectLanguage} 
            ></Specialty>
            <Team
                selectLanguage={props.selectLanguage} 
            ></Team>            
            <Location
                selectLanguage={props.selectLanguage} 
            ></Location>
            <Contact
                selectLanguage={props.selectLanguage} 
            ></Contact>
        </Container>
    )
}
