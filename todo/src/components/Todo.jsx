import React, { useState } from 'react'
import { CiCircleRemove } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import "../App.css"
import { FaCheck } from "react-icons/fa";
function Todo({ todo, deleteTodo, uptadeTodo }) {
    const [editIcon, setEditIcon] = useState(false)
    const [newTodo, setNewTodo] = useState(todo.content)

    const deletedTodo = () => {
        deleteTodo(todo.id)
    }

    const uptadedTodo = () => {
        const request = {
            id: todo.id,
            content: newTodo
        }
        uptadeTodo(request)
        setEditIcon(false)
    }

    return (
        <div className='todo-parent'>
            <div>
                {
                    editIcon ? <input className='input' type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} /> : todo.content
                }

            </div>
            <div className='todo-icons'>
                <CiCircleRemove onClick={deletedTodo} />
                {editIcon ? <FaCheck onClick={uptadedTodo} /> : <FaEdit onClick={() => setEditIcon(true)} />}

            </div>
        </div>
    )
}

export default Todo