import Clock from '../../img/time-five-regular-24 (1).png'
const OpeningHours = () => {
    return(
        <>
        <div className="addres">
            <img src={Clock} className="addres_img"></img>
            <div className="addres_container">
                <p className="addres_text--title" >Horario de Apertur</p>
                <p className="addres_text--description">10:00-22:00h</p>
            </div>
        </div>
        </>
    )
};

export default OpeningHours