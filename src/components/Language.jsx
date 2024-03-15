import styled from 'styled-components';

const Container = styled.button`
    width: 60px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    cursor: pointer;
    background-color: transparent;
    border: none;    
    grid-row: 1;
    margin-right: 72px;   
    margin-top: 24px; 

    @media(max-width: 425px) { 
        width: 52px;
        height: 38px;
        align-self: center;
        margin-right: 24px;
    }
`;

const Icon = styled.span`
    width: 100%;
    height: 100%;    
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;  
`;

const Language = ({clickON, selectLanguage}) => {
    return (
        <Container onClick={() => clickON()}>
            {selectLanguage === "ES" ? 
                <Icon style={{backgroundImage: `url(${"/guatemalaGT.png"})`}}/> : 
                <Icon style={{backgroundImage: `url(${"/united-statesUS.png"})`}}/>
            }          
        </Container>
    );
};

export { Language };