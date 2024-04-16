import { ContainerLocation, Box, MiniBox, MiniBoxData, City, Address, MazeImage, Phone } from "./styled"
import { Title } from "../../../Title";
import { dataLocation } from "../../../../data/dataLocation";

const Location = (props) => {

    const ourLocations = props.dataLanguage.data.body.sections.location.locations;

    return(
        <ContainerLocation id="section4">
                
                <Title>{props.dataLanguage.data.body.sections.location.title}</Title>
                
                <Box>
                    {ourLocations.map((data, index) => {
                        return(
                            <MiniBox href={data.map} target="_blank" key={index}>
                                <MiniBoxData>
                                    <City>{data.city.toUpperCase()}</City>
                                    <Phone>TEL: {data.telephone}</Phone>
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