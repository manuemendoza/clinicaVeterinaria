import mapPoint from '../../img/map-solid (2).png';
import './Address.scss'

const Address = () => {
    return(
        <>
        <div className='addres' >
            <img src={mapPoint} className="addres_img"></img>
            <div className="addres_container">
                <p className="addres_text--title">Dirección</p>
                <p className="addres_text--description">Avd. Name, nºxx, 28901 <br/> Madrid, Madrid. </p>
            </div>
        </div>
        </>
    )
};

export default Address