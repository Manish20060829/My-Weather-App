import { useEffect,useState } from "react";
import Item from "./Item";


function Daily({ weatherdata }){

    const [dailyarray, setdailyarray] = useState([]);
    
    useEffect(() =>
    
    {
    const daycode = [
 0, 1, 2, 3, 4, 5, 6
];

const daywords = [
  "Monday",   
  "Tuesday",   
  "Wednesday", 
  "Thursday",  
  "Friday",   
  "Saturday",  
  "Sunday"     
];
    
    let array = [];


    for( let i = 0; i < 7; i++){
        
    const date = new Date(weatherdata?.daily?.time[i])
    let day = date.getDay()
    let index = daycode.findIndex((value) => {

      return (value === day)

    })

    let displayday = daywords[index]
    
    let displayiconcode = weatherdata?.daily?.weather_code[i]

    let displaytemp = weatherdata?.daily?.temperature_2m_mean[i]

    let displayapparenttemp = weatherdata?.daily?.apparent_temperature_mean[i]

    array.push({
      day: displayday,
      iconcode: displayiconcode,
      temp: displaytemp,
      apparenttemp: displayapparenttemp,
      id: i

    });

    

    }
    setdailyarray(array);
}, [weatherdata])

    return(

    <div id = "daycontainer">
    <p id = "dailyheading">Daily</p>
    <div id = "dailylistcontainer">
    <div id = "dailylist">
      {dailyarray.map((value) => (

      <Item
      
      iconcode = { value.iconcode }
      time = { value.day }
      key = { value.id }
      temp = {  value.temp }
      apparenttemp= { value.apparenttemp }
      type = "day"


      /> 



      ))
         }
      </div>
      </div>

    
    </div>
    )



}

export default Daily