import styled from "styled-components"
import { Title } from "../../Title";
import { Description } from "../../Description";

const Sections = styled.section`
    width: 100%;
    height: 40vh;
    display: flex;
    flex-direction: column;
    align-items: center;    
`;

const SpecialtyContainer = styled(Sections)`
    width: 100%;
    height: 680px;
    background-color: #EDEDED;
    justify-content: space-around;
    padding: 34px 0px;
`;

const Box = styled.div`
    width: 100%;
    height: 360px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 80% 20%;

    place-content: center;
    margin-top: 20px;
`;

const H5 = styled.h5`
    width: 84%;
    font-size: 14px;    
    font-weight: 700;
    letter-spacing: 0.5px;
    text-align: center;
    align-self: bottom;
    justify-self: center;
`;

const Address = styled.h5`
    width: 100%;
    font-size: 14px;    
    font-weight: 300;
    letter-spacing: 0.5px;
    text-align: center;
    align-self: bottom;
    justify-self: center;
`;

const MazeImage = styled.img`    
    width: 280px;
    height: 220px;
    border-radius: 14px;
    object-fit: cover;    
    align-self: center;
    justify-self: center;

    -webkit-box-shadow: 3px 2px 18px -3px #1b1b1b;
    -moz-box-shadow: 3px 2px 18px -3px #1b1b1b;
    box-shadow: 3px 2px 18px -3px #1b1b1b;
`;

const Specialty = () => {
    return (
        <SpecialtyContainer>
            <Title>Nuestra Especialidad</Title>
            <Description width={"66%"}>Nos especializamos en una amplia gama de servicios de construcción, desde proyectos residenciales hasta comerciales, asegurando resultados excepcionales en cada paso del camino.</Description>
            <Box>
                
                <MazeImage
                    src="https://res.cloudinary.com/dejj8n6g7/image/upload/v1708550601/2024/MazeConstructions/construccion-casas_pduxo2.jpg" 
                    alt="Tractor Naranja"                    
                />       
                        
                <MazeImage
                    src="https://res.cloudinary.com/dejj8n6g7/image/upload/v1708550601/2024/MazeConstructions/construccion-locales_kntlgk.jpg" 
                    alt="Tractor Naranja"                    
                />

                <MazeImage
                    src="https://res.cloudinary.com/dejj8n6g7/image/upload/v1708550601/2024/MazeConstructions/construccion-edificios_gtaksa.jpg" 
                    alt="Tractor Naranja"                    
                />

                <H5>Construcción de casa <br/> <Address>Pinewood Boulevard, Los Santos</Address></H5>
                <H5>Construcción de centro comercial <br/> <Address>Coconut Beach, Vice City</Address></H5>
                <H5>Construcción de edificio <br/> <Address>Libery Avenue, Liberty City</Address></H5>
            </Box>
        </SpecialtyContainer>
    )
}

export { Specialty }