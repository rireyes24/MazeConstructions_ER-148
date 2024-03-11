import { ContainerLocation, Box, MiniBox, MiniBoxData, City, Address, MazeImage } from "./styled"
import { Title } from "../../../Title";

const Location = (props) => {
    return(
        <ContainerLocation id="section4">
                
                {props.selectLanguage === "ES" ?
                    <Title>Nuestras Ubicaciones</Title> :
                    <Title>Our Locations</Title>
                }
                <Box>
                    <MiniBox>
                        <MiniBoxData>
                            <City>Los Santos</City>
                            <Address>555 Boulevard de la Victoria, Los Santos</Address>
                        </MiniBoxData>
                        <MazeImage
                            src="https://res.cloudinary.com/dejj8n6g7/image/upload/v1708552848/2024/MazeConstructions/los-santos_sfxcmh.png" 
                            name="Tractor Naranja"
                        />
                    </MiniBox>
                    
                    <MiniBox>
                        <MiniBoxData>
                            <City>Vice City</City>
                            <Address>321 Avenida Ocean Beach, Vice City</Address>
                        </MiniBoxData>
                        <MazeImage
                            src="https://res.cloudinary.com/dejj8n6g7/image/upload/v1708553013/2024/MazeConstructions/vice-city_ch2ubf.png" 
                            name="Tractor Naranja"
                        />
                    </MiniBox>

                    <MiniBox>
                        <MiniBoxData>
                            <City>Liberty City</City>
                            <Address>123 Liberty Avenue, Liberty City</Address>
                        </MiniBoxData>
                        <MazeImage
                            src="https://res.cloudinary.com/dejj8n6g7/image/upload/v1708553153/2024/MazeConstructions/liberty-city_tedwlg.png" 
                            name="Tractor Naranja"
                        />
                    </MiniBox>
                </Box>
            </ContainerLocation>
    );
}

export { Location }