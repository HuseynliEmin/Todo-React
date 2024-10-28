import { useState } from 'react'
import './App.css'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = useState([])

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo])
  }


  const deleteTodo = (id) => {
    setTodos([...todos.filter(item => item.id !== id)])
  }

  const uptadeTodo = (newTodo) => {
    const updatesTodos = todos.map((todo) => {
      if (todo.id !== todo.id) {
        return
      }
      return newTodo
    })
    setTodos([...updatesTodos])
  }

  return (
    <div className='App'>
      <div className='todos'>
        <TodoCreate onCreateTodo={createTodo} />
        <TodoList todos={todos} deleteTodo={deleteTodo} uptadeTodo={uptadeTodo} />
      </div>

    </div>
  )
}

export default App
