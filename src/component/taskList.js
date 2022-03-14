import React from "react";

import { TaskDetail } from "./taskDetail";

export const TaskList = ({tasks, removeTask, transferTask}) => {
    
    console.log(tasks);
    return (
        <div className='todoList'>
            <ul className='listUI'>
                { 
                   tasks.filter((el) => el.isDone === false).map((el, i) => {
                    <TaskDetail title = {el.title} key = {i} removeTask = {removeTask} i = {i} transferTask = {transferTask}></TaskDetail>
                    })
                }
            </ul>
        </div>)
}