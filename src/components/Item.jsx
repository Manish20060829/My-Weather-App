import useIcon from "../hooks/useIcon"

function Item({iconcode, time, temp, apparenttemp }){

    const [  source  ] = useIcon(iconcode);


    return(
        <div className = "houritem">
        <p className="hourtimetext">{time}</p>
        <img
        className= "houritemimg"
        src = { source?.src }
        
        />
        <p className="hourtemp">{Math.round(temp)}<span className="celsius3"> °C</span></p>
        <p className="hourapptemp">{"Feels like " + Math.round(apparenttemp)}</p>
                
        </div>


    )

}

export default Item