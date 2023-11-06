import { getDateTime } from './functionality/currentDateTime'
const ActiveTodo = ({ id, name, completed, date, removeTodo, editTodo }) => {
  return (
    <>
      {!completed && (
        <div className="single-todo">
          <input
            type="checkbox"
            checked={completed}
            onChange={() => editTodo(id)}
          />
          <p
            style={{
              textTransform: 'capitalize',
              textDecoration: completed && 'line-through',
            }}
          >
            {name}
          </p>
          <p>{date}</p>
          <button
            className="btn remove-btn"
            type="button"
            onClick={() => removeTodo(id)}
          >
            delete
          </button>
        </div>
      )}
    </>
  )
}

export default ActiveTodo
