import Button from '../../components/Boton/Button';
import store from '../../services/store/store';
import { addToken } from '../../services/actions/addToken';
import { useNavigate } from 'react-router';
import HeaderCompani from '../../components/Header/HeaderCompani';
import NavBarAdmin from '../../components/NavBarAdmin/NavBarAdmin';
import { ApiAdmin } from '../../services/ApiConsumer/ApiAdmin';



const Login = (props) => {
    
    const navigate = useNavigate()

    const redirectionToAdmin = () => {
        navigate("/admin");
    };

    const handleSendData = async (e) => {

        e.preventDefault()
        let email = e.target.email.value;
        let password = e.target.password.value;

        try {
        
            const res = await ApiAdmin.loginAdmin(email, password);
            let token = res.token;
            let adminData = res.admin;
            console.log(token);
            console.log(adminData);      
            
            store.dispatch(addToken(token));
            localStorage.setItem('token', token);
            localStorage.setItem('admin', JSON.stringify(adminData));
            
            if (token.length > 0) { 
                setTimeout(() => { 
                    redirectionToAdmin();
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
        <HeaderCompani/>
        <NavBarAdmin/>
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
                            Password: 
                            <input
                                type='password'
                                name='password'
                                placeholder="Password"
                                required />
                        </label>
                    </div>
                </div>
                <Button type="submit" >Entra</Button>
            </form>
        </div>
        </>
    )
}
export default Login