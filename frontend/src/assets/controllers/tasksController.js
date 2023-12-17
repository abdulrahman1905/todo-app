//getTasks
const getTasks = async () => {
  const res = await fetch('http://localhost:5000/tasks?_sort=id&_order=desc')
  const data = await res.json()
  return data
}

//getTask
const getTask = async (id) => {
  const res = await fetch(`http://localhost:5000/tasks/${id}`)
  const data = await res.json()
  return data
}

//addTask
const addTask = async (task) => {
  const res = await fetch('http://localhost:5000/tasks', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(task),
  })

  const data = await res.json()
  return data
}

//deleteTask
const deleteTask = async (id) => {
  await fetch(`http://localhost:5000/tasks/${id}`, {
    method: 'DELETE',
  })
}

//updateTask
const updateTask = async (id, task) => {
  const taskToUpdate = await getTask(id)
  const updatedTask = { ...taskToUpdate, ...task }
  const res = await fetch(`http://localhost:5000/tasks/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(updatedTask),
  })

  const data = await res.json()
  return data
}

export { getTasks, getTask, addTask, deleteTask, updateTask }
