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
    margin-bottom: 28px;

    @media(max-width: 425px) { 
        width: 60px;
        height: 80px;          
        margin-left: 28px;
        align-self: start;

        margin-right: 28px;
        margin-bottom: 28px;
    }
`;

const Icon = styled.span`
    width: 52px;
    height: 32px;    
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;  
    margin-right: 12px;  
`;

const Text = styled.h3`
    font-size: 20px;
    margin: 0;
    color: #E7E7DD;
`;


const Language = ({clickON, selectLanguage}) => {
    return (
        <Container onClick={() => clickON()}>
            {selectLanguage === "ES" ? 
                <Icon style={{backgroundImage: `url(${"/public/guatemalaGT.png"})`}}/> : 
                <Icon style={{backgroundImage: `url(${"/public/united-statesUS.png"})`}}/>
            }
            {selectLanguage === "ES" ? 
                <Text>ES</Text> : 
                <Text>EN</Text>
            }
            
        </Container>
    );
};

export { Language };