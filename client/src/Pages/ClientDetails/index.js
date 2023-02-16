import { TextField } from "@mui/material";
import React from "react";
import useForm from "../../Hooks/useForm";
import {Addresses, Container, PersonalData} from './styles'

const Client=()=>{
    const [data,isLoading] = useRequestData(urlGetTravels);

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
            />
            <TextField 
                name="cpf"
                onChange={onChange}
                value={form.cpf}
                variant="outlined"
                required
                fullWidth
                type="text"
            />
            <TextField 
                name="rg"
                onChange={onChange}
                value={form.rg}
                variant="outlined"
                required
                fullWidth
                type="text"
            />
            <TextField 
                name="birthdate"
                onChange={onChange}
                value={form.birthdate}
                variant="outlined"
                required
                fullWidth
                type="text"
            />
            <TextField 
                name="phone"
                onChange={onChange}
                value={form.phone}
                variant="outlined"
                required
                fullWidth
                type="text"
            />
        </PersonalData>
        <Addresses>

        </Addresses>
   </Container>
  );
}

export default ClientDetails;