import React, {useState, useEffect} from 'react'

function Effect(){

    /* const [count, setCount] = useState(0)
    const [color, setColor] = useState('red')

    useEffect(() => {
        document.title = `count is ${count} ${color}`
        document.querySelector('h1').innerHTML = color
    }, [count, color])

    const addCount = () => {
        setCount(c => c + 1)
    }

    const subtractCount = () => {
        setCount(c => c - 1)
    }

    const changeColor = () => {
        setColor(c => c === 'red' ? 'green' : 'red')
    } */


    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)

    useEffect(() => {
        window.addEventListener('resize', handleResize)
    console.log('Event listener added')

    return () => {
        window.removeEventListener('resize', handleResize)
        console.log('event listner removed')
    }
    }, [])


    function handleResize() {
        setHeight(window.innerHeight)
        setWidth(window.innerWidth)
    }
    

    return(
        <>
            <p>width ; {width}</p>
            <p>Height : {height}</p>
        </>
    )
}

export default Effect