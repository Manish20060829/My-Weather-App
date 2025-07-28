import { useEffect, useState } from "react"
import Item from "./Item"




function Hourly({ weatherdata }){

const [ time , settime ] = useState([]);
const [ index , setIndex ] = useState(0);

useEffect(() => { 

let newarray = weatherdata?.hourly?.time?.map((value) => {

  return value.split("T")

 

})



}, [weatherdata])

useEffect(() => {
let d = new Date();
let hours = d.getHours();

let month = (d.getMonth() + 1)

if(month < 10) {

month = "0" + month;

}


if(hours < 10){
  hours = "0" + hours + ":00"
}

else{
  hours = hours + ":00"

}



let date = d.getFullYear() + "-" + month + "-" + d.getDate();

console.log(date)
console.log(hours)

const num = time.findIndex((value) => { 

  return (value[0].equals(date) && value[1].equals(hours))
  

})

setIndex(num);


}, [time])

useEffect(() => {
  console.log(index)
}, [index])




return(
    <div id="hourcontainer">

      <p id = "hourheading">Hourly</p> 
      <div id = "hourlist">
      
       
      </div>
        
    </div>

)



}

export default Hourly