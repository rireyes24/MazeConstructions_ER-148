import styled from 'styled-components';

const Container = styled.span`
    width: 280px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 72px;
    margin-top: 24px; 

    background-image: url("https://res.cloudinary.com/dejj8n6g7/image/upload/v1709153497/2024/MazeConstructions/logo-principal7_um67mr.svg");    
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;

    grid-row: 1;

    @media(max-width: 425px) { 
        width: 180px;
        height: 42px;          
        margin-left: 28px;
        align-self: center;
    }
`;

const Logo = ({height}) => {
    return (
        <Container style={{height: height}}></Container>
    );
};

export { Logo }