import Address from "../Address/Address";
import LogoCompani from "../Logo/LogoCompani";
import OpeningHours from "../OpeningHours/OpeningHours";
import './Header.scss';

const HeaderCompani = () => {
    return(
        <>
        <div className="header">
            <LogoCompani/>
            <div className="header_address">
                <Address className="header_address-address"/>
                <OpeningHours/>
            </div>
        </div>
        </>
    )
};

export default HeaderCompani;