import React,{useState} from "react";

import {Container, Personal, Addresses, Buttons, Address} from './styles';
import RowTable from '../Rowtable'
import useRequestData from "../../Hooks/useRequestData";
import { getAddressURL } from "../../Constants/apiEndpointsURL";

const CardClient=(props)=>{
    const [changeData, setChangeData] = useState(false)

    const [data, isLoading,error] = useRequestData(getAddressURL(props.cpf),changeData,props.token)

    const renderAddress = data && data.map((item,index)=>{
        console.log(data)
        return <Personal key={item.id}> 
                    <h3>Endereço número {index+1}</h3>
                    <RowTable title="Country:" text={item.country}/>
                    <RowTable title="State:" text={item.state}/>
                    <RowTable title="City:" text={item.city}/>
                    <RowTable title="CEP:" text={item.zipcode}/>
                    <RowTable title="Endereço:" text={item.full_address}/>
                </Personal>
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
                <button onClick={props.editClient}>editar</button>
                <button onClick={props.deleteClient}>excluir</button>
            </Buttons>
        </Personal>
        <Addresses>
            <h2> Endereços</h2>
            {renderAddress && renderAddress}
        </Addresses>
        
   </Container>
  );
}

export default CardClient;