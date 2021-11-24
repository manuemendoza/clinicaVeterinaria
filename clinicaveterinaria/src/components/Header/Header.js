import Address from "../Address/Address";
import Logo from "../Logo/Logo";
import OpeningHours from "../OpeningHours/OpeningHours";
import './Header.scss';

const Header = () => {
    return(
        <>
        <div className="header">
            <Logo/>
            <div className="header_address">
                <Address className="header_address-address"/>
                <OpeningHours/>
            </div>
        </div>
        </>
    )
};

export default Header;