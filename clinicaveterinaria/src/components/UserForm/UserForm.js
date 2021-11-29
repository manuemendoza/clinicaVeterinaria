// import { useState } from "react";
// import { addToken } from "../../services/actions/addToken";
// import { ApiConsumer } from "../../services/ApiConsumer/ApiConsumer";
// import store from "../../services/store/store";


// const UserForm = (props) => {

//     const [Loading, setLoading] = useState(false); //esto hay que mejorar a lo mejor hacerlo por el state
//     const [Error, setError] = useState(false); //esto tambien 
    
//     const HandleCreateUser = async (d) => {
//         d.preventDefault();
//         setLoading(true)
//         const name = d.target.name.value;
//         const surName = d.target.surname.value;
//         const email = d.target.email.value;
//         const telephone = d.target.telephone.value;
//         const password= d.target.password.value;
//         const tokenLocal = localStorage.getItem('token');

//         try {
//             if (tokenLocal) {

//                 console.log('esto puede funcionar');
//                 // const resUpdte = await ApiConsumer.CreateUser(name, surName, email, telephone, password);
//                 // const resultLogin= await ApiConsumer.loginUser(email, password);
//                 // let token = resultLogin.token;
//                 // let user = resultLogin.user;
//                 // localStorage.setItem('token', token);            
//                 // localStorage.setItem('user', JSON.stringify(user));            
//                 // store.dispatch(addToken(token));
            
//             } else {

//                 const res = await ApiConsumer.CreateUser(name, surName, email, telephone, password);
//                 const resultLogin= await ApiConsumer.loginUser(email, password);
//                 let token = resultLogin.token;
//                 let user = resultLogin.user;
//                 localStorage.setItem('token', token);            
//                 localStorage.setItem('user', JSON.stringify(user));            
//                 store.dispatch(addToken(token));
            
//             }
//         } catch (error) {
//             alert(error);
//             setError(true);
//             setLoading(false);
//         }

//     }
//     return(
//         <>
//         <form onSubmit={(d) => HandleCreateUser(d)} className="form">
//                     <div>{props.legend}</div>
//                     <div>
//                         <div>
//                             <label className="text">
//                                 <input
//                                     type='text'
//                                     name='name'
//                                     placeholder="Nombre"
//                                     required />
//                             </label>
//                         </div>
//                         <div>
//                             <label>
//                                 <input
//                                     type='text'
//                                     name='surname'
//                                     placeholder="Escribe aqui tu apellido"
//                                     required />
//                             </label>
//                         </div>
//                         <div>
//                             <label>
//                                 <input
//                                     type='email'
//                                     name='email'
//                                     placeholder="Escribe aqui tu email"
//                                     required />
//                             </label>
//                         </div>
//                         <div>
//                             <label>
//                                 <input
//                                     type='tel'
//                                     name='telephone'
//                                     placeholder="Telefono de contacto"
//                                     required />
//                             </label>
//                         </div>
//                         <div>
//                             <label>
//                                 <input
//                                     type='password'
//                                     name='password'
//                                     placeholder="Escribe aqui tu contraseña"
//                                     required />
//                             </label>
//                         </div>
//                     </div>
//                     <div>{props.button}</div>
//             </form>
//         </>
//     )
// };

// export default UserForm