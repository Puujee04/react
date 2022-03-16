import { toBeChecked } from "@testing-library/jest-dom/dist/matchers";
import React from "react";

export const TaskDetail = ({ title, removeTask, id, isDone, transferTask }) => {
    // console.log(title)

    return (
        <li className="flex">
            <input type='checkbox' onChange={() => transferTask(id, isDone)} checked={isDone} />{title}
            <button onClick={() => removeTask(id)}>X</button>
        </li>
    )
}