import { useEffect } from "react"
import useIcon from "../hooks/useIcon"


function Todaydisplay( { weatherdata, currentcityname } ){

    
    const [  source  ] = useIcon((weatherdata?.current?.weather_code ?? {src: ""}));

    useEffect(() => {
    console.log(weatherdata) }, [weatherdata])

    
   

    
    return(<div className = "Todaycontainer">
        <p id = "locationname">{ currentcityname }</p>

        <div className = "Todaycontainerstats">
           
           {
            source?.src?.length ? 
            (<img 
           src = { source.src }
           id = "todayicon"
           
           />)
            : null
            }
           <p id = "currenttemp">{  Math.round(weatherdata?.current?.temperature_2m) ? ((Math.round(weatherdata?.current?.temperature_2m) ?? "")) : null } <span className = "celsius">  { (weatherdata?.current?.temperature_2m ? "°C" : "" )} </span>  </p> 
           
            { (weatherdata !== "")    ?

           (<p id = "weatherstats">

                
               { "Wind Speed: " + weatherdata?.current?.wind_speed_10m + " km/h"  }
               <br />
               { "Percipitation: " + weatherdata?.current?.precipitation + "mm" }
               
               <br />
               { "Humidity: " + weatherdata?.current?.relative_humidity_2m + "%" }
               
          
            </p>)  : null }
            <p id = "apparenttemp">
                
                <span id = "conditions">
                { source?.description }
                </span>
                <br />
        
                { 
                Math.round(weatherdata?.current?.apparent_temperature) ? (weatherdata?.current?.apparent_temperature ? "Feels like " : " " ) + Math.round(weatherdata?.current?.apparent_temperature ?? "") : null  }
                </p>
           

        </div>
        </div>

    )

}

export default Todaydisplay