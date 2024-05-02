import React, {useState, createContext} from 'react'
import ComponentB from './ComponentB.jsx'

export const userContext = createContext()

function ComponentA(){

    const [user, setUser] = useState('Tin Tin')

    return(
        <div className='context-component'>
            <p>
                ComponentA
            </p>
            {<h4>Hello {user}</h4>}
            
            <userContext.Provider value={user}>
                <ComponentB />
            </userContext.Provider>

            
        </div>
    )
}

export default ComponentA