import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'

export default function Todo({ id, title, completed }) {
    const { todos, setTodos } = useContext(TodoContext);
    console.log(title)

    const handleChnage = (e) => {
        const filterTodo = todos.map((item) => {
            if (item.id === e.target.id) {
                item.completed = false;
                if (e.target.checked) {
                    item.completed = true;
                }
            }
            return item
        })
        setTodos(filterTodo)
    }


    const deleteTodo = (e) => {
        e.preventDefault();

        const filterTodo = todos.filter((item) => {
            return item.id !== e.target.id
        })
        setTodos(filterTodo)
    }


    return (
        <div className='to-do-item items-center  w-full'>
            <span className='gap-2 flex py-3 w-[80%]'>
                <input type='checkbox' className='w-[10%]' onChange={(e) => handleChnage(e)} value={id} id={id} />
                <label style={{wordWrap: 'break-word'}} className='w-[85%] rounded px-2 text-wrap overflow-x-hidden ' htmlFor={id} >{title}</label>
            </span>
            <button  type='button' id={id} onClick={(e) => deleteTodo(e)} className='btn-delete rounded border border-red-700 px-3 py-1'>delete</button>
        </div>
    )
}
