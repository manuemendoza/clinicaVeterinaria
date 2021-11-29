import Button from "../Boton/Button";
import { useState, useEffect } from "react";
import UserForm from "../UserForm/UserForm";
import { ApiConsumer } from "../../services/ApiConsumer/ApiConsumer";
//HandleChangeToUpDate

const UserCard = (props) => {

    const userLocal = JSON.parse(localStorage.getItem('user'));
    const id = userLocal.id;

    const [Update, setUpdate] = useState(false);

    const HandleUpdate = (e) => {
        e.preventDefault();
        setUpdate(false);
    };

    const upDateUser = async (d) => {
        d.preventDefault()
        const name = d.target.name.value;
        const surName = d.target.surname.value;
        const email = d.target.email.value;
        const telephone = d.target.telephone.value;
        const password= d.target.password.value;

        const res = await ApiConsumer.UpDateUser(id, name, surName, email, telephone, password);
        
    };
    // useEffect(() => {
    //     upDateUser()
    // }, [])

    return(
        <>
        <div>
            { Update ?
            <div>
                <h2>Datos Personales:</h2> 
                <p>Nombre: {props.name} </p>
                <p>Apellidos: {props.surname}</p>
                <p>Telefono de Contacto: {props.phoneNumber} </p>
                <p>Email: {props.email} </p>
                <Button onClick={(e) => HandleUpdate(e)}>Actualiza Tus Datos</Button>
            </div> 
            :                
            <form onSubmit={(d) => upDateUser(d)} className="form">
                    <legend className="legend">Por Favor Rellene todos los campos</legend>
                    <div>
                        <div>
                            <label className="text">
                                <input
                                    type='text'
                                    name='name'
                                    placeholder="Nombre"
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    type='text'
                                    name='surname'
                                    placeholder="Escribe aqui tu apellido"
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    type='email'
                                    name='email'
                                    placeholder="Escribe aqui tu email"
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    type='tel'
                                    name='telephone'
                                    placeholder="Telefono de contacto"
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    type='password'
                                    name='password'
                                    placeholder="Escribe aqui tu contraseña"
                                />
                            </label>
                        </div>
                    </div>
                    <Button type="onSubmit">Actualiza tus datos</Button>
            </form>
            }
            
        </div> 
        
        </>
    )
};

export default UserCard




