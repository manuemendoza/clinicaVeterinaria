import { useNavigate } from "react-router";
import Button from "../Boton/Button";
import "./NavBarAdmin.scss"
import store from "../../services/store/store";
import { useEffect, useState } from "react";
import { deleteToken } from "../../services/actions/deleteToken";
import { ApiConsumer } from "../../services/ApiConsumer/ApiConsumer";
import { Link } from "react-router-dom";

const NavBarAdmin = (props) =>{
    
    const [Login, setLogin ] = useState(null);
    const token = localStorage.getItem('token');
    
    
    let navigate = useNavigate();
    
    useEffect(()=>{
        if (token) {
            setLogin(token)
        } else {
            store.subscribe(()=>{
                setLogin(store.getState().token)
            });
        }
        
    },[]);
    
    const handlendDeleteToken = async (r) =>{
        
        r.preventDefault()
        
        store.dispatch(deleteToken(token));
        const res = await ApiConsumer.logout(token);
        console.log(res);
        localStorage.setItem('token', []);
        localStorage.setItem('user', [])
        setLogin(null);
        
        console.log('mejora esto puto');
        
    };

    return(
        <>
        <div className="navbar_conteiner--admin">
            <nav className="navbar">
                <ul className="navbar_link">
                    <li> <Link to="#">Conocenos</Link>
                        <ul className="navbar_ul">
                            <li><Link to="#">Quienes Somos</Link></li>
                            <li><Link to="#">Nuestras Instalaciones</Link></li>
                        </ul>
                    </li>
                    <li> <Link to="#">Servicios</Link>
                        <ul className="navbar_ul" >
                            <li><Link to="#">Cirugia General</Link></li>
                            <li><Link to="#">Medicina preventiva</Link></li>
                            <li><Link to="#">Medicina Interna</Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link to="#">Contactanos</Link>
                    </li>
                </ul>
            </nav>
            
            <div className="navbar_button">
                {(Login) ? <div><Button onClick={ (r) => handlendDeleteToken(r)}>Logout</Button> <Button onClick={()=>navigate("/admin")} >Ir a mi perfil</Button> </div> : <div> <Button onClick={()=>navigate('/login')} className="navbar_button-in">Pidenos una Cita</Button> <Button className="navbar_button-in" onClick={() => navigate('/admin/login')} >Login Admin</Button></div>}

            </div>
        </div>
        </>
    )
};

export default NavBarAdmin;