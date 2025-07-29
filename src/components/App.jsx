import { useState } from 'react'
import { useEffect } from 'react';
import Nav from './Nav'
import Todaydisplay from './Todaydisplay';
import Hourly from './Hourly';
import useFetch from "../hooks/useFetch"


function App() {

 
const [ cords, Setcords] = useState([]);
const [ weatherdata ] = useFetch(`https://api.open-meteo.com/v1/forecast?latitude=${cords[0]}&longitude=${cords[1]}&daily=apparent_temperature_mean&minutely_15=temperature_2m&hourly=weather_code&current=temperature_2m&current=weather_code&current=apparent_temperature&current=wind_speed_10m,precipitation&current=relative_humidity_2m&timezone=auto`)

const [city, setCity] = useState("");

const [debouncecity, Setdebouncecity ] = useState([]);

const [ data ] = useFetch(`https://photon.komoot.io/api?q=${debouncecity}`);
const [ cityfilter, Setcityfilter ] = useState([]);

const [currentcityname, setcurrentcityname ] = useState("");

useEffect(() => {

      Setcityfilter((data.features || [] ).filter((f) =>  { return f.properties.type === "city"|| f.properties.type === "district"} ))

    }, [data])

useEffect(() => {

      console.log(data)

    }, [data])


useEffect(() => { 
      const id = setTimeout(() => {
      Setdebouncecity(city)
    }, 1000);       
    return () => clearTimeout(id); }, [city]);

  
   




  return (
    <>
   <Nav 
   Setcords = { Setcords }
   city = { city }
   cityfilter = { cityfilter }
   setCity= { setCity }
   setcurrentcityname = {setcurrentcityname}
   />
   <div id = "hourlyandtodaycontainer">
   <Todaydisplay 
   currentcityname = { currentcityname }
   weatherdata = { weatherdata }
   />
   <Hourly
    weatherdata = { weatherdata }
   
   />
   </div>
   
   </>
   
  )
}

export default App
