import styled from 'styled-components';

export const Container = styled.div`
    min-width:100%;
    max-width:100%;
    min-height:100vh;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    
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
export const Logout = styled.div`
    width:150px;
    max-width:20%;
    max-height:80%;
`;


export const ClientsList = styled.div`
    min-width:100%;
    max-width:100%;

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


