import { TeamContainer, BoxTeam, MazeImage } from "./styled"
import { Title } from "../../../Title"
import { Description } from "../../../Description"

const Team = () => {
    return(
        <>
            <TeamContainer id="section3">
                <Title>Nuestro Equipo</Title>
                <Description>
                    Nuestro <b>equipo altamente calificado</b> de arquitectos, ingenieros y constructores trabaja 
                    de forma <b>profesional</b> y <b>personalizada</b> para que se ajusten a las necesidades específicas
                     de cada cliente.
                </Description>
                <BoxTeam>
                    <MazeImage
                        src="https://res.cloudinary.com/dejj8n6g7/image/upload/v1708551688/2024/MazeConstructions/team-photo1_dtixcs.jpg" 
                        name="Tractor Naranja"
                    />
                    <MazeImage
                        src="https://res.cloudinary.com/dejj8n6g7/image/upload/v1708551688/2024/MazeConstructions/team-photo2_nfz6xd.jpg" 
                        name="Tractor Naranja"
                    />
                    <MazeImage
                        src="https://res.cloudinary.com/dejj8n6g7/image/upload/v1708551858/2024/MazeConstructions/team-photo3_kj4qqv.jpg" 
                        name="Tractor Naranja"
                    />
                </BoxTeam>
            </TeamContainer>
        </>
    ) 
}

export { Team }