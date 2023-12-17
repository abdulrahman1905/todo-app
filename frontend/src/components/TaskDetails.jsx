import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  CardHeader,
} from '@mui/material'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import CachedIcon from '@mui/icons-material/Cached'
import CommonButton from './CommonButton'
import EditTaskForm from './EditTaskForm'
import { toast } from 'react-toastify'
import { updateTask } from '../assets/controllers/tasksController'

const TaskDetails = ({ task: taskFromParent }) => {
  const [task, setTask] = useState(taskFromParent)
  const [showEditTaskForm, setShowEditTaskForm] = useState(false)

  const navigate = useNavigate()

  const toggleEditFormShow = () => {
    setShowEditTaskForm(!showEditTaskForm)
  }

  const saveTaskChanges = async (changedTask) => {
    try {
      const data = await updateTask(task.id, changedTask)
      if (data) {
        setTask(data)
        toggleEditFormShow()
        toast.success('Changes saved successfully')
      }
    } catch (error) {
      toast.error(`Error: ${error.message}`)
    }
  }

  return (
    <Card variant='outlined'>
      <CardHeader
        sx={{ bgcolor: '#f5f5f5' }}
        avatar={
          task.status === 'done' ? (
            <CheckCircleOutlineIcon sx={{ color: 'green' }} />
          ) : (
            <CachedIcon
              sx={{ color: task.status === 'in progress' ? 'green' : 'red' }}
            />
          )
        }
        title={task.title}
        subheader={`Deadline: ${task.deadline}`}
      />
      <CardContent>
        <Typography color='text.secondary'>Task is {task.status}</Typography>
        {showEditTaskForm && (
          <EditTaskForm
            task={task}
            toggleEditFormShow={toggleEditFormShow}
            saveTaskChanges={saveTaskChanges}
          />
        )}
      </CardContent>
      {!showEditTaskForm && (
        <CardActions>
          <CommonButton
            variant='outlined'
            sx={{ textTransform: 'none' }}
            onClick={() => navigate('/')}
          >
            Go Back
          </CommonButton>
          <CommonButton
            variant='contained'
            sx={{ textTransform: 'none' }}
            onClick={toggleEditFormShow}
          >
            Edit Task
          </CommonButton>
        </CardActions>
      )}
    </Card>
  )
}

export default TaskDetails
