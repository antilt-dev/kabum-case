import React,{useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ButtonPrimary from "../../Components/ButtonPrimary";
import {Container, Header,Footer,ClientsList, Logout, Title} from './styles';
import LogoutIcon from '@mui/icons-material/Logout';
import { goLogin } from "../../Routes/Coordinator";
import logo from "../../assets/kabum-icon.png"
import AddressCard from  "../../Components/AddressCard"

const Home=()=>{
    const navigate = useNavigate()

    useEffect(()=>{checkToken()},[])

   const checkToken = async()=>{
    const token = localStorage.getItem('token')
    if(!token){   
        goLogin(navigate)
    }
    const isValid = await axios.get(`http://localhost:3003/token-validation/${token}`)
    if(!isValid){   
      goLogin(navigate)
    }
   } 

    const handleLogout = () =>{
        localStorage.removeItem('token')
        goLogin(navigate)
    }

    const renderClients = ""

  return (
   <Container>
        <Header>
            <img src={logo} alt="Logo"/>
            <Title>
                <h1>Controle de Clientes</h1>
            </Title>
            
            <Logout>
                <ButtonPrimary 
                    children="Logout"
                    type="submit"
                    handleCLick={handleLogout}
                    endIcon={<LogoutIcon/>}
                />
            </Logout>
            
        </Header>
        <ClientsList>
            {renderClients}
            <AddressCard onChange="onChange" form="form" editor="edtor"/>
        </ClientsList>
        <Footer>
            <h4>Desenvolvido por: Gabriel Antunes</h4>
        </Footer>
   </Container>
  );
}

export default Home;