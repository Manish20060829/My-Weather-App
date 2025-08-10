import { useEffect, useState } from "react"
import Item from "./Item"




function Hourly({ weatherdata }){

const [hourlyarray, sethourlyarray] = useState([]);


useEffect(() => {

  const displaytimearray = [
  "12am", "1am", "2am", "3am", "4am", "5am", "6am", "7am", "8am", "9am", "10am", "11am",
  "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm"
];

const militarytimearray = [
  "00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00",
  "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"
];
  let array = [];

  for( let i = 1; i < 6; i++){

    let time = weatherdata?.hourly?.time[i]
    let timesplit = time?.split("T")
    let index = militarytimearray.findIndex((value) => {

      return (value === timesplit?.[1])

    })

    let displaytime = displaytimearray[index]
    
    let displayiconcode = weatherdata?.hourly?.weather_code[i]

    let displaytemp = weatherdata?.hourly?.temperature_2m[i]

    let displayapparenttemp = weatherdata?.hourly?.apparent_temperature[i]

    array.push({
      time: displaytime,
      iconcode: displayiconcode,
      temp: displaytemp,
      apparenttemp: displayapparenttemp,
      id: i

    });

    sethourlyarray(array);


    

  }
}, [weatherdata])




return(
    <div id = "hourcontainer">
    <p id = "hourheading">Hourly</p> 
    <div id="hourlistcontainer">

      
      <div id = "hourlist">
      {hourlyarray.map((value) => (

      <Item
      
      iconcode = { value.iconcode }
      time = { value.time }
      key = { value.id }
      temp = {  value.temp }
      apparenttemp= { value.apparenttemp }
      type = "hour"


      /> 



      ))
         }
      </div>
        
    </div>
    </div>

)



}

export default Hourly