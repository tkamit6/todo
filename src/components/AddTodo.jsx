import React, { useContext, useEffect, useState } from 'react'
import { TodoContext } from '../context/TodoContext';
import { v4 as uuidv4 } from 'uuid';

export default function AddTodo() {
    const [title, setTitle] = useState('')

    const { todos, setTodos } = useContext(TodoContext);

    const addTodo = (e) => {
        e.preventDefault();

        if (title === '' || title === undefined) {
            alert("Please fill")
            return;
        }

        const newTodo = [...todos, { id: uuidv4(), title: title, completed: false }]
        setTodos(newTodo);
        setTitle('')
    }


    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    return (
        <div className='form-input-container'>
            <form onSubmit={addTodo}>
            <div className='flex gap-2'>
                <input type='text' value={title} onChange={e => setTitle(e.target.value)} className='form-input w-full px-4 rounded' placeholder='Add ToTo' />
                <button type='submit' className='form-btn border px-5 rounded border-blue-800'  >Add</button>
            </div>
            </form>
        </div>
    )
}
