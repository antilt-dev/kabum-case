import { TextField } from "@mui/material";
import React from "react";
import {Container} from './styles'

const AddressCard=({onChange,form,editor})=>{
  return (
   <Container>
        <TextField 
            name="country"
            onChange={onChange}
            value={form.country}
            variant="outlined"
            required
            fullWidth
            type="text"
            disabled={editor}
        /> 
        <TextField 
            name="state"
            onChange={onChange}
            value={form.state}
            variant="outlined"
            required
            fullWidth
            type="text"
            disabled={editor}
        /> 
        <TextField 
            name="city"
            onChange={onChange}
            value={form.city}
            variant="outlined"
            required
            fullWidth
            type="text"
            disabled={editor}
        /> 
        <TextField 
            name="zipcode"
            onChange={onChange}
            value={form.zipcode}
            variant="outlined"
            required
            fullWidth
            type="text"
            disabled={editor}
        /> 
        <TextField 
            name="full_address"
            onChange={onChange}
            value={form.full_address}
            variant="outlined"
            required
            fullWidth
            type="text"
            disabled={editor}
        /> 
        
   </Container>
  );
}

export default AddressCard;