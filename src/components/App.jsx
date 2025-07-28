import { useState } from 'react'
import { useEffect } from 'react';
import Nav from './Nav'
import Todaydisplay from './Todaydisplay';
import Hourly from './Hourly';
import useFetch from "../hooks/useFetch"


function App() {

 
const [ cords, Setcords] = useState([]);
const [ weatherdata ] = useFetch(`https://api.open-meteo.com/v1/forecast?latitude=${cords[0]}&longitude=${cords[1]}&daily=apparent_temperature_mean&minutely_15=temperature_2m&hourly=weather_code&current=temperature_2m&current=weather_code&current=apparent_temperature&current=wind_speed_10m,precipitation&current=relative_humidity_2m&timezone=auto`)

  
   




  return (
    <>
   <Nav 
   Setcords = { Setcords }
   />
   <div id = "hourlyandtodaycontainer">
   <Todaydisplay 
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
