import React,{useEffect, useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ButtonPrimary from "../../Components/ButtonPrimary";
import {Container, Header,Footer,ClientsList, HeaderButton, Title, Form, Buttons} from './styles';
import LogoutIcon from '@mui/icons-material/Logout';
import { goLogin } from "../../Routes/Coordinator";
import {tokenValidationURL, getClientsURL,createClientURL,deleteClientURL} from "../../Constants/apiEndpointsURL"
import useRequestData from "../../Hooks/useRequestData";
import useForm from "../../Hooks/useForm"
import { FilledInput, FormControl, InputLabel, Modal} from "@mui/material";
import { Box } from "@mui/system";
import CardClient from '../../Components/CardClient'
import moment from 'moment';
import PersonAddIcon from '@mui/icons-material/PersonAdd';


const Home=()=>{
    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    const [changeData,setChageData] = useState('true')
    const [modalOpen,setModalOpen] = useState(false)
    const {form,onChange,cleanInputs} = useForm({
        name:"",
        cpf:"",
        rg:"",
        birthdate:"",
        phone:""
    })

    useEffect(()=>{checkToken();},[])

   const checkToken = async()=>{
    let isValid = false
    if(!token){   
        goLogin(navigate)
    }
    try{
       isValid = await axios.get(tokenValidationURL(token)) 
    }catch(error) {
        isValid = false
        console.log(error.message)
    }   
    if(!isValid){   
        console.log('token invalido')
      goLogin(navigate)
    }
   } 

    const handleLogout = () =>{
        localStorage.removeItem('token')
        goLogin(navigate)
    }

    const handleDeleteClient =async(cpf)=>{
        const headers = {
            headers:{
                auth:token
            }
        }
        await axios.delete(deleteClientURL(cpf),headers)
        setChageData(!changeData)
    }

    const handleAddClient = ()=>{
        setModalOpen(!modalOpen)
    }

    const handleCreateClient =async (e)=>{
        e.preventDefault()
        try {
            const headers = {
                headers:{
                    auth:token
                }
            }
            await axios.post(createClientURL,form,headers)
        } catch (error) {
            alert("Erro ao cadastrar Cliente!")
            console.log(error)
        }
    } 

    const [data] = useRequestData(getClientsURL,changeData,token)

    const renderClients = data && data.map((client)=>{
        const date = moment(client.birthdate).format('DD/MM/YYYY')
        return <CardClient 
                key={client.cpf}
                name={client.name} 
                cpf={client.cpf}
                rg={client.rg}
                birthdate={date}
                phone={client.phone}
                deleteClient={()=>{handleDeleteClient(client.cpf)}}
                token={token}
                setChangeData={setChageData}
                changeData={changeData}
                />

    })

  return (
   <Container>
        <Header>
            <HeaderButton>
                <ButtonPrimary 
                    children="Cadastrar"
                    onClick={handleAddClient}
                    endIcon={<PersonAddIcon/>}
                />
            </HeaderButton>
            <Title>
                <h1>Controle de Clientes</h1>
            </Title>
            <HeaderButton>
                <ButtonPrimary 
                    children="Logout"
                    onClick={handleLogout}
                    endIcon={<LogoutIcon/>}
                />
            </HeaderButton> 
           
          
           
        </Header>

        <ClientsList>
            {renderClients && renderClients}
        </ClientsList>

        <Modal  
            open={modalOpen}
            onClose={()=>setModalOpen(false)}>
            <Box sx={modalStyle}>
                <Form>
                    <FormControl fullWidth  variant="filled">
                        <InputLabel>Nome Completo</InputLabel>
                        <FilledInput
                            name="name"
                            value={form.name}
                            onChange={onChange}
                            required
                        />
                    </FormControl>  
                    <FormControl fullWidth  variant="filled">
                        <InputLabel>CPF (apenas números)</InputLabel>
                        <FilledInput
                            name="cpf"
                            value={form.cpf}
                            onChange={onChange}
                            required
                        />
                    </FormControl>  
                    <FormControl fullWidth  variant="filled">
                        <InputLabel>RG (apenas números)</InputLabel>
                        <FilledInput
                            name="rg"
                            value={form.rg}
                            onChange={onChange}
                            required
                        />
                    </FormControl>  
                    <FormControl fullWidth  variant="filled">
                        <InputLabel>Data de nascimento (yyyy-mm-dd)</InputLabel>
                        <FilledInput
                            name="birthdate"
                            value={form.birthdate}
                            onChange={onChange}
                            required
                        />
                    </FormControl>  
                    <FormControl fullWidth  variant="filled">
                        <InputLabel>Telefone (ex.: +5511989898989)</InputLabel>
                        <FilledInput
                            name="phone"
                            value={form.phone}
                            onChange={onChange}
                            required
                    />
                    </FormControl>
                    <Buttons>
                        <ButtonPrimary
                            children="ADICIONAR CLIENTE"
                            type="submit"
                            onClick={(event)=>handleCreateClient(event)}
                        /> 
                    </Buttons>
                </Form>
            </Box>
        </Modal>
       
        <Footer>
            <h4>Desenvolvido por: Gabriel Antunes</h4>
        </Footer>
   </Container>
  );
}

export default Home;

//Config Modal

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    height:700,
    bgcolor:'white',
    boxShadow: 2,
    p: 2,
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
    borderRadius:"20px"
  };

  