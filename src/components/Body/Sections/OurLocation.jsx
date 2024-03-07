import styled from "styled-components";
import { Title } from "../../Title";

const Sections = styled.section`
    width: 100%;
    height: 40vh;
    display: flex;
    flex-direction: column;    
    align-items: center;
`;


const ContainerLocation = styled(Sections)`
    width: 100%;
    height: 660px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 20px 0px;    
    background-color: #EDEDED;
    padding: 34px 0px;

    @media(max-width: 425px) {        
        height: 1160px;
        display: flex;
        flex-direction: column;
        padding: 0px 0px;
    }
`;

const Box = styled.div`
    width: 80%;
    height: 400px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 20% 80% ;

    place-content: center;
    margin-top: 20px;

    @media(max-width: 425px) {        
        height: 1000px;
        display: flex;
        flex-direction: column;
    }
`;

const MiniBox = styled.div`
    width: 300px;
    height: 100%;   
    grid-row: 1 / 2;
    justify-self: center;
    align-self: center;

    @media(max-width: 425px) {        
        display: flex;
        height: 380px; 
        flex-direction: column;
        margin-bottom: 18px;
    }
`;

const MiniBoxData = styled.div`
    width: 300px;
    height: 100%;   
    grid-row: 1 / 2;
    justify-self: center;
    align-self: center;
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


    @media(max-width: 425px) {        
        width: 280px;
        height: 240px;
        margin-bottom: 18px;
        border-radius: 10px;
        margin-top: 20px;
    }
`;

const Location = () => {
    return(
        <ContainerLocation id="section4">
                <Title>Nuestras Ubicaciones</Title>
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