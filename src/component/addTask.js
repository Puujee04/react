import React from "react";
import { useState } from "react";

export const AddTask = ({task, setTask}) => {
    const [title, setTitle] = useState('');
    const click = () => {
        task = { title: title }
        
        setTask('');

    }
    return (
        <div className='addList flex just-center align-start'>
            <input id='input' onChange={(e)=>setTitle(e.target.value)} type={'text'} value={title}></input>
            <button id='button' onClick={click}>add</button>
        </div>
    )
}