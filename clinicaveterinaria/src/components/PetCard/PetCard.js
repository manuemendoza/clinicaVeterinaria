import { useNavigate } from "react-router";
import Button from "../Boton/Button";

const PetCard = (props) => {
    const  { pet } = props
    const navigate = useNavigate()
    const redirection = () =>{navigate('/appoinment')}
    return(
        <>
        <div>
            <div>
                <h2>Nombre: {/*{pet.name}*/}</h2>
                <p>genero: {/*{pet.gender}*/}</p>
                <p>Especie: {/*{pet.breed}*/}</p>  
                <p>Raza: {/*{pet.kind}*/}</p>
            </div>
            <Button onClick={() => redirection()} >Pide una cita</Button> 
        </div>
        </>
    )
};

export default PetCard