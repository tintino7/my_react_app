import React, {useState} from 'react'
import styles from './Todo.module.css'

function Todo(){

    const [tasks, setTasks] = useState([])
    const [task, setTask] = useState({name : '', completed : false})

    const handleAddTask = () => {
        setTasks(t => task.name.trim() !== '' ?  [...t, task] : t)
        setTask({name : '', completed : false})
    }

    const handleTaskChange = (event) => {
        setTask({name : event.target.value, completed : false})
    }

    const deleteTask = (index) => {  
        setTasks(prevTasks => prevTasks.filter((_, i) => i !== index))
    }

    const markAsDoneTask = (index) => {
        setTasks(prevTasks => prevTasks.map((task, i) => i == index ? {...task, completed : !task.completed} :  task))
    }

    return(
        <div>
            <h1>Todo List app</h1>
            <input className={styles.taskInput}  value={task.name} onChange={handleTaskChange} type="text" placeholder='Enter task here'/>

            <button onClick={handleAddTask} >Add Task</button>

            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <div>
                            <p className={task.completed ? styles.completed : '' }>{task.name}</p> 
                            <button onClick={() => deleteTask(index)}>Delete</button>
                            <button onClick={() => markAsDoneTask(index)}>{task.completed ? 'Mark as Undone' : 'Mark as done'}</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );


}

export default Todo