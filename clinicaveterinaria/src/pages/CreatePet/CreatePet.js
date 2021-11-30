import { useNavigate } from "react-router";
import Button from "../../components/Boton/Button";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import { ApiConsumer } from "../../services/ApiConsumer/ApiConsumer";

const CreatePet = () => {
    const navigate = useNavigate();

    const HandleCreatePet = async (c) => {
        
        c.preventDefault()
        
        const name = c.target.name.value;
        const animal = c.target.kind.value;
        const breed = c.target.breed.value;
        const gender = c.target.gender.value;
        const information = c.target.information.value;
        

        try {
            const user =JSON.parse(localStorage.getItem('user'));
            const idUser = user.id;
            const res = await ApiConsumer.CreatePet(name, gender, animal, breed, information, idUser);
            setTimeout(() => {
                navigate('/user');
            }, 2000)
            
            console.log(res);
        } catch (error) {
            alert(error);
            // setError(true);
            // setLoading(false);
        }
    };

    return(
        <>
        <Header/>
        <NavBar/>
        <form onSubmit={(c) => HandleCreatePet(c)} className="form">
                    <legend className="legend">Dejanos que cuidemos de tu mascota.</legend>
                    <div>
                        <div>
                            <label className="text">
                                Nombre:
                                <input
                                    type='text'
                                    name='name'
                                    placeholder="Nombre"
                                    required />
                            </label>
                        </div>
                        <div>
                            <label>
                                Macho
                                <input type="radio" name="gender" value="Macho" checked/>
                                Hembra
                                <input type="radio" name="gender" value="Hembra"/>
                            </label>
                        </div>
                        <div>
                            <label>
                                Especie:
                                <input
                                    type='text'
                                    name='kind'
                                    placeholder="Que Especie es tu animalito"
                                    required />
                            </label>
                        </div>
                        <div>
                            <label>
                                Raza:
                                <input
                                    type='text'
                                    name='breed'
                                    placeholder="Cual es tu Raza"
                                    required />
                            </label>
                        </div>
                        <div>
                            <label>
                                información adicional:
                                <textarea 
                                name="information"
                                placeholder="cuentanos Sobre tu mascota ejemplo alergias, humor en el veterinario, etc.." 
                                id="" 
                                cols="30" 
                                rows="10"/>
                            </label>
                        </div>
                    </div>
                    <Button type="onSubmit">Registralo</Button>
            </form>
        </>
    )
};

export default CreatePet