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
    height: 580px;
    display: grid;
    grid-template-rows: 30% 70%;
    grid-template-columns: 60% 40%;
    padding-bottom:80px;
`;


const Specialty = styled(Sections)`
    width: 100%;
    height: 680px;
    background-color: #EDEDED;
    justify-content: space-around;
    padding: 34px 0px;
`;

const Team = styled(Sections)`
    width: 100%;
    height: 580px;        
    justify-content: space-around;
    padding: 34px 0px;
`;

const Location = styled(Sections)`
    width: 100%;
    height: 620px;
    display: flex;
    flex-direction: column;
    padding: 20px 0px;    
    background-color: #EDEDED;
    padding: 34px 0px;
`;

const Box = styled.div`
    width: 80%;
    height: 360px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 80% 20%;

    place-content: center;
    margin-top: 20px;
`;

const MiniBox = styled.div`
    width: 300px;
    height: 300px;    
`;

const City = styled.h4`
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 1px;
    text-align: center;
`;

const Address = styled.h5`
    font-size: 14px;    
    font-weight: 500;
    letter-spacing: 1px;
    text-align: center;
`;

const H5 = styled.h5`
    width: 84%;
    font-size: 14px;    
    font-weight: 700;
    letter-spacing: 0.5px;
    text-align: center;
    align-self: bottom;
    justify-self: center;
`


const Body = () => {
    return (
        <Container>
            <Welcome>
                <Title>Bienvenido a Maze Constructions</Title>
                <Description>
                    En <b>Maze Constructions</b> nos enorgullece ser <b>líderes</b> en la industria de la construcción en 
                    las ciudades mas importantes de EEUU. <br/> <br/> Con <b>10 años de trayectoria</b> continuamos en siempre dar un servicio
                    de alta calidad, somos reconocidos por nuestra habilidad para convertir los sueños de nuestros clientes
                     en realidad.
                </Description>                
                <Image 
                    url="https://res.cloudinary.com/dejj8n6g7/image/upload/v1708533723/2024/MazeConstructions/tractor-1_gujeul.jpg" 
                    name="Tractor Naranja"
                />
            </Welcome>
            <Specialty>
                <Title>Nuestra Especialidad</Title>
                <Description width={"66%"}>Nos especializamos en una amplia gama de servicios de construcción, desde proyectos residenciales hasta comerciales, asegurando resultados excepcionales en cada paso del camino.</Description>
                <Box>
                   
                    <Image 
                        url="https://res.cloudinary.com/dejj8n6g7/image/upload/v1708550601/2024/MazeConstructions/construccion-casas_pduxo2.jpg" 
                        name="Tractor Naranja"
                        width="260px"
                    />       
                              
                    <Image 
                        url="https://res.cloudinary.com/dejj8n6g7/image/upload/v1708550601/2024/MazeConstructions/construccion-locales_kntlgk.jpg" 
                        name="Tractor Naranja"
                        width="260px"
                    />

                    <Image 
                        url="https://res.cloudinary.com/dejj8n6g7/image/upload/v1708550601/2024/MazeConstructions/construccion-edificios_gtaksa.jpg" 
                        name="Tractor Naranja"
                        width="260px"
                    />

                    <H5>Construcción de casa <br/> Pinewood Boulevard, Los Santos</H5>
                    <H5>Construcción de centro comercial <br/> Coconut Beach, Vice City</H5>
                    <H5>Construcción de edificio <br/> Libery Avenue, Liberty City</H5>
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
                        <City>Los Santos</City>
                        <Address>555 Boulevard de la Victoria, Los Santos</Address>
                        <Image 
                            url="https://res.cloudinary.com/dejj8n6g7/image/upload/v1708552848/2024/MazeConstructions/los-santos_sfxcmh.png" 
                            name="Tractor Naranja"
                            width="300px"
                         />
                    </MiniBox>
                    <MiniBox>
                        <City>Vice City</City>
                        <Address>321 Avenida Ocean Beach, Vice City</Address>
                        <Image 
                            url="https://res.cloudinary.com/dejj8n6g7/image/upload/v1708553013/2024/MazeConstructions/vice-city_ch2ubf.png" 
                            name="Tractor Naranja"
                            width="300px"
                        />
                    </MiniBox>
                    <MiniBox>
                        <City>Liberty City</City>
                        <Address>123 Liberty Avenue, Liberty City</Address>
                        <Image 
                            url="https://res.cloudinary.com/dejj8n6g7/image/upload/v1708553153/2024/MazeConstructions/liberty-city_tedwlg.png" 
                            name="Tractor Naranja"
                            width="300px"
                        />
                    </MiniBox>
                </Box>
            </Location>
        </Container>
    )
}

export { Body }