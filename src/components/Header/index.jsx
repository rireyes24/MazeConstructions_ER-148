import { styled } from "styled-components";
import { Welcome } from "../Welcome";
import { Logo } from "../Logo";
import { Language } from "../Language";
import { Navigator } from "../Navigator";

const Background = styled.header`
    width: 100%;
    height: 528px;

    background-image: url("https://res.cloudinary.com/dejj8n6g7/image/upload/v1708531295/2024/MazeConstructions/banner-con-filtro_igdmpx.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;

const Container = styled.div`
    width: 100%;
    height: 528px;
    background-color: #12121365;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 30% 40% 30%;
    justify-content: center;
    align-items: center;

  
`;

const Box = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Header = () => {
    return (
       <Background>
         <Container>
            <Box>
                <Logo></Logo>
                <Language></Language>
            </Box>
            <Welcome>Somos tu socio confiable en Los Santos, Vice City & Liberty City.</Welcome>            
            <Navigator></Navigator>
        </Container>
       </Background>
    );
};

export { Header };