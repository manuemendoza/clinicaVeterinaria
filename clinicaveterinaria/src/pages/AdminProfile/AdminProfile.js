import AdminCard from "../../components/AdminCard/AdminCard";
import HeaderCompani from "../../components/Header/HeaderCompani";
import NavBarAdmin from "../../components/NavBarAdmin/NavBarAdmin"

const AdminProfile = (props) =>{
    const adminLocal = JSON.parse(localStorage.getItem('admin'));
    let adminData = adminLocal
    return(
        <div className="adminpage">
            <HeaderCompani/>
            <NavBarAdmin/>
            <h2>Bienvenio {`${adminData.name}`}</h2>
            <AdminCard
            id={adminData.id}
            name={adminData.name} 
            surname={adminData.surName}
            phoneNumber={adminData.phoneNumber}
            email={adminData.email}
            />
            
        </div>
    )
};

export default AdminProfile
