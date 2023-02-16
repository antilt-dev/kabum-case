import styled from 'styled-components';

export const Container = styled.div`
    min-width:750px;
    width:100vw;
    min-height:100vh;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    justify-content:center;
    background-color:white;
 
    
`;


    

export const Header = styled.div`
    padding:0 5%;
    width:100%;
    min-height:12vh;
    max-height:12vh;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    background-color:#fafafa;
    position:fixed;
    top:0;

    img{
        max-width:120px;
    }
`;

export const Title = styled.div`
    max-width:50%;
    max-height:80%;
    display:flex;
    
    h1{
        color:#FF4500;
    }
`;
export const HeaderButton = styled.div`
    width:150px;
    max-width:20%;
    max-height:80%;
`;


export const ClientsList = styled.div`
    width:70vw;
    max-width:100%;
    min-height:calc(83vh);
    display:flex;
    flex-direction:column;
    margin-top:13vh;
    gap:20px;

`;

export const Footer = styled.div`
    min-width:100%;
    max-width:100%;
    min-height:5vh;
    background-color:#fafafa;
    display:flex;
    align-items:center;
    justify-content:center
`;
export const Form = styled.form`
        max-width:500px;
        max-height:80%;
        border:1px solid #2196f3;
        border-radius:20px;
        padding:30px;
        background-color:white;
        div{
            margin-top:10px;
        }
`;
export const Buttons = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:0 10px;
    gap:40px;
    margin-top:30px;
`;


