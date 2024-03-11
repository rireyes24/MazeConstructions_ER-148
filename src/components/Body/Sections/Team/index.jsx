import { TeamContainer, BoxTeam, MazeImage } from "./styled"
import { Title } from "../../../Title"
import { Description } from "../../../Description"
import { dataTeam } from "../../../../data/dataTeam"

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
                    {dataTeam.map((item) => {
                        return(
                            <MazeImage
                                src={item.url} 
                                name={item.alt}
                            />
                        );
                    })}                   
                </BoxTeam>
            </TeamContainer>
        </>
    ) 
}

export { Team }