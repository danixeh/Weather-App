import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../App.css'
import app from '../App'
import ChildCW from './ChildCW'

const CardWeather = ({ lat, lon }) => {
  const [weather, setWeather] = useState()
  const [country, setCountry] = useState()
  const [image, setImage] = useState() 

  useEffect(() => {
    if (lat) { //we use lat cause if we can use lat is due a we got the information, so we have info of lon also arrived
      const API = '607fc085d2634e989a01526d36aec101'
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API}`
      axios.get(URL)
        .then(res => setWeather(res.data))
        .catch(err => console.log(err))
    }
  }, [lat])

  useEffect(() => {  
    if (weather) {
      const apiCountry = `https://restcountries.com/v2/alpha/${weather?.sys.country}`
      axios.get(apiCountry)
        .then(res => setCountry(res.data))
        .catch(err => console.log(err))
      const imgKey = '18376121-d08ef0867c0df242728dfc34f'
      let browse = `${weather?.weather[0].description.replace(' ','+')}`
      browse += '+sky'
      const apiImage = `https://pixabay.com/api/?key=${imgKey}&q=${browse}&image_type=photo`
      axios.get(apiImage)
        .then(res => setImage(res.data))
        .catch(err => console.log(err))
    }
  }, [weather])  
    
  return (   
    <div >
      <ChildCW  weather={weather} country={country} image={image}  />      
    </div>
  )
}

export default CardWeather




