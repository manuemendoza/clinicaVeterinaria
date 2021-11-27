import Button from "../../components/Boton/Button";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import { ApiConsumer } from "../../services/ApiConsumer/ApiConsumer";

const CreatePet = () => {

    const HandleCreatePet = (c) => {
        c.preventDefault()
        const name = c.target.name.value;
        const animal = c.target.kind.value;
        const breed = c.target.breed.value;
        const gender = c.target.gender.value;
        const information = c.target.information.value;
        console.log(name);
        console.log(animal);
        console.log(breed);
        console.log(gender);
        console.log(information);
        ApiConsumer.CreatePet(name, animal, breed, gender, information)
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