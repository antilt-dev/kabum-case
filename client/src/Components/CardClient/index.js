import React,{useState} from "react";
import axios from "axios";
import {Container, Personal, Addresses, Buttons, Address, Form} from './styles';
import RowTable from '../Rowtable'
import useRequestData from "../../Hooks/useRequestData";
import { clientUpdateURL, deleteAddressURL, getAddressURL, getClientsURL, updateAddressURL } from "../../Constants/apiEndpointsURL";
import { Box, FilledInput, FormControl, InputLabel, Modal } from "@mui/material";
import ButtonPrimary from "../ButtonPrimary";
import useForm from "../../Hooks/useForm";

const CardClient=(props)=>{
    const [changeData, setChangeData] = useState(false)
    const [data] = useRequestData(getAddressURL(props.cpf),changeData,props.token)
    const [modalOpenClient,setModalOpenClient] = useState(false)
    const [modalOpenAddress,setModalOpenAddress] = useState(false)
    const {form,onChange,cleanInputs} = useForm({})
    const [identifier,setIdentifier] = useState("")
    

    const headers = {
        headers:{
            auth:props.token
        }
    }

    const handleDeleteAddress = async(id) =>{
        try {
            await axios.delete(deleteAddressURL(id),headers)
            setChangeData(!changeData)

        } catch (error) {
            alert('Não foi possível excluir este endereço!')
        }
    }

    const handleUpdateAddress = async (e)=>{
        e.preventDefault()
        try {
            await axios.put(updateAddressURL(identifier),form,headers)
            cleanInputs()
            setModalOpenAddress(false)
            setChangeData(!changeData)
            props.setChangeData(!props.changeData)
        } catch (error) {
            alert('Não foi possível atualizar o endereço!')
            console.log(error.message)
        }
    }
    const handleUpdateClient = async (e)=>{
        e.preventDefault()

        try {
            await axios.put(clientUpdateURL(identifier),form,headers)
            cleanInputs()
            setModalOpenClient(false)
            props.setChangeData(!props.changeData)
        } catch (error) {
            alert('Não foi possível atualizar o cliente!')
            console.log(error.message)
        }
    }

    const editClient = (cpf) =>{
        setIdentifier(cpf)
        setModalOpenClient(true)
    }

    const editAddress = (id)=>{
        setIdentifier(id)
        setModalOpenAddress(true)
    }

    const renderAddress = data && data.map((item,index)=>{
        return <Address key={item.id}> 
                    <div>
                        <h3>Endereço {index+1}</h3>
                        <button onClick={()=>handleDeleteAddress(item.id)}>excluir</button>
                        <button onClick={()=>editAddress(item.id)}>alterar</button>
                    </div>
                    <RowTable title="País:" text={item.country}/>
                    <RowTable title="Estado:" text={item.state}/>
                    <RowTable title="Cidade:" text={item.city}/>
                    <RowTable title="CEP:" text={item.zipcode}/>
                    <RowTable title="Endereço:" text={item.full_address}/>
                </Address>
    })
  return (
   <Container key={props.cpf}>
        <Personal>
            <h2> Dados Pessoais </h2>
            <RowTable title="Name:" text={props.name}/>
            <RowTable title="CPF:" text={props.cpf}/>
            <RowTable title="RG:" text={props.rg}/>
            <RowTable title="Data de nascimento:" text={props.birthdate}/>
            <RowTable title="Telefone:" text={props.phone}/>
            <Buttons>
                <button onClick={props.createAddress}>adicionar endereço</button>
                <button onClick={()=>editClient(props.cpf)}>editar</button>
                <button onClick={props.deleteClient}>excluir</button>
            </Buttons>
        </Personal>
        <Addresses>
            {renderAddress && renderAddress}
        </Addresses>
{/* MODAL DE ATUALIZAÇÃO DAS INFORMAÇÕES DO CLIENTE  */}
        <Modal  
            open={modalOpenClient}
            onClose={()=>setModalOpenClient(false)}>
            <Box sx={modalStyle}>
                <Form>
                    <FormControl fullWidth  variant="filled">
                        <InputLabel>Nome Completo</InputLabel>
                        <FilledInput
                            name="name"
                            value={form.name}
                            onChange={onChange}
                        />
                    </FormControl>   
                    <FormControl fullWidth  variant="filled">
                        <InputLabel>RG (apenas números)</InputLabel>
                        <FilledInput
                            name="rg"
                            value={form.rg}
                            onChange={onChange}
                        />
                    </FormControl>  
                    <FormControl fullWidth  variant="filled">
                        <InputLabel>Data de nascimento (yyyy-mm-dd)</InputLabel>
                        <FilledInput
                            name="birthdate"
                            value={form.birthdate}
                            onChange={onChange}
                        />
                    </FormControl>  
                    <FormControl fullWidth  variant="filled">
                        <InputLabel>Telefone (ex.: +5511989898989)</InputLabel>
                        <FilledInput
                            name="phone"
                            value={form.phone}
                            onChange={onChange}
                    />
                    </FormControl>
                    <Buttons>
                        <ButtonPrimary
                            children="Enviar Alterações"
                            type="submit"
                            onClick={(event)=>handleUpdateClient(event)}
                        /> 
                    </Buttons>
                </Form>
            </Box>
        </Modal>

{/* MODAL DE ATUALIZAÇÃO DOS ENDEREÇOES */}

        <Modal  
            open={modalOpenAddress}
            onClose={()=>setModalOpenAddress(false)}>
            <Box sx={modalStyle}>
                <Form>
                    <FormControl fullWidth  variant="filled">
                        <InputLabel>País</InputLabel>
                        <FilledInput
                            name="country"
                            value={form.country}
                            onChange={onChange}
                        />
                    </FormControl>   
                    <FormControl fullWidth  variant="filled">
                        <InputLabel>Estado</InputLabel>
                        <FilledInput
                            name="state"
                            value={form.state}
                            onChange={onChange}
                        />
                    </FormControl>  
                    <FormControl fullWidth  variant="filled">
                        <InputLabel>City(yyyy-mm-dd)</InputLabel>
                        <FilledInput
                            name="city"
                            value={form.city}
                            onChange={onChange}
                        />
                    </FormControl>  
                    <FormControl fullWidth  variant="filled">
                        <InputLabel>CEP</InputLabel>
                        <FilledInput
                            name="zipcode"
                            value={form.zipcode}
                            onChange={onChange}
                    />
                    </FormControl>
                    <FormControl fullWidth  variant="filled">
                        <InputLabel>Endereço</InputLabel>
                        <FilledInput
                            name="full_address"
                            value={form.full_address}
                            onChange={onChange}
                    />
                    </FormControl>
                    <Buttons>
                        <ButtonPrimary
                            children="Enviar Alterações"
                            type="submit"
                            onClick={(event)=>handleUpdateAddress(event)}
                        /> 
                    </Buttons>
                </Form>
            </Box>
        </Modal>
   </Container>
   

//    MODAL DE ATUALIZAÇÃO DOS ENDEREÇOS
   
  );
}

export default CardClient;

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