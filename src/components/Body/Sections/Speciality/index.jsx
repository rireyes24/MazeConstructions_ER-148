import { SpecialtyContainer, Box, H5, Address, MazeImage, ContainerBox } from "./styled"
import { Title } from "../../../Title";
import { Description } from "../../../Description";
import { dataSpecialty } from "../../../../data/dataSpecialty";

const Specialty = (props) => {
    return (
        <SpecialtyContainer id="section2">
            {props.selectLanguage === "ES" ?
                <Title>Nuestra Especialidad</Title>:
                <Title>Our Specialty</Title>
            }     

            {props.selectLanguage === "ES" ?
                <Description>Nos especializamos en una amplia gama de servicios de construcción, desde proyectos residenciales hasta comerciales, asegurando resultados excepcionales en cada paso del camino.</Description>:
                <Description>We specialize in a wide range of construction services, from residential to commercial projects, ensuring exceptional results at every step of the way.</Description>
            }  
                       
            <ContainerBox>
                {dataSpecialty.map((data) => {
                    return(
                        <Box>
                        <MazeImage
                            src={data.url} 
                            alt={data.alt}                    
                        />
                        <H5>{data.title} <br/> <Address>{data.address}</Address></H5>
                        </Box>
                    )
                })}
            </ContainerBox>
        </SpecialtyContainer>
    )
}

export { Specialty }