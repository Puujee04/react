import React from "react";

import { TaskDetail } from "./taskDetail";

export const TaskList = ({ tasks, removeTask, transferTask }) => {

    // console.log(tasks.filter((el) => el.isDone === false));
    return (
        <div className='todoList'>
            <ul className='listUI'>
                {
                    tasks.map(({ title, isDone }, i) => {
                        return <TaskDetail title={title} isDone={isDone} key={i} removeTask={removeTask} i={i} transferTask={transferTask}></TaskDetail>
                    }).filter(({ isDone }) => !isDone)
                }
            </ul>
        </div>)
}