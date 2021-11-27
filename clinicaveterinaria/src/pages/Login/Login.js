import React, { useState } from 'react';
import Button from '../../components/Boton/Button';
import { ApiConsumer } from '../../services/ApiConsumer/ApiConsumer';
import store from '../../services/store/store';
import { addToken } from '../../services/actions/addToken';
import { useNavigate } from 'react-router';
import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';


const Login = (props) => {

    // const [auth, setauth] = useState(false)
    // const [Formulario, setFormulario] = useState(true)
    
    const navigate = useNavigate()
    const redirectionToRegister = () => {
        navigate("/register");
    };
    const redirectionToUser = () => {
        navigate("/user");
    };
    
//     //enviamos datos y logeamos al usuario 
    const handleSendData = async (e) => {

        e.preventDefault()
        let email = e.target.email.value;
        let password = e.target.password.value;
        // console.log(email);
        // console.log(password);

        try {

            const res = await ApiConsumer.loginUser(email, password);
            let token = res.token;
            let userData = res.user;
            console.log(token);
            console.log(userData);
            
            store.dispatch(addToken(token));
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(userData));
            
            

            if (token.length > 0) { 
                setTimeout(() => { 
                    redirectionToUser();
                }, 2000);
            } else {   
                console.log(null);
            };

        } catch (error) {
            alert(error, " No entra");
        }

    }

    return (
        <>
        <Header/>
        <NavBar/>
        <div className="Profile">
            <form onSubmit={(e) => handleSendData(e)}> 
                <legend>Bienvenido a PataPata</legend>
                <div>
                    <div>
                        <label>
                            Email: 
                            <input
                                type='email'
                                name='email'
                                placeholder="Escribe aqui tu email"
                                required />
                        </label>
                    </div>
                    <div>
                        <label>
                            Email: 
                            <input
                                type='password'
                                name='password'
                                placeholder="Password"
                                required />
                        </label>
                    </div>
                </div>
                <Button type="submit" >Entra</Button>
                <Button onClick={()=>redirectionToRegister()} >Registrate</Button>
            </form>
            {/* {auth && <Todolist/>}  */}
        </div>
        </>
    )
}
export default Login