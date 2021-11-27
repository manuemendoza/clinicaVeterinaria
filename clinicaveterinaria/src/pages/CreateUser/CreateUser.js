import { useState } from "react";
import { useNavigate } from "react-router";
import Button from "../../components/Boton/Button";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import { ApiConsumer } from "../../services/ApiConsumer/ApiConsumer";


const CreateUser = () => {

    const [Loading, setLoading] = useState(false); //esto hay que mejorar a lo mejor hacerlo por el state
    const [Error, setError] = useState(false); //esto tambien 

    const navigate = useNavigate()
    
    const HandleCreateUser = async (d) => {
        d.preventDefault();
        setLoading(true)
        const name = d.target.name.value;
        const surName = d.target.surname.value;
        const email = d.target.email.value;
        const telephone = d.target.telephone.value;
        const password= d.target.password.value;
        console.log(surName);

        try {
            let res = await ApiConsumer.CreateUser(name, surName, email, telephone, password);
            console.log(res);
            if (res) {
                navigate('/register/pet');
                setLoading(false);
            }
        } catch (error) {
            alert(error);
            setError(true);
            setLoading(false);
        }

    }
    return(
        <>
        <Header/>
        <NavBar/>

        <form onSubmit={(d) => HandleCreateUser(d)} className="form">
                    <legend className="legend">Por Favor Rellene todos los campos</legend>
                    <div>
                        <div>
                            <label className="text">
                                <input
                                    type='text'
                                    name='name'
                                    placeholder="Nombre"
                                    required />
                            </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    type='text'
                                    name='surname'
                                    placeholder="Escribe aqui tu apellido"
                                    required />
                            </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    type='email'
                                    name='email'
                                    placeholder="Escribe aqui tu email"
                                    required />
                            </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    type='tel'
                                    name='telephone'
                                    placeholder="Telefono de contacto"
                                    required />
                            </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    type='password'
                                    name='password'
                                    placeholder="Escribe aqui tu contraseña"
                                    required />
                            </label>
                        </div>
                    </div>
                    <Button type="onSubmit">Registrarte</Button>
            </form>
        </>
    )
};

export default CreateUser