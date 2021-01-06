import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
    return(
        <header>
            <h1>Find That Car!</h1>
            <Link to='/'>Home</Link>
            <Link to='/randomCar'>Random Car</Link>
            <Link to='/about'>About</Link>
        </header>
    )
}

export default Header