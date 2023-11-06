import CompletedTodo from './CompletedTodo'
import ActiveTodo from './ActiveTodo'

const Todos = ({ todos, removeTodo, editTodo, countStatus }) => {
  const { activeCount, completedCount } = countStatus()
  return (
    <div className="todos">
      <h5>Active Todo</h5>
      {activeCount ? (
        todos.map((todo) => {
          return (
            <ActiveTodo
              key={todo.id}
              {...todo}
              removeTodo={removeTodo}
              editTodo={editTodo}
            />
          )
        })
      ) : (
        <p className="message">You don't have any active todos.</p>
      )}
      <h5>Completed Todo</h5>
      {completedCount ? (
        todos.map((todo) => {
          return (
            <CompletedTodo
              key={todo.id}
              {...todo}
              removeTodo={removeTodo}
              editTodo={editTodo}
            />
          )
        })
      ) : (
        <p className="message">You don't have completed todos.</p>
      )}
    </div>
  )
}
export default Todos
