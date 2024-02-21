import { styled } from "styled-components"
import { Title } from "../../components/Title"
import { Description } from "../../components/Description"

const Container = styled.main`
    width: 100vw; 
    background-color: #f8f8f8;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Welcome = styled.section`
    width: 100%;
    height: 30vh;
`;

const Specialty = styled.section`
    width: 100%;
    height: 30vh;
    background-color: #EDEDED;
`;

const Team = styled.section`
    width: 100%;
    height: 30vh;
`;

const Location = styled.section`
    width: 100%;
    height: 30vh;
    display: flex;
    flex-direction: column;
    background-color: #EDEDED;
`;

const Box = styled.div`
    width: 100%;
    height: 300px;
    display: flex;
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
            </Welcome>
            <Specialty>
                <Title>Nuestra Especialidad</Title>
                <Description>Nos especializamos en una amplia gama de servicios de construcción, desde proyectos residenciales hasta comerciales, asegurando resultados excepcionales en cada paso del camino.</Description>
            </Specialty>
            <Team>
                <Title>Nuestro Equipo</Title>
                <Description>Nuestro equipo altamente calificado de arquitectos, ingenieros y constructores trabaja de manera colaborativa para ofrecer soluciones innovadoras y personalizadas que se ajusten a las necesidades específicas de cada cliente.</Description>
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