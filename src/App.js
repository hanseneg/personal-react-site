import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import About from './About'

function App() {
    return(
        <div>
            <Header />
            
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route exact path='/about'>
                        <About />
                    </Route>
                </Switch>
            <Footer />
        </div>
    )
}

export default App