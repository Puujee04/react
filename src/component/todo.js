import {useState} from 'react';
import './todo.css';
import { AddTask } from './addTask';
import {TaskList} from './taskList';
export default function Todo(){
    const [tasks, setTask] = useState([]);
    // const [ tasks, setTasks ] = useState([]);
    // const [doneTasks, setDoneTasks] = useState([]);
    const deleteTask = (index) => {
        const filteredTask = tasks.filter((_el, i) => index !== i)
        setTask(filteredTask);
    }
    const transferTask = (index, value) => {
        value === true ? tasks[index].isDone = false : tasks[index].isDone = true;
        setTask(tasks);
    }
    // console.log(tasks);
    
    return(
        <div className='container flex just-center align-center'>
            <div className='todoContainer flex column just-start'>
                <header className='todoHeader'>
                    <h1>TODO</h1>
                </header>
                <AddTask setTask = {setTask} tasks={tasks}></AddTask>
                <TaskList tasks = {tasks} removeTask = {deleteTask} transferTask = {transferTask}></TaskList>
                {/* <div className='todoDone'>
                    <ul id='doneListUI'>
                    </ul>    
                </div> */}

            </div>
        </div>
        
    )
}