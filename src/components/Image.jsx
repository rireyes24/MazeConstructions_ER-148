import { styled } from "styled-components";

const Container = styled.img`
    width: 300px;
    height: 280px;
    border-radius: 18px;
    object-fit: cover;
    
    align-self: center;
    justify-self: center;
`;

const Image = (props) => {
    return(
        <Container src={props.url} alt={props.name} style={{width: props.width, height: props.height}} />
    )
};

export { Image };