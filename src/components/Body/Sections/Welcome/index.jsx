import { Welcome, MazeImage } from "./styled"
import { Title } from "../../../Title";
import { Description } from "../../../Description";

const WelcomeToMaze = (props) => {
    return (
        <Welcome id="section1">
            {props.selectLanguage === "ES" ?
                <Title>Bienvenido a Maze Constructions</Title> :
                <Title>Welcome to Maze Constructions</Title>
            } 
            {props.selectLanguage === "ES" ?
                <Description>
                    En <b>Maze Constructions</b> nos enorgullece ser <b>líderes</b> en la industria de la construcción en 
                    las ciudades mas importantes de EEUU. <br/> <br/> Con <b>10 años de trayectoria</b> continuamos en siempre dar un servicio
                    de alta calidad, somos reconocidos por nuestra habilidad para convertir los sueños de nuestros clientes
                    en realidad.
                </Description> :
                <Description>
                   In <b>Maze Constructions</b> we pride ourselves on being <b>leaders</b> in the construction 
                   industry in the most important cities of the USA. <br/> <br/> With <b>10 years of experience</b>, 
                   we continue to always provide high-quality service, recognized for our ability to turn our clients' 
                   dreams into reality.
                </Description>
            }       
            <MazeImage 
                src="https://res.cloudinary.com/dejj8n6g7/image/upload/v1708533723/2024/MazeConstructions/tractor-1_gujeul.jpg" 
                alt="Tractor Naranja"
            />
        </Welcome>
    )
}

export default WelcomeToMaze