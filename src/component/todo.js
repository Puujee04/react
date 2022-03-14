import {useState} from 'react';
import './todo.css';
import { AddTask } from './addTask';
import {TaskList} from './taskList';
export default function Todo(){
    const [ tasks, setTasks ] = useState([]);
    const [doneTasks, setDoneTasks] = useState([]);
    const removeTask = (index) => {
        const filteredTask = tasks.filter((_el, i) => index !== i)
        setTasks(filteredTask); 
    }
    console.log(tasks);
    
    return(
        <div className='container flex just-center align-center'>
            <div className='todoContainer flex column just-start'>
                <header className='todoHeader'>
                    <h1>TODO</h1>
                </header>
                <AddTask setTask = {setTasks} tasks={tasks}></AddTask>
                {/* <TaskList tasks = {tasks} removeTask={removeTask}></TaskList> */}
                {/* <div className='todoDone'>
                    <ul id='doneListUI'>
                    </ul>    
                </div> */}

            </div>
        </div>
        
    )
}