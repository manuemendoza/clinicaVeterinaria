import Button from "../Boton/Button";

const ContacForm = () => {
    return(
        <div>
            <h3>Si lo deseas dejanos tus datos</h3>
            <form>
                <legend>Rellene todo los datos</legend>
                <div>
                    <div>
                        Nombre:
                        <label className="text">
                            <input
                            type='text'
                            name='name'
                            placeholder="Nombre"
                            required />
                    </label>
                </div>
                <div>
                    Apellido:
                    <label>
                        <input
                            type='text'
                            name='surname'
                            placeholder="Escribe aqui tu apellido"
                            required />
                    </label>
                </div>
                <div>
                    Email:
                    <label>
                        <input
                            type='email'
                            name='email'
                            placeholder="Escribe aqui tu email"
                            required />
                    </label>
                </div>
                <div>
                    Telefono:
                    <label>
                        <input
                            type='tel'
                            name='telephone'
                            placeholder="Telefono de contacto"
                            required />
                    </label>
                </div>
                <div>
                    <label>
                        información adicional:
                        <textarea 
                        name="information"
                        placeholder="" 
                        id="" 
                        cols="30" 
                        rows="10"/>
                    </label>
                </div>
            </div>
            <Button>Enviar</Button>
            </form>
        </div>
    )
};

export default ContacForm