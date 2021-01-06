import React from 'react'
import useParams from 'react-router-dom'

function CarsInfo() {
    return(
        <div>
            <h1>Year, Make, and Model</h1>
            {/* map over or .find info from the api */}
            <p>Description</p>
            <img>Car Image</img>
        </div>
    )
}

export default CarsInfo