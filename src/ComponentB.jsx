import ComponentC from './ComponentC.jsx'

function ComponentB(){

    

    return(
        <div className='context-component'>
            <p>
                ComponentB
            </p>
            
           <ComponentC />
        </div>
    )
}

export default ComponentB