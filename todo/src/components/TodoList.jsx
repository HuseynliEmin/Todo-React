import React from 'react'
import Todo from './Todo'

export default function TodoList({ todos,deleteTodo,uptadeTodo }) {
  return (
    <div style={{ width: "100%" }}>
      {todos && todos.map((todo) => (
        <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} uptadeTodo={uptadeTodo}/>
      ))}
    </div>
  )
}
