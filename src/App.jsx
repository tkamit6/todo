import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import {TodoContextProvider} from './context/TodoContext'

function App() {


  return (
    <TodoContextProvider>

      <div className='container'>
        <h1 className='app-title mb-3'>To do Application</h1>
        <AddTodo />
        <TodoList />
      </div>
    </TodoContextProvider>
  )
}

export default App
