const NavBar = () =>{
    return(
        <>
            <p>Aqui va un navbar</p>
            <ul>
                <li> <a href="#">Conocenos</a>
                    <ul>
                        <li><a href="#">Quiens Somos</a></li>
                        <li><a href="#">Nuestras Instalaciones</a></li>
                        <li><a href="#">Trabaja con nosotros</a></li>
                    </ul>
                </li>
                <li> <a href="#">Servicios</a>
                    <ul>
                        <li><a href="#">Cirugia General</a></li>
                        <li><a href="#">Medicina preventiva</a></li>
                        <li><a href="#">Medicina Interna</a></li>
                    </ul>
                </li>
                <li> <a href="#">Campaña</a>
                    <ul>
                        <li><a href="#">Higien Dental</a></li>
                        <li><a href="#">Esterilizacion</a></li>
                        <li><a href="#">Tos de las Perreras</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#">Conocenos</a>
                </li>
            </ul>
        </>
    )
};

export default NavBar;