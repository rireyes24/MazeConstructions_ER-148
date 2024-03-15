import { styled } from "styled-components"

const Container = styled.nav`
    min-width: 640px;
    height: 62px;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: #F6BD00;
    align-self: center;
    justify-self: center;

    @media(max-width: 425px) {  
        width: 100%;
        min-width: 0px;
        height: 100px; 
        padding: 0px 12px;
    }
`;

const ContainerList = styled.ul`
    width: 96%;
    max-width: 860px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 0;

    @media(max-width: 425px) {  
        display: flex;        
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-evenly;
    }
`;

const ListItem = styled.li`
    width: 140px;
    height: 100%;
    background-color: #F6BD00;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.5s ease-in-out;

    &:hover {
        transform: scale(1.12);
        transition: transform 0.5s ease;
    }

    @media(max-width: 425px) {  
        font-size: 14px;
        width: 120px;
        height: 32px;
    }
`;

const Button = styled.button`
    width: 100%;
    height: 100%;
    color: #FFFFFF;
    background-color: transparent;
    border: none;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 1px;
    cursor: pointer;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;

    @media(max-width: 425px) {  
        height: 32px;
        font-size: 14px;
    }
`;


const Line = styled.div`
    width: 2px;
    height: 60%;
    background-color: #FFFFFF;

    @media(max-width: 425px) {  
        display: none;
    }
`;

export { Container, ContainerList, ListItem, Button, Line }