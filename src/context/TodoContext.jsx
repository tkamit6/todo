import React, { createContext, useState } from 'react'

export const TodoContext = createContext();

export const TodoContextProvider = (prop) => {
    const getTodo = JSON.parse(localStorage.getItem('todos'));
    const [todos, setTodos] = useState(getTodo ? getTodo : []);
    console.log(todos)

    return (
        <TodoContext.Provider value={{ todos, setTodos }}>
            {prop.children}
        </TodoContext.Provider>
    )
}
