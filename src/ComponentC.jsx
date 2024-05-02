import ComponentD from './ComponentD.jsx'
import React, {useContext} from "react"
import {userContext} from './ComponentA.jsx'


function ComponentC(){

    const user = useContext(userContext)

    return(
        <div className='context-component'>
            <p>
                ComponentC
            </p>
            <h4>Hello again {user}</h4>
            <ComponentD />
        </div>
    )
}

export default ComponentC