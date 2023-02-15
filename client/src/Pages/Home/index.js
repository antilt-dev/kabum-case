import React from "react";
import ButtonPrimary from "../../Components/ButtonPrimary";
import {Container, Header,Footer,ClientsList} from './styles';
import LogoutIcon from '@mui/icons-material/Logout';

const Home=()=>{

    const handleLogout = () =>{

    }

    const renderClients = ""

  return (
   <Container>
        <Header>
            <img src="" alt="Logo"/>
            <h1>Controle de Clientes</h1>
            <ButtonPrimary 
            children="Logout"
            type="submit"
            onClick={handleLogout}
            endIcon={<LogoutIcon/>}
            />
        </Header>
        <ClientsList>
            {renderClients}
        </ClientsList>
        <Footer>
            <h3>Desenvolvido por: Gabriel Antunes</h3>
        </Footer>
   </Container>
  );
}

export default Home;