import { useEffect, useState } from 'react';
import './todo.css';
import { AddTask } from './addTask';
import { TaskList } from './taskList';
import { DoneTaskList } from './doneTaskList';
import { db } from './firebase';
export default function Todo() {
    const [tasks, setTask] = useState([]);

    console.log(tasks);
    const deleteTask = (id) => {
        // const filteredTask = tasks.filter(({id}) => id !== idS);
        // setTask(filteredTask);
        db.collection("Tasks").doc(id).delete().then(() => {
            console.log("Document successfully deleted!");
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    }
    const transferTask = (id, isDone) => {
        // console.log(index, ' --- ')
        db.collection('Tasks').doc(id).set({
            isDone: !isDone
        }, { merge: true });
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