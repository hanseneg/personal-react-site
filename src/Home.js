import React, {useState, useEffect, useContext} from 'react'
import WeatherInfo from './WeatherInfo'
import axios from 'axios'

//use useState() to save info 
//use axios.get() and the urls to get data from the apis
//use useEffect() and put axios call in it

function handleChange() {

}

function handleSubmit() {
    
}


 
function Home() {
    const [latAndLong, setLatAndLong] = useState('')
    const [city, setCity] = useState('')

    function getLatandLongData() {
        axios.get(`https://api.darksky.net/forecast/6535c0077509d1f39cebc04896d32aa1/${lat},${long}`)
            .then((response) => {
                setLatAndLong(response.data)
            })
    }
    
    function getCityData() {
        axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?limit=1&access_token=pk.eyJ1IjoiYWFiYm90dDE5OTYiLCJhIjoiY2s0NG5oa3ZyMDBrMDNlbzR0Z2Uxd2FzaCJ9.RbW_WN2tx7kkJ6cZbffK-A`)
            .then((response) => {
                setCity(response.data)
            })
    }
    
    useEffect(() => {
        getLatandLongData()
        getCityData()
    })


    return(
        <div>
            <form>
                <input onChange={handleChange} placeholder='City'></input>
                <button onClick={handleSubmit}>See the Weather!</button>
            </form>
            <WeatherInfo />
        </div>
    )
}

export default Home

//use useContext() to pass info to WeatherInfo to be displayed