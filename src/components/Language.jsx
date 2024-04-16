import styled from 'styled-components';

const Container = styled.button`
    width: 160px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 16px;
    cursor: pointer;
    background-color: transparent;
    border: 3px solid #FFC500;    
    border-radius: 12px;
    grid-row: 1;
    margin-right: 52px;   
    margin-top: 24px; 
    padding: 1%;

    @media(max-width: 425px) { 
        width: 122px;
        height: 48px;
        align-self: center;
        margin-right: 24px;
        font-size: 14px;
        border: 2px solid #FFC500;    
    }
`;

const Icon = styled.span`
    width: 82px;
    height: 32px;    
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;  
    margin-right: 6px;

    @media(max-width: 425px) { 
        width: 64px;
        height: 24px;
        margin-right: 4px;
    }
`;

const Text = styled.p`
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 1px;
    text-align: right;
    margin: 0;
    color: #ffffff;
    display: flex;
    align-items: center;  
    
    @media(max-width: 425px) { 
        font-size: 14px;
        margin-right: 2px;
    }
`;

const Language = ({clickON, dataLanguage, selectLanguage}) => {
    return (
        <Container onClick={() => clickON()}>
            
            {dataLanguage.prefix === "EN" ? 
                <Icon style={{backgroundImage: `url(${"/united-statesUS.png"})`}}/> :
                (dataLanguage.prefix === "ES" ?
                    <Icon style={{backgroundImage: `url(${"/spainES.png"})`}}/> :
                    <Icon style={{backgroundImage: `url(${"/israelHE.png"})`}}/>
                )
            }
            <Text>{dataLanguage.name}</Text>          
        </Container>
    );
};

export { Language };