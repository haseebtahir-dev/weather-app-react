import React, { useState } from 'react'
import './Weather.css'

import '../Assests/bg.svg'
import sunny_icon from '../Assests/sunny.svg'
import wind_icon from '../Assests/wind-icon.svg'
import snow_icon from '../Assests/snow.svg'
import sleet_icon from '../Assests/sleet.svg'
import rain_icon from '../Assests/rain.svg'
import partycloud_icon from '../Assests/partly-cloudy.svg'
import heavyrain_icon from '../Assests/heavy-rain.svg'
import haze_icon from '../Assests/haze.svg'
import cloud_icon from '../Assests/cloudy.svg'



const WeatherApp = () => {
    let api_key = `3eb8772959e32307598ffd2c90730d89`
    const [humidity, setHumidity] = useState("4%")
    const [wind, setWind] = useState("9khp")
    const [temp, setTemprature] = useState("22°")
    const [city, setCity] = useState("Lahore")
    const [pressure, setPressure] = useState("1005hpa")
    const [wicon, setWicon] = useState(sunny_icon)
    const [sky, setSky] = useState("clear sky")
    const [high, setHigh] = useState("35°")
    const [low, setLow] = useState("33°")
    const [feel, setFeel] = useState("feels like 38°")

    const search = async () =>{
        const element = document.getElementById("input").value
        if(element === ""){
        return  alert("Enter City")
       
        }

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element}&units=Metric&appid=${api_key}`
        let response = await fetch(url)
        let data = await response.json()

        setHumidity(Math.floor(data.main.humidity)+"%")
        setWind(Math.floor(data.wind.speed)+"km/h")
        setTemprature(Math.round(data.main.temp)+"°")
        setPressure(data.main.pressure+"hpa")
        setCity(data.name)
        setSky(data.weather[0].main)
        setHigh(Math.round(data.main.temp_max)+"°")
        setLow(Math.round(data.main.temp_min)+"°")
        setFeel("feels like"+Math.round(data.main.feels_like)+"°")
       
        switch(data.weather[0].icon){
           case "01d":
           case "01n":
            setWicon(sunny_icon)
            break;
           case "02d":
           case "02n":  
            setWicon(partycloud_icon)
            break;
           case "03d":
           case "03n":
            case "04d":
            case "04n":
              setWicon(cloud_icon)
              break;
            case "200d":
            case "200n":
            setWicon(sleet_icon)
            break;
           case "09d":
           case "09n":
            setWicon(rain_icon)
            break;
           case "10d":
           case "10n":
            setWicon(heavyrain_icon)
             break;
           case "13d":
           case "13n":
            setWicon(snow_icon)
            break;
            default:
            setWicon(sunny_icon)
             break;
        }

    }
  return (
    <div className='weather-app'>
        <div className="container">
            <div className="weather">
                <div className='heading'>
                   <h1>React Weather</h1>
                </div>
                <div className="search-bar">
                    <input type="text" name="" id="input" placeholder='Search for location' />
                    <div className='search-icon'>
                   <button id='search-button' onClick={()=>{search()}} ><svg xmlns="http://www.w3.org/2000/svg" width="22.473" height="23" viewBox="0 0 22.473 23"><path d="M12.963,3a8.963,8.963,0,1,0,4.794,16.525L24.232,26l2.241-2.241L20.08,17.383A8.943,8.943,0,0,0,12.963,3Zm0,2.109a6.854,6.854,0,1,1-6.854,6.854A6.841,6.841,0,0,1,12.963,5.109Z fill=rgb(74, 111, 161)"  transform="translate(-4 -3)"/></svg>
                   </button>
                    </div>
                </div>
                <div className="current-weather">
                    <div className="current-heading">
                        <h6>Current Weather</h6>
                    </div>
                   <div className='current-weather-wrapper'>
                    <div className='current-weather-upadte'>
                        <div className='upadte-heading'>
                            <h4>{city}</h4>
                        </div>
                        <div className='icon-temp'>
                            <div className='icon'>
                                <img src={wicon} alt="" />
                            </div>
                            <div className='temperature'>
                                <p>{temp}</p>
                            </div>
                        </div>
                        <div className='sky-update'>
                            <h6>{sky}</h6>
                        </div>
                    </div>
                     <div className='weather-atmos'>
                        <div className='feels'>
                            <p>{feel}</p>
                        </div>
                        <div className='feel-temp'>
                            <div className='feel-high feel'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="21" viewBox="0 0 16 21"><path d="M20,15H15V3a1,1,0,0,0-1-1H10A1,1,0,0,0,9,3V15H4l8,8,8-8Z" transform="translate(20 23) rotate(180)"/></svg>
                            <span className='feel-tem'>{high}</span>
                            </div>
                            <div className='feel-low feel'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="21" viewBox="0 0 16 21"><path  d="M20,15H15V3a1,1,0,0,0-1-1H10A1,1,0,0,0,9,3V15H4l8,8,8-8Z" transform="translate(-4 -2)"/></svg>
                            <span className='feel-tem'>{low}</span>
                            </div>
                        </div>
                        <div>
                            <div className="humdity atmos">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="18" viewBox="0 0 12 18"><path  d="M12,1a.667.667,0,0,0-.536.272l-.02.026C9.87,3.324,6,9.682,6,13a6,6,0,1,0,12,0c0-3.314-3.861-9.66-5.439-11.693,0,0,0,0,0,0l-.025-.034A.667.667,0,0,0,12,1Zm2.333,13.333a1,1,0,1,1-1,1A1,1,0,0,1,14.333,14.333Z" transform="translate(-6 -1)"/></svg>
                            <p>Humidity</p>
                            <p className='c-w'>{humidity}</p>
                            </div>
                            <div className="wind atmos">
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16.346" viewBox="0 0 17 16.346"><path d="M12.135,3A4.244,4.244,0,0,0,8.462,5.117a2.89,2.89,0,0,0-3.816,2.49A2.932,2.932,0,0,0,2,10.519a2.992,2.992,0,0,0,.033.327h4a1.984,1.984,0,0,1-.111-.654A1.961,1.961,0,0,1,7.885,8.231h.654A3.273,3.273,0,0,1,11.808,11.5a3.235,3.235,0,0,1-.67,1.962h4.92a2.934,2.934,0,0,0,.309-5.853c.01-.118.018-.238.018-.359A4.25,4.25,0,0,0,12.135,3ZM7.885,9.538a.654.654,0,1,0,0,1.308h.654a.654.654,0,1,1,0,1.308H2.654a.654.654,0,1,0,0,1.308H8.538a1.962,1.962,0,0,0,0-3.923ZM3.961,14.769a.654.654,0,1,0,.654.654A.654.654,0,0,0,3.961,14.769Zm2.615,0a.654.654,0,1,0,0,1.308h6.865a.981.981,0,1,1,0,1.962h-.981a.654.654,0,1,0,0,1.308h.981a2.288,2.288,0,0,0,0-4.577Z" transform="translate(-2 -3)"/></svg>
                            <p>Wind</p>
                            <p className='m-w'>{wind}</p>
                            </div>
                            <div className="pressure atmos">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16.889" height="16.92" viewBox="0 0 16.889 16.92"><path d="M12.444,4A8.46,8.46,0,1,1,4,12.46,8.463,8.463,0,0,1,12.444,4ZM13.5,7.173l1.352,1.355-1.88,1.884a2.008,2.008,0,0,0-.528-.066,2.112,2.112,0,0,0-2.111,2.115,2.019,2.019,0,0,0,.066.529L8.948,14.476a2.652,2.652,0,0,0-2.837.595L7.6,16.558a.537.537,0,0,1,.759.76l1.484,1.487a2.663,2.663,0,0,0,.594-2.842l1.484-1.454a2.008,2.008,0,0,0,.528.066,2.112,2.112,0,0,0,2.111-2.115,2.019,2.019,0,0,0-.066-.529l1.88-1.884L17.722,11.4V7.173Z" transform="translate(-4 -4)"/></svg>
                            <p>Pressure</p>
                            <p className='c-w'>{pressure}</p>
                            </div>
                        </div>
                     </div>
                   </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WeatherApp