import { useState } from "react"
import axios from "axios"

function Weather() {
    const [city, setcity] = useState("")
    const [weather,setweather] = useState("")
    const [temp,settemp] = useState("")
    const [desc,setdesc] = useState("")

    function handleCity(evt) {
        setcity(evt.target.value)
    }

    function getWeather() {
        var weatherData = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=02e57bcdcabb93866c1574e12beff4b4`)

        weatherData.then(function (success) {
            console.log(success.data)
            setweather(success.data.weather[0].main)
            setdesc(success.data.weather[0].description)
            settemp(success.data.main.temp)
        })
    }

    return (
        <div className="bg-gradient-to-r from-purple-600 to-blue-400 min-h-screen flex justify-center items-center p-10">
          <div className="bg-gradient-to-br from-pink-600 to-purple-800 p-10 text-white rounded-3xl shadow-slate-800 ">
            <h1 className="text-3xl font-bold mb-4 ">Weather Report</h1>
            <p className="text-lg mb-4">I can give you a weather report about your city!</p>
            
            <input 
              onChange={handleCity} 
              type="text" 
              className="w-full mt-2 text-black border border-black rounded-2xl  font-bold mb-4 p-2 " 
              placeholder="Enter your city name" 
            />
            
            <button 
              onClick={getWeather} 
              className=" bg-gradient-to-r from-purple-600 to-blue-400  font-bold mb-4 text-black w-full p-2 rounded-2xl mt-4 "
            >
              Get Report
            </button>
      
            <div className="mt-6 text-white">
              <h1 className="text-xl font-medium"><b>Weather:</b> {weather}</h1>
              <p className="text-lg"><b>Temperature:</b> {temp}</p>
              <p className="text-lg"><b>Description:</b> {desc}</p>
            </div>
          </div>
        </div>
      );
      
}

export default Weather