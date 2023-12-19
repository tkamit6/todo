import React, { useContext } from 'react'
import Todo from './Todo'
import { TodoContext } from '../context/TodoContext';

export default function TodoList() {
    const { todos } = useContext(TodoContext);

    return (

        todos ? todos.map((item) => (
            <Todo key={item.id} id={item.id} title={item.title} completed={item.completed} />
        )
        ) : (<p>No Todo</p>)


    )
}
