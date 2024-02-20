import { styled } from "styled-components";
import { Welcome } from "../Welcome";
import { Logo } from "../Logo";
import { Language } from "../Language";

const Container = styled.header`
    width: 100%;
    height: 528px;
    background-color: #da6868;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 30% 40% 30%;
    justify-content: center;
    align-items: center;

    background-image: url("https://res.cloudinary.com/dejj8n6g7/image/upload/v1708404119/2024/MazeConstructions/banner-provisional_k9icdk.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;

const Box = styled.div`
    width: 100%;
    height: 100%;
    background-color: #4d35354e;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Header = () => {
    return (
        <Container>
            <Box>
                <Logo></Logo>
                <Language></Language>
            </Box>
            <Welcome>Maze Constructions, su socio confiable en Los Santos.</Welcome>
        </Container>
    );
};

export { Header };