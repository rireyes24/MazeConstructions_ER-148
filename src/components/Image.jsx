import { styled } from "styled-components";

const Container = styled.img`    
    min-width: 320px;
    max-width: 420px;
    height: 280px;
    border-radius: 13px;
    object-fit: cover;
    
    align-self: center;
    justify-self: center;

    -webkit-box-shadow: 3px 2px 18px -3px #1b1b1b;
    -moz-box-shadow: 3px 2px 18px -3px #1b1b1b;
    box-shadow: 3px 2px 18px -3px #1b1b1b;
`;

const Image = (props) => {
    return(
        <Container                         
            src={props.url || ''} 
            alt={props.name || 'Maze Constructions'} 
            style={
                {
                    width: props.width || '420px', 
                    height: props.height || '280px',
                    borderRadius: props.borderRadius || '18px', 
                }
            } 
        />
    )
};

export { Image };