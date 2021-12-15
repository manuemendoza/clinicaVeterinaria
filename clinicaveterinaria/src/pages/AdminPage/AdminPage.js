import ContacForm from "../../components/ContactForm/ContactForm";

import HeaderCompani from "../../components/Header/HeaderCompani";
import NavBarAdmin from "../../components/NavBarAdmin/NavBarAdmin"


const AdminPage = (props) =>{
    return(
        <div className="adminpage">
            <HeaderCompani/>
            <NavBarAdmin/>
            <h2>Trabaja con nosotros</h2>
            <h3>¿que te ofrecemos?</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Quisque cursus, tellus id sagittis rutrum, justo elit porttitor felis, sit amet porta lectus ipsum porta purus. 
                Etiam vitae accumsan ligula, at rutrum neque. Vestibulum accumsan urna vel varius maximus. Morbi eu ex est. 
                Phasellus at turpis convallis leo rutrum ultrices eu ac orci. Aliquam efficitur purus velit, ac dictum sapien porttitor eget. 
                Nulla vehicula ligula non quam rutrum bibendum. Nunc ante justo, dapibus vitae consequat vel, varius non ipsum. 
                Curabitur quis sapien nisl. Vestibulum euismod malesuada tortor, sit amet elementum justo tincidunt vel. Sed vulputate nulla elit, 
                ut blandit neque cursus id. Cras id dui nisi. Nunc accumsan nulla eu porttitor rhoncus. 
                Vivamus viverra rhoncus lacus at semper. Proin ultricies at erat nec pretium.
                ue, eu lacinia orci euismod et.
            </p>
            <ContacForm/>
        </div>
    )
};

export default AdminPage
