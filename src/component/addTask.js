import React from "react";
import { useState } from "react";

export const AddTask = ({tasks, setTask}) => {
    const [title, setTitle] = useState('');
    const click = () => { 
        const newTask = [...tasks, { title: title,
            isDone: false }];
        setTitle('');
        // console.log(tasks, setTask)
        setTask(newTask);
    }
    return (
        <div className='addList flex just-center align-start'>
            <input id='input' onChange={(e)=>setTitle(e.target.value)} type={'text'} value={title}></input>
            <button id='button' onClick={click}>add</button>
        </div>
    )
}