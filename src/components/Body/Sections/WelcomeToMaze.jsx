import { styled } from "styled-components";
import { Title } from "../../Title";
import { Description } from "../../Description";

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
    grid-template-columns: 55% 45%;
    padding-bottom:80px;
`;

const MazeImage = styled.img`    
    min-width: 300px;
    max-width: 400px;
    height: 280px;
    
    align-self: center;
    justify-self: right;
    margin-right: 20%;
    border-radius: 20px 0px 20px 0px;

    -webkit-box-shadow: 3px 2px 18px -3px #1b1b1b;
    -moz-box-shadow: 3px 2px 18px -3px #1b1b1b;
    box-shadow: 3px 2px 18px -3px #1b1b1b;
`;


const WelcomeToMaze = () => {
    return (
        <Welcome id="section1">
            <Title>Bienvenido a Maze Constructions</Title>
            <Description>
                En <b>Maze Constructions</b> nos enorgullece ser <b>líderes</b> en la industria de la construcción en 
                las ciudades mas importantes de EEUU. <br/> <br/> Con <b>10 años de trayectoria</b> continuamos en siempre dar un servicio
                de alta calidad, somos reconocidos por nuestra habilidad para convertir los sueños de nuestros clientes
                    en realidad.
            </Description>                
            <MazeImage 
                src="https://res.cloudinary.com/dejj8n6g7/image/upload/v1708533723/2024/MazeConstructions/tractor-1_gujeul.jpg" 
                alt="Tractor Naranja"
            />
        </Welcome>
    )
}

export default WelcomeToMaze