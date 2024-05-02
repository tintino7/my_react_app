import React, {useState} from 'react'

function NewComponent(){

    const [cars, setCars] = useState([])

    const [make, setMake] = useState('')
    const [year, setYear] = useState(new Date().getFullYear())
    const [model, setModel] = useState('')

    const handleAddCar = () => {
        setCars(c => [...c, {make : make, year : year, model : model}])
        setMake('')
        setYear(new Date().getFullYear())
        setModel('')
    }

    const handleRemoveCar = (index) => {
        setCars(c => c.filter((_, i) => i !== index))
    }

    const handleMakeChange  = (event) => {
        setMake(event.target.value)
        console.log(make)
    }

    const handleYearChange = (event) => {
        setYear(event.target.value)
        console.log(year)
    }

    const handleModelChange = (event) => {
        setModel(event.target.value)
        console.log(model)
    }

    return (
        <div>
            <h1>List of Cars</h1>
            <ul>
                {cars.map((car, index) => <li onClick={() => handleRemoveCar(index)} key={index}>{car.make} {car.year} {car.model}</li> )}
            </ul>
            <input type="text" value={make} onChange={handleMakeChange} placeholder='Enter car make'/>
            <input type="number" value={year} onChange={handleYearChange}/>
            <input type="text" value={model} onChange={handleModelChange} placeholder='Enter car model'/>
            <button onClick={handleAddCar}>Add Car</button>
            
        </div>
    );
    

   
}

export default NewComponent