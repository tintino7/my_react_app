import React, {useState} from "react";
import styles from './Counter.module.css'

function Counter(){
    const [count, setCount] = useState(0)

    const increse = () =>{
        setCount(c => c + 1)
        setCount(c => c + 1)
        setCount(c => c + 1)
    }

    const decrese = () =>{
        setCount(count - 1)
    }

    const reset = () =>{
        setCount(0)
    }

    return(
        <div className={styles.contContainer}>
            <p className={styles.countDisplay}>
                {count}
            </p>
            <button className={styles.countButton} onClick={increse}>Increase</button>
            <button className={styles.countButton} onClick={reset}>Reset</button>
            <button className={styles.countButton} onClick={decrese}>Decrease</button>
        </div>
    );

    
}

export default Counter