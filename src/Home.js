import React from 'react'

function Home() {
    return(
        <div>
            <form>
                <input placeholder='Year'></input>
                <input placeholder='Make'></input>
                <input placeholder='Model'></input>
                <button>Find that Car!</button>
            </form>
        </div>
    )
}

export default Home