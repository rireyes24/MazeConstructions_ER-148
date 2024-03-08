import { Container } from "./styled"

import WelcomeToMaze  from "./Sections/Welcome"
import { Specialty } from "./Sections/Speciality"
import { Team } from "./Sections/Team"
import { Location } from "./Sections/Location"
import { Contact } from "./Sections/Contact"

export default function Main () {
    return (
        <Container>
            <WelcomeToMaze></WelcomeToMaze>
            <Specialty></Specialty>
            <Team></Team>            
            <Location></Location>
            <Contact></Contact>
        </Container>
    )
}
