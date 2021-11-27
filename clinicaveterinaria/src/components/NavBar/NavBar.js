import { useNavigate } from "react-router";
import Button from "../Boton/Button";
import "./NavBar.scss"
import store from "../../services/store/store";
import { useEffect, useState } from "react";
import { deleteToken } from "../../services/actions/deleteToken";
const NavBar = () =>{
    
    const [Login, setLogin] = useState(null);
    let navigate = useNavigate();
    
    useEffect(()=>{
        
        store.subscribe(()=>{
            setLogin(store.getState().token)
        });

    },[]);
    
    // const handlendDeleteToken = (r) =>{
    //     //     r.preventDefault()
    //     //     store.dispatch(deleteToken());
    //     //     store.subscribe(()=>{setLogin(store.getState().token)});
    //     console.log('mejora esto puto');
    // };


    return(
        <>
        <div className="navbar_conteiner">
            <nav className="navbar">
                <ul className="navbar_link">
                    <li> <a href="#">Conocenos</a>
                        <ul className="navbar_ul">
                            <li><a href="#">Quienes Somos</a></li>
                            <li><a href="#">Nuestras Instalaciones</a></li>
                            <li><a href="#">Trabaja con nosotros</a></li>
                        </ul>
                    </li>
                    <li> <a href="#">Servicios</a>
                        <ul className="navbar_ul" >
                            <li><a href="#">Cirugia General</a></li>
                            <li><a href="#">Medicina preventiva</a></li>
                            <li><a href="#">Medicina Interna</a></li>
                        </ul>
                    </li>
                    <li> <a href="#">Campaña</a>
                        <ul className="navbar_ul" >
                            <li><a href="#">Higien Dental</a></li>
                            <li><a href="#">Esterilizacion</a></li>
                            <li><a href="#">Tos de las Perreras</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Contactanos</a>
                    </li>
                </ul>
            </nav>
            
            <div className="navbar_button" >
            {(Login) ? <Button /*onClick={ (r) => handlendDeleteToken(r)}*/  >Logout</Button>  : <Button onClick={()=>navigate('/login')} className="navbar_button-in">Pidenos una Cita</Button>}
                
            </div>
        </div>
        </>
    )
};

export default NavBar;