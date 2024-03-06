import styled from 'styled-components';

const Container = styled.span`
    width: 360px;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 72px;

    background-image: url("https://res.cloudinary.com/dejj8n6g7/image/upload/v1709153497/2024/MazeConstructions/logo-principal7_um67mr.svg");    
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;

    grid-row: 1;

    @media(max-width: 375px) { 
        width: 160px;
        height: 80px;          
        margin-left: 28px;
        align-self: start;
    }
`;

const Logo = () => {
    return (
        <Container></Container>
    );
};

export { Logo }