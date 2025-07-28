import { useEffect, useState } from "react"



function SearchDropdown({ data, Setcords, setCity, Setdisplaysearchbox }) {
    
    
   
    


    return(
        <div className="searchcontainer"
        
        
        
        >
        
        {(data).map( (location) => (
        
        <button
        className= "item"
        key = {location.properties.osm_id}
        onClick={(e) => { 
            Setcords([e.target.dataset.lat, e.target.dataset.lon])
            setCity("")
            Setdisplaysearchbox(false)

        }}

        id = {location.properties.osm_id}
        
        data-lat = {JSON.stringify(location.geometry.coordinates[1])}
        data-lon = {JSON.stringify(location.geometry.coordinates[0])}

        >

        
            
        {`${location.properties.name}${location.properties.country  ? "," : "" } ${(location.properties.state  || location.properties.county || "")}${location.properties.state && location.properties.state  ? "," : "" }  ${location.properties.country || ""}`}
        
        
        </button>


        
        
        ))}
        
        
        </div>
    )

}

export default SearchDropdown