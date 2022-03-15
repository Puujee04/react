import React from "react";

export const TaskDetail = ({title, removeTask, i, transferTask}) => {
    // console.log(title)
    
    return(
        <li className="flex"> 
        <input type='checkbox' onChange={() => transferTask(i)}/>{title} 
        <button onClick={()=> removeTask(i)}>X</button>
        </li>
    )
}