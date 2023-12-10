import { useState, useEffect, Fragment } from 'react'
import {
  getTasks,
  addTask,
  deleteTask,
} from '../assets/controllers/tasksController'
import Loader from '../components/Loader'
import Message from '../components/Message'
import ToDoList from '../components/ToDoList'
import CommonButton from '../components/CommonButton'
import AddTaskForm from '../components/AddTaskForm'
import { toast } from 'react-toastify'

const ToDoListScreen = () => {
  const [tasks, setTasks] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  const [showAddTaskForm, setShowAddTaskForm] = useState(false)

  const addNewTask = async (newTask) => {
    try {
      const data = await addTask(newTask)
      if (data) {
        setTasks([data, ...tasks])
        toggleAddFormShow()
        toast.success('Task added successfully')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const deleteATask = async (id) => {
    try {
      await deleteTask(id)
      setTasks(tasks.filter((task) => task.id !== id))
      toast.success('Task deleted successfully')
    } catch (error) {
      console.log(error)
    }
  }

  const toggleAddFormShow = () => {
    setShowAddTaskForm(!showAddTaskForm)
  }

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const fetchedTasks = await getTasks()
        setTasks(fetchedTasks)
        setLoading(false)
      } catch (error) {
        setError(error)
        setLoading(false)
      }
    }
    fetchTasks()
  }, [])

  return (
    <Fragment>
      {loading && <Loader />}
      {showAddTaskForm && (
        <AddTaskForm
          toggleAddFormShow={toggleAddFormShow}
          addNewTask={addNewTask}
        />
      )}
      {!showAddTaskForm && tasks && (
        <CommonButton
          sx={{ textTransform: 'none' }}
          variant='contained'
          size='large'
          onClick={toggleAddFormShow}
        >
          Add New Task
        </CommonButton>
      )}
      {tasks && <ToDoList tasks={tasks} deleteTask={deleteATask} />}
      {error && <Message variant='error'>{error.message}</Message>}
    </Fragment>
  )
}

export default ToDoListScreen
