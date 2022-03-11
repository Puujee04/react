import {useState} from 'react';
import './todo.css';

export default function Todo(){
    const todoArr =[], doneArr = [];
    function click(){
        
        console.log('add');
    }
    return(
        <div className='container flex just-center align-center'>
            <div className='todoContainer flex column just-start'>
                <header className='todoHeader'>
                    <h1>TODO</h1>
                </header>
                <div className='addList flex just-center align-start'>
                    <input id='input' type={'text'}></input>
                    <button id='button' onClick={click}>add</button>    
                </div>

                <div className='todoList'>
                    <ul className='listUI'>
                        {todoArr}
                    </ul>
                </div>

                <div className='todoDone'>
                    <ul id='doneListUI'>
                        {doneArr}
                    </ul>    
                </div>

            </div>
        </div>
        
    )
}