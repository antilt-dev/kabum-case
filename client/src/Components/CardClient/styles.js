import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    height:240px;
    background-color:rgba(0,0,0,.7);
    border-radius:10px;
    padding:10px 20px;
    gap:5px;
    display:flex;
    flex-direction:row;
    justify-content:flex-start;
    box-shadow: 5px 5px 15px black;
    
    &:hover{
        div button{
                filter:opacity(100%);
            }
    }
`;

export const Personal = styled.div`
    width:25%;
    min-width:350px;
    height:100%;
    padding: 0 3px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    border-right: 3px solid rgba(0,0,0,.4);

    h2{
        color: rgba(0,0,0,.7)
    }
`;


export const Addresses = styled.div`
    width:75%;
    min-width:350px;
    height:100%;
    padding: 0 3px;
    display:flex;
    flex-direction:column;
    overflow-y:scroll;
        scrollbar-width: none;
        -ms-overflow-style: none; 
        &::-webkit-scrollbar{
            width:0;
            height:0;
        }

    h2{
        color: rgba(0,0,0,.7)
    }

`;

export const Buttons = styled.div`
    width:100%;
    max-height:20px;
    display:flex;
    align-items:center;
    justify-content:flex-end;
    gap:20px;
    padding:0 5%;

    button{
        border:none;
        font-size:18px;
        cursor: pointer;
        background-color:transparent;
        color:rgba(0,0,0,.8);

        &:hover{
            text-decoration:underline;
            transform:scale(1.05)
        }
    }
`;

export const Address = styled.div`
    width:50%;
    min-width:350px;
    max-width:50%;
    height:100%;
    padding: 0 3px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    border-right: 3px solid rgba(0,0,0,.4);
    
    h3{
        color: rgba(0,0,0,.7)
    }
    div:nth-child(1){
        width:100%;
        display:flex;
        align-items:center;
        justify-content:space-between;
        padding: 0 5%;

        button{
        border:none;
        font-size:18px;
        cursor: pointer;
        background-color:transparent;
        color:rgba(0,0,0,.8);

        &:hover{
            text-decoration:underline;
            transform:scale(1.05)
        }
    }

    }
`;

export const Form = styled.form`
        max-width:500px;
        max-height:80%;
        border:1px solid #2196f3;
        border-radius:20px;
        padding:50px 30px;
        background-color:white;
        div{
            margin-top:10px;
        }
`;
