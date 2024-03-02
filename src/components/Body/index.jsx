import { styled } from "styled-components"
import { Title } from "../../components/Title"
import { Description } from "../../components/Description"
import { MazeImage } from "../../components/Image"
import WelcomeToMaze  from "./Sections/WelcomeToMaze"
import { Specialty } from "./Sections/OurSpeciality"
import { Location } from "./Sections/OurLocation"
import { Contact } from "./Sections/Contact."

const Container = styled.main`
    width: 100%; 
    background-color: #f8f8f8;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Sections = styled.section`
    width: 100%;
    height: 40vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;


const Team = styled(Sections)`
    width: 100%;
    height: 630px;        
    justify-content: space-around;
    padding: 34px 0px;
`;

const BoxTeam = styled.div`
    width: 80%;
    height: 360px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 100%;
    place-content: center;
    place-items: center;
    align-items: center;
    margin-top: 20px;
`;





export default function Main () {
    return (
        <Container>
            <WelcomeToMaze></WelcomeToMaze>
            <Specialty></Specialty>

           
            <Team id="section3">
                <Title>Nuestro Equipo</Title>
                <Description width={"66%"}>
                    Nuestro <b>equipo altamente calificado</b> de arquitectos, ingenieros y constructores trabaja 
                    de forma <b>profesional</b> y <b>personalizada</b> para que se ajusten a las necesidades específicas
                     de cada cliente.
                </Description>
                <BoxTeam>
                    <MazeImage
                        url="https://res.cloudinary.com/dejj8n6g7/image/upload/v1708551688/2024/MazeConstructions/team-photo1_dtixcs.jpg" 
                        name="Tractor Naranja"
                        width="380px"
                    />
                    <MazeImage
                        url="https://res.cloudinary.com/dejj8n6g7/image/upload/v1708551688/2024/MazeConstructions/team-photo2_nfz6xd.jpg" 
                        name="Tractor Naranja"
                        width="260px"
                    />
                    <MazeImage
                        url="https://res.cloudinary.com/dejj8n6g7/image/upload/v1708551858/2024/MazeConstructions/team-photo3_kj4qqv.jpg" 
                        name="Tractor Naranja"
                        width="260px"
                    />
                </BoxTeam>
            </Team>
            
            <Location></Location>
            <Contact></Contact>

            
        </Container>
    )
}

