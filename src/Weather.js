import React from 'react'
import key from './keys/key'
import axios from 'axios'

const Weather = ( { latitude, longitude, weatherData, forecast, city, temperature }) =>{

    const getWeather = () =>{

        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${key.api}`)
             .then(({data}) =>{
                weatherData(data)
             })

    }

    // let description  = weather.weather.id
    return (

        
        <div>
           
           <ul className="collection">
            <li className="collection-item">City : {city}</li>
            <li className="collection-item">Forecast : {forecast}</li>
            <li className="collection-item">Current Temperature : {temperature}</li>
           </ul>
          
           <button onClick = {()=>getWeather()} className = 'waves-effect waves-light btn'><i className="material-icons left">cloud</i>Get Weather</button>
        </div>
    )
    
}


export default Weather