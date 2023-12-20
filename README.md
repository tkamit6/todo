# React + Vite


I made this to do application as assignment

to run this application open terminal and paste commands
 "npm run dev" to run the application.

created Context API to state managment to share the state to all over components. Named - 'TodoContext.jsx'
and wrapping app.jsx with <TodoContextProvider> </TodoContextProvider> for the state flow. 


created components named - AddTodo.jsx to add task to setTodo that is updated state. 

in the same component im using 
    "useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])"

to store data in localStorage whener 'todos' as dependency change. 


In the "TodoList.jsx" i'm mapping the todos data whenever available. using ternary oparator whener data is there it will map through the available data or shows "(<p>No Todo</p>)"
"
