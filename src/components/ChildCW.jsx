import React from 'react'
import axios from 'axios'
import react, { useEffect, useState } from 'react'
import '../App.css'
import app from '../App'
import CardWeather from './CardWeather'



const ChildCW = ({ weather, country, image }) => {
  const [backGround, setBackground] = useState();
  const [tempF, setTempF] = useState();
  const [tempC, setTempC] = useState();
  const [temp, setTemp] = useState();

  useEffect(() => {
    if (image) {
      const backGroundImg = image?.hits[0].largeImageURL
      const appStyle = {
        backgroundImage: `url("${backGroundImg}")`
      }
      setBackground(appStyle)
    }
    }, [image]);
    
    useEffect(() => {
      if (weather) {
        let tempOn = weather?.main.temp.toFixed(1)
        setTempF(tempOn)
        setTemp(tempOn)
        tempOn = ((tempOn - 32)  * (5 / 9)).toFixed(1)
        setTempC(tempOn)
      }
    }, [weather]);
  
  const change = () => {
    temp === tempF ? setTemp(tempC) : setTemp(tempF) 
  } 

  return (
    
      <div className="card" style={backGround} >
        <h5 >Weather App</h5> 

        <h4><b>{country?.capital}, {country?.name} <b></b>{weather?.sys.country}</b></h4> 
      <div className="bx-h-t" >
        <div className="bx-t" >
          <div className="temp-t"><div className="temp-p">{weather && temp}</div><p className="temp-g" > {temp !== tempF ? " Celsius" : " Fahrenheit"}</p></div>
          <button className="temp-t" onClick={change} >{temp !== tempF ? "Go to Fahrenheit" : "Go to Celsius"}</button>
        </div>
        <img src={weather && `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
        <div className="cl-s">{weather?.weather[0].description}</div>
        <div className="dts" >
            <li><b>Wind speed </b>{weather?.wind.speed} m/s</li>
            <li><b>Clouds </b>{weather?.clouds.all} %</li>
            <li><b>Clouds </b>{weather?.weather[0].description}</li>          
          </div>        
        </div>
      </div>
    
  )
}

export default ChildCW