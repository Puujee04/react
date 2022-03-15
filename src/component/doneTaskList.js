import React from "react";

import { TaskDetail } from "./taskDetail";

export const DoneTaskList = ({ tasks, removeTask, transferTask }) => {

    return (
        <div className='todoDone'>
            <ul className='doneListUI'>
                {
                    tasks.map(({ title, isDone }, i) => {
                        return <TaskDetail title={title} isDone={isDone} key={i} removeTask={() => removeTask(i)} i={i} transferTask={() => transferTask(i)}></TaskDetail>
                    }).filter(({ isDone }) => isDone)
                }
            </ul>
        </div>)
}