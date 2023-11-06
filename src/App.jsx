import { useEffect, useState } from 'react'
import Form from './Form'
import { nanoid } from 'nanoid'
import { ToastContainer, toast } from 'react-toastify'
import Todos from './Todos'
import axios from 'axios'
import authFetch from './axios/custom'
import { createTodo, deleteTodo, fetchData, updateTodo } from './axios/request'
import { getDateTime } from './functionality/currentDateTime'

const datas = await fetchData()

const App = () => {
  const [todos, setTodos] = useState(datas || [])
  const addTodo = (itemName, dateTime) => {
    const newTodo = {
      name: itemName,
      completed: false,
      date: getDateTime(dateTime),
      id: nanoid(),
    }
    const newTodos = [...todos, newTodo]
    createTodo(newTodo)
    setTodos(newTodos)
    toast.success('To do added successfully!!')
  }
  const removeTodo = (todoId) => {
    const newTodos = todos.filter((todo) => todo.id != todoId)
    toast.success('To do deleted successfully!!')
    deleteTodo(todoId)
    setTodos(newTodos)
  }
  const editTodo = (todoId) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        const updatedTodo = { ...todo, completed: !todo.completed }
        updateTodo(updatedTodo)
        return updatedTodo
      }
      return todo
    })
    setTodos(newTodos)
  }
  const countStatus = () => {
    const activeTodos = todos.filter((todo) => todo.completed == false)
    const completedTodos = todos.filter((todo) => todo.completed == true)
    return {
      activeCount: activeTodos.length,
      completedCount: completedTodos.length,
    }
  }
  return (
    <section className="section-center">
      <ToastContainer position="top-center" />
      <Form addTodo={addTodo} />
      <Todos
        todos={todos}
        removeTodo={removeTodo}
        editTodo={editTodo}
        countStatus={countStatus}
      />
    </section>
  )
}

export default App
