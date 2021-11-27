import Button from "../../components/Boton/Button";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";

const CreatePet = () => {

    const HandleCreatePet = (c) => {
        c.preventDefault()
        const name = c.target.name.value;
        const animal = c.target.animal.value;
        const breed = c.target.breed.value;
        console.log(name);
        console.log(animal);
        console.log(breed);
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
                                    name='animal'
                                    placeholder="Cual es tu tipo de animalito"
                                    required />
                            </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    type='text'
                                    name='breed'
                                    placeholder="Cual es tu Raza"
                                    required />
                            </label>
                        </div>
                    </div>
                    <Button type="onSubmit">Registralo</Button>
            </form>
        </>
    )
};

export default CreatePet