import { styled } from "styled-components";

const Container = styled.img`
    width: 450px;
    height: 280px;
    border-radius: 18px;
    object-fit: cover;
`;

const Image = (props) => {
    return(
        <Container src={props.url} alt={props.name} />
    )
};

export { Image };