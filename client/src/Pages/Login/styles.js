import styled from 'styled-components';

export const Container = styled.div`
    width:480px;
    max-width:99%;
    min-height:500px;
    background-color:rgba(255,255,255,0.7);
    backdrop-filter:blur(20%);
    border-radius:10px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap:20px;
    h1{
        color:#1976d2 ;
    }
`; 

export const LoginForm = styled.form`
    width:250px;
    display:flex;
    flex-direction:column;
    gap:20px;
    
    input{
        width:100%;
    }
`;