import { useEffect, useState, Fragment } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getTask } from '../assets/controllers/tasksController'
import Loader from '../components/Loader'
import Message from '../components/Message'
import TaskDetails from '../components/TaskDetails'

const EditScreen = () => {
  const { id } = useParams()
  const [task, setTask] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const fetchedTask = await getTask(id)
        if (fetchedTask.title) {
          setTask(fetchedTask)
        } else {
          setError(`Task not found for task ID ${id}`)
        }
        setLoading(false)
      } catch (error) {
        setError(error.message)
        setLoading(false)
      }
    }
    fetchTask()
  }, [id])

  return (
    <Fragment>
      {loading && <Loader />}
      {task && <TaskDetails task={task} />}
      {error && (
        <Message variant='error'>
          {error}. <Link to='/'>Back to List</Link>
        </Message>
      )}
    </Fragment>
  )
}

export default EditScreen
