//getTask
//updateTask

//getTasks
const getTasks = async () => {
  const res = await fetch('http://localhost:5000/tasks?_sort=id&_order=desc')
  const tasks = await res.json()
  return tasks
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

export { getTasks, addTask, deleteTask }
