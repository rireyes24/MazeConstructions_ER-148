import { styled } from "styled-components"

const Container = styled.nav`
    min-width: 640px;
    height: 40px;
    background-color: black;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 0px 30px;

    align-self: center;
    justify-self: center;

    @media(max-width: 425px) {  
        width: 312px;
        min-width: 0px;
        height: 80px; 
        border-radius: 16px;
        padding: 0px 12px;
    }
`;

const ContainerList = styled.ul`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 0;
    padding: 0;

    @media(max-width: 425px) {  
        display: flex;        
        flex-wrap: wrap;
        align-items: center;
    }
`;

const ListItem = styled.li`
    height: 100%;
    color: white;    
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    transform: scale(1);
    animation: transform 0.5s linear;

    &:hover {
        transform: scale(1.09);
        animation: transform 0.5s linear;
    }

    @media(max-width: 425px) {  
        font-size: 14px;
        height: 32px;
    }
`;

const Button = styled.button`
    height: 100%;
    color: white;
    background-color: transparent;
    border: none;
    font-size: 16px;
    cursor: pointer;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;

    @media(max-width: 425px) {  
        height: 32px;
    }
`;

export { Container, ContainerList, ListItem, Button }