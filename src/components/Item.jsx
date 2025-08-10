import useIcon from "../hooks/useIcon"

function Item({iconcode, time, temp, apparenttemp, type, percipatationpercent }){

    const [  source  ] = useIcon(iconcode);


    return(
        <div className = {"item-list-" + type}>
        <p className="timetext">{time}</p>
        <img
        className= "itemimg"
        src = { source?.src }
        
        />
        <p className="temp">{Math.round(temp)}<span className="celsius3"> °C</span></p>
        <p className="rainpercent">{ "💧" + percipatationpercent + "%"} </p>
        <p className="apptemp">{"Feels like " + Math.round(apparenttemp)}</p>
                
        </div>


    )

}

export default Item