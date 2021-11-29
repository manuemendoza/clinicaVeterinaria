import Button from "../Boton/Button";


const UserCard = (props) => {
    return(
        <>
        <div>
            <div>
            <h2>Datos Personales:</h2> 
            <p>Nombre: {props.name} </p>
            <p>Apellidos: {props.surname}</p>
            <p>Telefono de Contacto: {props.phoneNumber} </p>
            <p>Email: {props.phoneNumber} </p>
            </div>
            <Button>Actualiza Tus Datos</Button>
        </div>  
        </>
    )
};

export default UserCard




