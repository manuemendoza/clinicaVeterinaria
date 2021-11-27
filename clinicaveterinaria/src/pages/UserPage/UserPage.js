import { useState } from "react";
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

    
    return(
        <>
        <Header/>
        <NavBar/>
        <div>
            <UserCard/>
            <Search/>
            <PetCard/>
        </div>
        
        </>
    )
};

export default UserPage 