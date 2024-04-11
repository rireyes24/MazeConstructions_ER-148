import { SpecialtyContainer, Box, H5, Address, MazeImage, ContainerBox, MiniBoxData } from "./styled"
import { Title } from "../../../Title";
import { Description } from "../../../Description";

const Specialty = (props) => {

    const projects = props.dataLanguage.data.body.sections.specialty.projects;

    return (
        <SpecialtyContainer id="section2">           
            <Title>{props.dataLanguage.data.body.sections.specialty.title}</Title>

            <Description>{props.dataLanguage.data.body.sections.specialty.description}</Description>
          
            <br></br>
            <br></br>
            <br></br>

            <Description>{props.dataLanguage.data.body.sections.specialty.description2}</Description>
                       
            <ContainerBox>
                {projects.map((data) => {
                    return(
                        <Box>
                            <MazeImage
                                src={data.url} 
                                alt={data.alt}                    
                            />

                            <MiniBoxData>
                                <H5>{data.name}</H5>
                                <Address>{data.address}</Address>
                            </MiniBoxData>                           
                        </Box>
                    )
                })}
            </ContainerBox>
        </SpecialtyContainer>
    )
}

export { Specialty }