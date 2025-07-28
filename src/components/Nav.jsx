import useFetch from "../hooks/useFetch"
import { useEffect, useState } from "react"
import SearchDropdown from "./Searchdropdown";


function Nav( { Setcords } ){
    const [city, setCity] = useState("");
    const [displaysearchbox, Setdisplaysearchbox] = useState(false);

    const [debouncecity, Setdebouncecity ] = useState([]);

    const [ data ] = useFetch(`https://photon.komoot.io/api?q=${debouncecity}`);

    const [ cityfilter, Setcityfilter ] = useState([]);

    
    

    

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

    

    return(
        <div className = "mycontainer">
        <h1 id = "title">⛅Weather App</h1>

        <form id = "form" onSubmit={e => e.preventDefault()}
           onFocus={() => Setdisplaysearchbox(true)}
           onBlur={(e) => {
           if (!e.currentTarget.contains(e.relatedTarget)) {
      Setdisplaysearchbox(false);
    }
  }}

            >
        <div className = "searchbar">
        <input
        type = "text"
        id = "searchtext"
        autoComplete= "off"
        placeholder = "Enter city name here"
        value = { city }
        onChange = {(e) => setCity(e.target.value)}
        
        
        />
        <button
        id = "searchbutton"
        
        >
         
        <img 
        id = "glassicon"
        src = "/mglass.png" 
        
        ></img>
        </button>
        </div>  
        <div
        className="box"
        
        >
        { (displaysearchbox && cityfilter.length !== 0) ? <SearchDropdown 

         
         data =     { cityfilter }
         Setcords=  { Setcords }
         setCity =  { setCity }
         Setdisplaysearchbox = { Setdisplaysearchbox }
         
         

         /> : null}
        
         </div>
        </form>
        
        </div>
    )


}

export default Nav