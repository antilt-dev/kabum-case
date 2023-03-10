import React from "react";
import {Container} from './styles';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from "../../Pages/Login";
import Home from "../../Pages/Home";
import Page404 from "../../Pages/Page404";

const Router=()=>{
  return (
   <Container>
    <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route index element= {<Home/>}/>
            <Route path="*" element={<Page404/>}/>
        </Routes>
    </BrowserRouter>
   </Container>
  );
}

export default Router;