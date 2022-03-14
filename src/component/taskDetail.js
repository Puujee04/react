import React from "react";

export const TaskDetail = ({titleEl, removeTask, i}) => {
    return(
        <li className="flex"> <input type={'checkbox'} onChange={removeTask(i)}></input> {titleEl} <button>X</button></li>
    )
}