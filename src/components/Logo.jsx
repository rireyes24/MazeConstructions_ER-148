import styled from 'styled-components';

const Container = styled.span`
    width: 450px;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;

    background-image: url("https://res.cloudinary.com/dejj8n6g7/image/upload/v1708450789/2024/MazeConstructions/logo-principal_wsedny.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
`;

const Logo = () => {
    return (
        <Container></Container>
    );
};

export { Logo }