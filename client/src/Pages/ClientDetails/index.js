import { TextField } from "@mui/material";
import React, { useState } from "react";
import useForm from "../../Hooks/useForm";
import useRequestData from "../../Hooks/useRequestData";
import {Addresses, Container, PersonalData} from './styles'

const ClientDetails=()=>{
    const [data,isLoading] = useRequestData("urlGetTravels","token");
    const {editor,setEditor} = useState(false)

    const {form,onChange,cleanInputs} = useForm(data)

  return (
   <Container>
        <PersonalData>
            <TextField 
                name="name"
                onChange={onChange}
                value={form.name}
                variant="outlined"
                required
                fullWidth
                type="text"
                disabled={editor}
            />
            <TextField 
                name="cpf"
                onChange={onChange}
                value={form.cpf}
                variant="outlined"
                required
                fullWidth
                type="text"
                disabled={editor}
            />
            <TextField 
                name="rg"
                onChange={onChange}
                value={form.rg}
                variant="outlined"
                required
                fullWidth
                type="text"
                disabled={editor}
            />
            <TextField 
                name="birthdate"
                onChange={onChange}
                value={form.birthdate}
                variant="outlined"
                required
                fullWidth
                type="text"
                disabled={editor}
            />
            <TextField 
                name="phone"
                onChange={onChange}
                value={form.phone}
                variant="outlined"
                required
                fullWidth
                type="text"
                disabled={editor}
            />
        </PersonalData>
        <Addresses>
            {/* {renderAddress} */}
        </Addresses>
   </Container>
  );
}

export default ClientDetails;