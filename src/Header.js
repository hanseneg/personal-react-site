import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
    return(
        <header>
            <h1>See the Weather!</h1>
            <Link to='/'>Home</Link>
            <Link to='/randomCity'>Random City</Link>
            <Link to='/about'>About</Link>
        </header>
    )
}

export default Header