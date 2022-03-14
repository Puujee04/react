import React from "react";

import { TaskDetail } from "./taskDetail";

export const TaskList = ({tasks, removeTask}) => {
    console.log(tasks);
    return (
        <div className='todoList'>
            <ul className='listUI'>
                {
                    tasks.map((el, i) => {
                        // console.log(title);
                        return <TaskDetail titleEl = {el.title} key = {i} removeTask = {removeTask} i = {i}></TaskDetail>
                    })
                }
            </ul>
        </div>)
}