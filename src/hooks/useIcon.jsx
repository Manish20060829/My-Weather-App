import { useState, useEffect } from "react";





export default function useIcon( code ) {

    

   const [ source, Setsource ] = useState({  });

   const weatherIcons = [
  { code: 0, description: "Clear sky", src:  "/export/wi_clear-day.svg"  },

  { code: 1, description: "Clear sky", src: "/export/wi_clear-day.svg" },
  { code: 2, description: "Partly cloudy", src: "/export/wi_partly-cloudy-day.svg" },
  { code: 3, description: "Overcast", src: "/export/wi_cloudy.svg" },

  { code: 45, description: "Fog", src: "/export/wi_fog.svg" },
  { code: 48, description: "Depositing rime fog", src: "/export/wi_fog.svg" },

  { code: 51, description: "Light Drizzle", src: "/export/wi_drizzle.svg" },
  { code: 53, description: "Moderate Drizzle", src: "/export/wi_drizzle.svg" },
  { code: 55, description: "Heavy Drizzle", src: "/export/wi_drizzle.svg" },

  { code: 56, description: "Light Freezing Drizzle", src: "/export/wi_sleet.svg" },
  { code: 57, description: "Heavy Freezing Drizzle", src: "/export/wi_sleet.svg" },

  { code: 61, description: "Slight Rain", src: "/export/wi_rain.svg" },
  { code: 63, description: "Moderate Rain", src: "/export/wi_rain.svg" },
  { code: 65, description: "Heavy Rain", src: "/export/wi_rain.svg" },

  { code: 66, description: "Light Freezing Rain", src: "/export/wi_sleet.svg" },
  { code: 67, description: "Heavy Freezing Rain", src: "/export/wi_sleet.svg" },

  { code: 71, description: "Slight Snowfall", src: "/export/wi_snow.svg" },
  { code: 73, description: "Moderate Snowfall", src: "/export/wi_snow.svg" },
  { code: 75, description: "Heavy Snowfall", src: "/export/wi_snow.svg" },

  { code: 77, description: "Snow grains", src: "/export/wi_hail.svg" },

  { code: 80, description: "Slight Rain showers", src: "/export/wi_rain.svg" },
  { code: 81, description: "Moderate Rain showers", src: "/export/wi_rain.svg" },
  { code: 82, description: "Violent Rain showers", src: "/export/wi_rain.svg" },

  { code: 85, description: "Slight Snow showers", src: "/export/wi_snow.svg" },
  { code: 86, description: "Heavy Snow showers", src: "/export/wi_snow.svg" },

  { code: 95, description: "Thunderstorm", src: "/export/wi_thunderstorms.svg" },
  { code: 96, description: "Thunderstorm with slight hail", src: "/export/wi_thunderstorms.svg" },
  { code: 99, description: "Thunderstorm with heavy hail", src: "/export/wi_thunderstorms.svg" },

    
];

useEffect(() => {
        
    Setsource(weatherIcons.find((icon) => icon.code === code ?  icon.src : null))
    

    },[code])
    

    return [ source ]

  








}