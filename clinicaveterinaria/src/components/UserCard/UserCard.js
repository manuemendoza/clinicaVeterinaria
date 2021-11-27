import Button from "../Boton/Button";


const UserCard = (props) => {
    return(
        <>
        <div>
            <div>
            <h2>Datos Personales:</h2> 
            <p>Nombre: Ejemplo</p>
            <p>Apellidos: Ejemplo</p>
            <p>Telefono de Contacto: Ejemplo</p>
            <p>Email: Ejemplo</p>
            </div>
            <Button>Actualiza Tus Datos</Button>
        </div>  
        </>
    )
};

export default UserCard




