import React from "react";
import { useState } from "react";
import { db } from "./firebase";
export const AddTask = () => {
    const [title, setTitle] = useState('');

    const click = () => { 
        const time = Date.now();
        db.collection("Tasks").add({
            title: title,
            isDone: false,
            time: time
        })

        // const newTask = [...tasks, { title: title,
        //     isDone: false }];
        setTitle('');
        // console.log(tasks, setTask)
        // setTask(newTask);
    }
    return (
        <div className='addList flex just-center align-start'>
            <input id='input' onChange={(e)=>setTitle(e.target.value)} type={'text'} value={title}></input>
            <button id='button' onClick={click}>add</button>
        </div>
    )
}