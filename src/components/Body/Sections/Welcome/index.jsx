import { Welcome, MazeImage } from "./styled"
import { Title } from "../../../Title";
import { Description } from "../../../Description";

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