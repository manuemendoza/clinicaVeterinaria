import React, { useState } from 'react';
// import { AddToken } from '../../services/action/addToken/AddToken';
// import useDispatch from 'react-redux'
import Button from '../../components/Boton/Button';
import Home from '../Home/Home';
import { APIConsumer } from '../../service/ApiConsumer/APIConsumer';

const Login = (props) => {

    const [auth, setauth] = useState(false)
    const [Formulario, setFormulario] = useState(true)
    
//     const dispatch = useDispatch()
    


//     //enviamos datos y logeamos al usuario 
    const handleSendData = async (e) => {

        e.preventDefault()
        let email = e.target.email.value
        let password = e.target.password.value
        console.log(email);
        console.log(password);

        try {

            // let res = await APIConsumer.loginUser(email, password);
//             let token = res.token
//             console.log(token);
//             dispatch(AddToken(token));
//             (token.length > 0) ?
//                 setTimeout(() => { 
//                     setauth(true) 
//                     setFormulario(false)
//                 }, 2000)
//             : console.log(null)
            

        } catch (error) {
//             alert(error, " hola mundo");
        }

    }

    return (
        <>
        <Home/>
        <div className="Profile">
            {/* {Formulario &&  */}
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
                <Button type="submit">Sing in</Button>
                <Button type="submit">Sing up</Button>
            </form>
            {/* } */}
            {/* {auth && <Todolist/>} */}
        </div>
        </>
    )
}
export default Login