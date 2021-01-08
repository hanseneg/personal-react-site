import React, {useState, useEffect} from 'react'
import axios from 'axios'

//use useState() to save info 
//use axios.get() and the urls to get data from the apis
//use useEffect() and put axios call in it
//use useContext() to pass info to WeatherInfo to be displayed

const Context = React.createContext()

function ContextProvider(props) {
    const [latAndLong, setLatAndLong] = useState('')
    const [city, setCity] = useState('')
    
    function handleChange(event) {
        const {name, value} = event.target
        setLatAndLong({[name]: value})
        setCity({[name]: value})
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(city)
        console.log(latAndLong)
    }

    function getLatandLongData(lat, long) {
        axios.get(`https://api.darksky.net/forecast/6535c0077509d1f39cebc04896d32aa1/${lat},${long}`)
            .then((response) => {
                setLatAndLong(response.data)
            })
    }
    
    function getCityData(location) {
        axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?limit=1&access_token=pk.eyJ1IjoiYWFiYm90dDE5OTYiLCJhIjoiY2s0NG5oa3ZyMDBrMDNlbzR0Z2Uxd2FzaCJ9.RbW_WN2tx7kkJ6cZbffK-A`)
            .then((response) => {
                setCity(response.data)
            })
    }
    
    useEffect(() => {
        getLatandLongData()
        getCityData()
    })


    return (
        <Context.Provider value={{handleChange, handleSubmit}}>
            {props.children}
        </Context.Provider>
    )
}

export {Context, ContextProvider}