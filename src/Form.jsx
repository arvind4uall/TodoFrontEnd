import { useState } from 'react'
import { toast } from 'react-toastify'
import { currentDateTime } from './functionality/currentDateTime'
const Form = ({ addTodo }) => {
  const [newTodoName, setnewTodoName] = useState('')
  const [dateTime, setDateTime] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newTodoName) {
      toast.error('Please enter todo!!')
      return
    }
    if (!dateTime) {
      toast.error('Please pick date and time!!!')
      return
    }
    addTodo(newTodoName, dateTime)
    setnewTodoName('')
    setDateTime('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <h4>To do list</h4>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          placeholder="Enter your todo"
          value={newTodoName}
          onChange={(e) => setnewTodoName(e.target.value)}
        />
        <input
          type="datetime-local"
          name="datetime"
          id="datetime"
          value={dateTime}
          onChange={(e) => setDateTime(e.target.value)}
          min={currentDateTime}
        />
        <button type="submit" className="btn">
          add todo
        </button>
      </div>
    </form>
  )
}
export default Form
