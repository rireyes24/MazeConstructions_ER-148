import { SpecialtyContainer, Box, H5, Address, MazeImage } from "./styled"
import { Title } from "../../../Title";
import { Description } from "../../../Description";



const Specialty = () => {
    return (
        <SpecialtyContainer id="section2">
            <Title>Nuestra Especialidad</Title>
            <Description>Nos especializamos en una amplia gama de servicios de construcción, desde proyectos residenciales hasta comerciales, asegurando resultados excepcionales en cada paso del camino.</Description>
            
            <Box>                
                <MazeImage
                    src="https://res.cloudinary.com/dejj8n6g7/image/upload/v1708550601/2024/MazeConstructions/construccion-casas_pduxo2.jpg" 
                    alt="Tractor Naranja"                    
                />       
                <H5>Construcción de casa <br/> <Address>Pinewood Boulevard, Los Santos</Address></H5>
            </Box>  
            
            <Box>     
                <MazeImage
                    src="https://res.cloudinary.com/dejj8n6g7/image/upload/v1708550601/2024/MazeConstructions/construccion-locales_kntlgk.jpg" 
                    alt="Tractor Naranja"                    
                />
                <H5>Construcción de centro comercial <br/> <Address>Coconut Beach, Vice City</Address></H5>
            </Box>  

            <Box>
                <MazeImage
                    src="https://res.cloudinary.com/dejj8n6g7/image/upload/v1708550601/2024/MazeConstructions/construccion-edificios_gtaksa.jpg" 
                    alt="Tractor Naranja"                    
                />
                <H5>Construcción de edificio <br/> <Address>Libery Avenue, Liberty City</Address></H5>
            </Box>

        </SpecialtyContainer>
    )
}

export { Specialty }