import React from "react";

export const TaskDetail = ({title, removeTask, i, transferTask}) => {
    return(
        <li className="flex"> <input type='checkbox' onChange={transferTask(i)}></input> {title} <button onChange={removeTask(i)}>X</button></li>
    )
}