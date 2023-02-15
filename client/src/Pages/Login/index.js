import React, {useState } from "react";
import {Container} from './styles';
import axios from 'axios';
import { loginURL } from "../../Constants/urlsAPI";
import useForm from "../../Hooks/useForm";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PasswordIcon from '@mui/icons-material/Password';
import LoginIcon from '@mui/icons-material/Login';
import { TextField,InputAdornment } from "@mui/material";
import ButtonPrimary from "../../Components/ButtonPrimary";

const Login=()=>{

  const {form,onChange,cleanInputs} = useForm({email:"",password:""})
  const [placeEmail,setplaceEmail] = useState("E-mail")
  const [placePassword,setPlacePassword] = useState("Password")
  const [loginError,setLoginError] = useState(false)


  const onLogin = (event)=>{
    event.preventDefault()
    const body ={
      email:form.email,
      password:form.password
    }
  
    axios.post(loginURL,body)
    .then((res)=>{
      localStorage.setItem("token",res.data.token);
      cleanInputs()
    })
    .catch((err)=>{
      console.log(err.response.data)
      setplaceEmail("check your credentials");
      setPlacePassword("check your credentials");
      cleanInputs()
      setLoginError(true);
    })
    
  }
  return (
   <Container>
      <h1>Login</h1>
    
       
      <TextField
        name="email" 
        onChange={onChange}
        value={form.email}
        placeholder={placeEmail} 
        error={loginError}
        variant="outlined"
        required
        fullWidth
        type="email"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
             <AccountCircleIcon/>
            </InputAdornment>
          ),
        }}
      />
      <TextField 
        name="password"
        onChange={onChange}
        value={form.password}
        placeholder={placePassword} 
        error={loginError}
        variant="outlined"
        required
        fullWidth
        type="password"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
            <PasswordIcon/>
            </InputAdornment>
          ),
        }}
      />
        <ButtonPrimary
          children="LOGIN"
          type="submit"
          onClick={onLogin}
          endIcon={<LoginIcon/>}
        />

   
   </Container>
  );
}

export default Login;