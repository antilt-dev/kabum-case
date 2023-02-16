import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, InputAdornment } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PasswordIcon from '@mui/icons-material/Password';
import LoginIcon from '@mui/icons-material/Login';
import axios from 'axios';

import { loginURL } from "../../Constants/urlsAPI";
import { goHome } from "../../Routes/Coordinator";
import useForm from "../../Hooks/useForm";
import ButtonPrimary from "../../Components/ButtonPrimary";
import { Container, LoginForm } from './styles';


const Login=()=>{
  const navigate = useNavigate()
  const {form,onChange,cleanInputs} = useForm({email:"",password:""})
  const [placeEmail,setplaceEmail] = useState("E-mail")
  const [placePassword,setPlacePassword] = useState("Password")
  const [loginError,setLoginError] = useState(false)

  useEffect(()=>{checkToken()},[])

   const checkToken = async()=>{
    const token = localStorage.getItem('token')
    const isValid = await axios.get(`http://localhost:3003/token-validation/${token}`)
    if(isValid){
      goHome(navigate)
    }
   } 
    
    

  const handleLogin = (event)=>{
    
    event.preventDefault()
    const body ={
      email:form.email,
      password:form.password
    }

    axios.post(loginURL,body)
    .then((res)=>{
      localStorage.setItem("token",res.data.token);
      cleanInputs()
      goHome(navigate)

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
    
      <LoginForm>
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
          onClick={handleLogin}
          endIcon={<LoginIcon/>}
        />
      </LoginForm> 
      

   
   </Container>
  );
}

export default Login;