import { useState } from "react";
import { useNavigate } from "react-router";
import Button from "../../components/Boton/Button";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import PetCard from "../../components/PetCard/PetCard";
import Search from "../../components/Search/Search";
import UserCard from "../../components/UserCard/UserCard";

const UserPage = () => {
    
    const [User, setUser] = useState([]);
    const [Loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const userLocal = JSON.parse(localStorage.getItem('user'));
    const navigate = useNavigate();
    let userData = userLocal;

    const HandleRediretion = () =>{
        navigate('/register/pet');
    };
    
    return(
        <>
        <Header/>
        <NavBar/>
        <div>
            <UserCard
            id={userData.id}
            name={userData.name} 
            surname={userData.surName}
            phoneNumber={userData.phoneNumber}
            email={userData.email}
            />
            <Button onClick={()=>HandleRediretion()}>Resgistra tu nueva mascota aqui</Button>
            <Search/>
            <PetCard/>
        </div>
        
        </>
    )
};

export default UserPage 