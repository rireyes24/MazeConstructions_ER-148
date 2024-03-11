import { SpecialtyContainer, Box, H5, Address, MazeImage, ContainerBox } from "./styled"
import { Title } from "../../../Title";
import { Description } from "../../../Description";
import { dataSpecialty } from "../../../../data/dataSpecialty";

const Specialty = () => {
    return (
        <SpecialtyContainer id="section2">
            <Title>Nuestra Especialidad</Title>
            <Description>Nos especializamos en una amplia gama de servicios de construcción, desde proyectos residenciales hasta comerciales, asegurando resultados excepcionales en cada paso del camino.</Description>
           
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