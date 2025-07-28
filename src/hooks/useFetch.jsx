import { useState, useEffect } from "react";

export default function useFetch(url){
    
    const [ data, setData ] = useState('');


    useEffect(() => {
    async function getData(){
    try {
    const response = await fetch(url);
    
    
    if(!response.ok){
        throw new Error(`Response status: ${response.status}`);
    } 
    const result = await response.json();
            
    setData(result)
    }
    catch(err){
    console.log(err.message);
    }


    }
getData();

},[url])

    return [ data ]


}