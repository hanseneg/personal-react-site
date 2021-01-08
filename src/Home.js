import React, {useContext} from 'react'
import WeatherInfo from './WeatherInfo'
import { Context } from './context'

function Home() {
    const context = useContext(Context)
    return(
        <div>
            <form>
                <input 
                    onChange={context.handleChange}
                    placeholder='City'
                    type='text'
                    name='city'
                    value={context.city}
                />
                <button onClick={context.handleSubmit}>See the Weather!</button>
            </form>
            <WeatherInfo />
        </div>
    )
}

export default Home