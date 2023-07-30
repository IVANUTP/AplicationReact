import React from "react";
import "../Estilos/header.css"
import Logo from "../imagenes/logo.png";


const Header=()=>
{
    return(
    <div className="encab">
        <h1 className="title">Free-Code-Camp<img className="logo" src={Logo} alt="logo"/>   </h1>  
    </div>
    );
}

export default Header;