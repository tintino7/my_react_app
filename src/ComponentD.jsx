import React, {useContext} from "react"
import {userContext} from './ComponentA.jsx'



function ComponentD(){

    const user = useContext(userContext)

    return(
        <div className='context-component'>
            <p>
                ComponentD
            </p>
            <p>Bye {user}</p>
        </div>
    )
}

export default ComponentD