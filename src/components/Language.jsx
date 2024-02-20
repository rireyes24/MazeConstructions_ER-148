import styled from 'styled-components';

const Container = styled.button`
    width: 100px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    cursor: pointer;
    background-color: transparent;
    border: none;
    
    grid-row: 1;
    margin-right: 42px;
`;

const Icon = styled.span`
    width: 40px;
    height: 40px;
    background-image: url("https://res.cloudinary.com/dejj8n6g7/image/upload/v1708452365/2024/MazeConstructions/flag-spain_uaag52.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;  
    margin-right: 6px;  
`;

const Text = styled.h3`
    font-size: 18px;
    margin: 0;
`;


const Language = () => {
    return (
        <Container>
            <Icon />
            <Text>ES</Text>
        </Container>
    );
};

export { Language };