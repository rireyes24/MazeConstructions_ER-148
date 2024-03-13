import { SpecialtyContainer, Box, H5, Address, MazeImage, ContainerBox, MiniBoxData } from "./styled"
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

            <br></br>
            <br></br>
            <br></br>

            {props.selectLanguage === "ES" ?
                <Description>Proyectos actuales en construcción</Description> :
                <Description>Current projects under construction</Description>
            } 
                       
            <ContainerBox>
                {dataSpecialty.map((data) => {
                    return(
                        <Box>
                            <MazeImage
                                src={data.url} 
                                alt={data.alt}                    
                            />
                            {props.selectLanguage === "ES" ? 
                                <MiniBoxData>
                                    <H5>{data.title}</H5>
                                    <Address>{data.address}</Address>
                                </MiniBoxData> :
                                <MiniBoxData>
                                    <H5>{data.titleEN}</H5>
                                    <Address>{data.address}</Address>
                                </MiniBoxData>
                            }
                        </Box>
                    )
                })}
            </ContainerBox>
        </SpecialtyContainer>
    )
}

export { Specialty }