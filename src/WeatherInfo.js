import React, {useContext} from 'react'
import { Context } from './context'

function WeatherInfo() {
    const context = useContext(Context)
    return(
        //map over info to display it?
        /* const contacts = contactsData.map(contact => 
            <h2 key={contact.firstName + contact.lastName}>{contact.firstName} {contact.lastName}</h2>) */
        <div>
            <h1>{context.city}</h1>
        </div>
    )
}

export default WeatherInfo