import React from "react";
import { BrowserRouter, Route,Routes ,Link} from "react-router-dom";
//import { library } from "@fortawesome/fontawesome-free";
//import { fas } from '@fortawesome/free-solid-svg-icons';
//import { fab } from '@fortawesome/free-brands-svg-icons';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Home from "../paginas/home";
import Calculadora from "../paginas/calculadora";
import NotFound from "../paginas/notFund";
import CalcularVacunas from "../paginas/calcularVacunas";
import "../Estilos/navegacion.css"

const Ruta=()=>
{
    return(
        <div>
            <>
            
            <BrowserRouter>
         
                <nav className="navbar navbar-expand-lg bg-secondary ">
                    <div className="container-fluid">
                       <a class="navbar-brand text-white" href="#">Test-Cont   </a>
                       <button class="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                           <span class="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                            <ul class="navbar-nav  " >
                                <li class="nav-item"><a class="nav-link active  "aria-current="page" ><Link class="nav-link active text-white "aria-current="page"  to="/">Home</Link> </a></li>
                                <li class="nav-item"><a class="nav-link"><Link class="nav-link text-white" to="/Calculs">Calculadora</Link> </a></li>
                                <li class="nav-item"><a class="nav-link"><Link class="nav-link text-white" to="/Vacunas">Vacunas</Link> </a></li>                                
                            </ul>
                        </div>
                        
                    </div>           
                </nav>
                
                <hr/>
                <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Calculs" element={<Calculadora/>}/>
                <Route path="/Vacunas" element={<CalcularVacunas/>}/> 
                <Route path="*" element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
            </>
         
        </div>
    );
}
export default Ruta;