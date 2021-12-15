import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Button from "../../components/Boton/Button";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import PetCard from "../../components/PetCard/PetCard";
import PetList from "../../components/PetList/PetList";
import Search from "../../components/Search/Search";
import UserCard from "../../components/UserCard/UserCard";
import { ApiConsumer } from "../../services/ApiConsumer/ApiConsumer";

const UserPage = () => {
    
    const [Text, setText] = useState(null);
    const [Pets, setPets] = useState([])

    const userLocal = JSON.parse(localStorage.getItem('user'));
    const navigate = useNavigate();
    let userData = userLocal;

    const HandleRediretion = () =>{
        navigate('/register/pet');
    };
    
    const handleSearch = (e) => {
        e.preventDefault();
        let text = e.target.value
        setText(text)
        hadlegetData(text)      
    };
    
    const hadlegetData = async (text) => {
        const petsData = await ApiConsumer.getPets(text);
        setPets(petsData)
    };

    useEffect(() => {
        hadlegetData();
    }, []);

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
            <Search
            handleSearch={handleSearch}
            />
            <PetList
                pet={Pets}
            />
        </div>
        
        </>
    )
};

export default UserPage 