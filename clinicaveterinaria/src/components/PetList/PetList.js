
import PetCard from "../PetCard/PetCard";

const PetList = (props) =>{
    
    const {pet} = props

    return(
        <div>
            {pet.map(pet => <PetCard
            key={pet.id}
            pet={pet}
            />)}
        </div>
    )
};

export default PetList