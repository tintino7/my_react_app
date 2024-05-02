import React, {useState} from 'react'
import styles from './ColorPicker.module.css'

function ColorPicker(){

    const [color, setColor] = useState('#ffffff')

    const handleColorChange = (event) => {
        setColor(event.target.value)
    }

    return(
        <div className={styles.colorContainer}>
            <h1>Color Picker</h1>
            <div className= {styles.colorDisplay} style={{backgroundColor : color}}>
                <p>Selected color is {color}</p>
            </div>
            <label htmlFor='color-input'>
                Select a color 
            </label>
            <input type="color" name='color-input' value={color} className={styles.colorInput} onChange={handleColorChange}/>
            
        </div>
    );
}

export default ColorPicker