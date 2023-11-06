import authFetch from './custom'

export const fetchData = async () => {
  const { data } = await authFetch('')
  return data
}

export const createTodo = async (todo) => {
  const { data } = await authFetch.post('createTodo', todo)
}

export const deleteTodo = async (id) => {
  const { data } = await authFetch.delete('deleteTodo?id=' + id)
}

export const updateTodo = async (updatedTodo) => {
  const { data } = await authFetch.put('updateTodo', updatedTodo)
}
