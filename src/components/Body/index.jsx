import { styled } from "styled-components"
import { Title } from "../../components/Title"
import { Description } from "../../components/Description"
import { Image } from "../Image"

const Container = styled.main`
    width: 100vw; 
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

const Welcome = styled(Sections)`
    height: 500px;
    display: grid;
    grid-template-rows: 30% 70%;
    grid-template-columns: 60% 40%;
`;


const Specialty = styled(Sections)`
    width: 100%;
    height: 520px;
    background-color: #EDEDED;
    justify-content: space-around;
`;

const Team = styled(Sections)`
    width: 100%;
    height: 580px;        
    justify-content: space-around;
`;

const Location = styled(Sections)`
    width: 100%;
    height: 30vh;
    display: flex;
    flex-direction: column;
    background-color: #EDEDED;
`;

const Box = styled.div`
    width: 80%;
    height: 300px;
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
`;

const MiniBox = styled.div`
    width: 300px;
    height: 300px;    
`;
const Body = () => {
    return (
        <Container>
            <Welcome>
                <Title>Bienvenido a Maze Constructions</Title>
                <Description>En Maze Constructions nos enorgullece ser líderes en la industria de la construcción en Los Santos. Con una larga trayectoria de excelencia y compromiso con la calidad, somos reconocidos por nuestra habilidad para convertir los sueños de nuestros clientes en realidad.</Description>
                <Image 
                    url="https://res.cloudinary.com/dejj8n6g7/image/upload/v1708533723/2024/MazeConstructions/tractor-1_gujeul.jpg" 
                    name="Tractor Naranja"
                />
            </Welcome>
            <Specialty>
                <Title>Nuestra Especialidad</Title>
                <Description>Nos especializamos en una amplia gama de servicios de construcción, desde proyectos residenciales hasta comerciales, asegurando resultados excepcionales en cada paso del camino.</Description>
                <Box>
                    <Image 
                        url="https://res.cloudinary.com/dejj8n6g7/image/upload/v1708550601/2024/MazeConstructions/construccion-casas_pduxo2.jpg" 
                        name="Tractor Naranja"
                        width="300px"
                    />
                    <Image 
                        url="https://res.cloudinary.com/dejj8n6g7/image/upload/v1708550601/2024/MazeConstructions/construccion-locales_kntlgk.jpg" 
                        name="Tractor Naranja"
                        width="300px"
                    />
                    <Image 
                        url="https://res.cloudinary.com/dejj8n6g7/image/upload/v1708550601/2024/MazeConstructions/construccion-edificios_gtaksa.jpg" 
                        name="Tractor Naranja"
                        width="300px"
                    />
                </Box>
            </Specialty>
            <Team>
                <Title>Nuestro Equipo</Title>
                <Description>Nuestro equipo altamente calificado de arquitectos, ingenieros y constructores trabaja de manera colaborativa para ofrecer soluciones innovadoras y personalizadas que se ajusten a las necesidades específicas de cada cliente.</Description>
                <Box>
                    <Image 
                        url="https://res.cloudinary.com/dejj8n6g7/image/upload/v1708551688/2024/MazeConstructions/team-photo1_dtixcs.jpg" 
                        name="Tractor Naranja"
                        width="380px"
                    />
                    <Image 
                        url="https://res.cloudinary.com/dejj8n6g7/image/upload/v1708551688/2024/MazeConstructions/team-photo2_nfz6xd.jpg" 
                        name="Tractor Naranja"
                        width="260px"
                    />
                    <Image 
                        url="https://res.cloudinary.com/dejj8n6g7/image/upload/v1708551858/2024/MazeConstructions/team-photo3_kj4qqv.jpg" 
                        name="Tractor Naranja"
                        width="260px"
                    />
                </Box>
            </Team>
            <Location>
                <Title>Nuestras Ubicaciones</Title>
                <Box>
                    <MiniBox>
                        <h3>Los Santos</h3>
                        <p>555 Boulevard de la Victoria, Los Santos</p>
                    </MiniBox>
                    <MiniBox>
                        <h3>Vice City</h3>
                        <p>321 Avenida Ocean Beach, Vice City</p>
                    </MiniBox>
                    <MiniBox>
                        <h3>Liberty City</h3>
                        <p>123 Liberty Avenue, Liberty City</p>
                    </MiniBox>
                </Box>
            </Location>
        </Container>
    )
}

export { Body }