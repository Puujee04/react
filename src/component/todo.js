import { useEffect, useState } from 'react';
import './todo.css';
import { AddTask } from './addTask';
import { TaskList } from './taskList';
import { DoneTaskList } from './doneTaskList';
import { db } from './firebase';
export default function Todo() {
    const [tasks, setTask] = useState([]);

    console.log(tasks);
    const deleteTask = (index) => {
        const filteredTask = tasks.filter((_el, i) => index !== i);
        setTask(filteredTask);
    }
    const transferTask = (index) => {
        console.log(index, ' --- ')
        const newTasks = tasks.map((el, i) => {
            if (index === i) {
                if (el.isDone) el.isDone = false;
                else el.isDone = true;
                console.log(el);
            }
            return el;
        })
        console.log(newTasks);
        setTask(newTasks);
    }

    useEffect(() => {
        db.collection("Tasks").orderBy('time').onSnapshot(({ docs }) => {
            let newTask = [];
            docs.forEach((cur) => {
                let obj = cur.data();
                obj.id = cur.id;
                newTask = [...newTask, obj];
            })
            setTask(newTask);
        });
    }, [])

    return (
        <div className='container flex just-center align-center'>
            <div className='todoContainer flex column just-start'>
                <header className='todoHeader'>
                    <h1>TODO</h1>
                </header>
                <AddTask></AddTask>
                <TaskList tasks={tasks} removeTask={deleteTask} transferTask={transferTask} />
                <DoneTaskList tasks={tasks} removeTask={deleteTask} transferTask={transferTask}></DoneTaskList>
            </div>
        </div>
    )
}