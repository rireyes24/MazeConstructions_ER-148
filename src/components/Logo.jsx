import styled from 'styled-components';

const Container = styled.span`
    width: 420px;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 52px;

    background-image: url("https://res.cloudinary.com/dejj8n6g7/image/upload/v1708450789/2024/MazeConstructions/logo-principal_wsedny.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;

    grid-row: 1;
`;

const Logo = () => {
    return (
        <Container></Container>
    );
};

export { Logo }