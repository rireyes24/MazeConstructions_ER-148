import { TeamContainer, BoxTeam, MazeImage } from "./styled"
import { Title } from "../../../Title"
import { Description } from "../../../Description"
import { dataTeam } from "../../../../data/dataTeam"

const Team = (props) => {
    return(
        <>
            <TeamContainer id="section3">
                {props.selectLanguage === "ES" ? 
                    <Title>Nuestro Equipo</Title>:
                    <Title>Our Team</Title>
                }
                {props.selectLanguage === "ES" ? 
                    <Description>
                        Nuestro <b>equipo altamente calificado</b> de arquitectos, ingenieros y constructores trabaja 
                        de forma <b>profesional</b> y <b>personalizada</b> para que se ajusten a las necesidades específicas
                        de cada cliente.
                    </Description>:
                    <Description>
                        Our <b>highly qualified team</b> of architects, engineers, and builders works in 
                        a <b>professional</b> and <b>personalized</b> manner to tailor to the specific needs 
                        of each client.
                    </Description>
                }
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