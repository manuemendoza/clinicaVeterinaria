import { useNavigate } from "react-router";
import Button from "../Boton/Button";
import "./NavBar.scss"

const NavBar = () =>{
    let navigate = useNavigate()
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
                        <a href="#">Conocenos</a>
                    </li>
                </ul>
            </nav>
            <div>
                <Button onClick={()=>navigate('/login')} >Sing in</Button>
                <Button onClick={()=>navigate('/register')} >Sing up</Button>
            </div>
        </div>
        </>
    )
};

export default NavBar;