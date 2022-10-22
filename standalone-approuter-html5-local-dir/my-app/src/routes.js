import React from "react";

import { BrowserRouter as Router, Routes as BrowserRoute, Route, Outlet, Link } from "react-router-dom";

import Home from "./Home";
import Sobre from "./Sobre";
import Usuario from "./Usuario";

const Routes = () => {
   return(
    
   <BrowserRoute>
      <Route index element={<Home />} />
      <Route path="index.html" element={<Home />} />
      <Route path="sobre" element={<Sobre />} />
      <Route path="usuario" element={<Usuario />} />
      <Route path="*" element={<h1>NOT FOUND</h1>} />
   </BrowserRoute>
  
   )
}

export default Routes;