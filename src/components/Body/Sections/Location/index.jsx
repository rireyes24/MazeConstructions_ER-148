import { ContainerLocation, Box, MiniBox, MiniBoxData, City, Address, MazeImage, Phone } from "./styled"
import { Title } from "../../../Title";
import { dataLocation } from "../../../../data/dataLocation";

const Location = (props) => {
    return(
        <ContainerLocation id="section4">
                
                {props.selectLanguage === "ES" ?
                    <Title>Nuestras Ubicaciones</Title> :
                    <Title>Our Locations</Title>
                }
                <Box>
                    {dataLocation.map((data) => {
                        return(
                            <MiniBox>
                                <MiniBoxData>
                                    <City>{data.city}</City>
                                    <Phone>{data.telephone}</Phone>
                                    <Address>{data.address}</Address>
                                </MiniBoxData>
                                <MazeImage
                                    src={data.url}
                                    name={data.alt}
                                />
                            </MiniBox>
                        );
                    })}
                </Box>
            </ContainerLocation>
    );
}

export { Location }