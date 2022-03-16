import React from "react";

import { TaskDetail } from "./taskDetail";

export const DoneTaskList = ({ tasks, removeTask, transferTask }) => {

    return (
        <div className='todoDone'>
            <ul className='doneListUI'>
                {
                    tasks.filter(({ isDone }) => isDone).map(({ title, isDone, id }, i) => {
                        return <TaskDetail title={title} isDone={isDone} key={i} removeTask={removeTask} id={id} transferTask={transferTask}></TaskDetail>
                    })
                }
            </ul>
        </div>)
}