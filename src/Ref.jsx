import React, {useEffect, useState, useRef} from 'react'

function Ref(){

    const newRef = useRef(null)

    /* const [number, setNumber] = useState(0) */


    useEffect(() => {
        console.log('Component Re Rendered')
    }, [])
    
    const handleClick = () => {
        newRef.current.focus()
        
    }

    return(
        <>
        <input ref={newRef} type="text" />
        <button onClick={handleClick}>Click Me</button>
        </>
    )
}

export default Ref