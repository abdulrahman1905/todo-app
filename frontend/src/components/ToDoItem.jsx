import { useNavigate } from 'react-router-dom'
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  ListItemIcon,
  IconButton,
} from '@mui/material'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import CachedIcon from '@mui/icons-material/Cached'
import styles from '../assets/styles/customeStyles'

const ToDoItem = ({ task, deleteTask }) => {
  const navigate = useNavigate()

  return (
    <ListItem
      sx={styles.listItem}
      onClick={() => {
        navigate(`/tasks/${task.id}`)
      }}
    >
      <ListItemIcon sx={styles.listItemIcon}>
        {task.status === 'done' ? (
          <CheckCircleOutlineIcon sx={{ color: 'green' }} />
        ) : (
          <CachedIcon
            sx={{ color: task.status === 'in progress' ? 'green' : 'red' }}
          />
        )}
      </ListItemIcon>
      <ListItemText
        primary={task.title}
        secondary={`Deadline: ${task.deadline}`}
      />
      <ListItemSecondaryAction>
        <IconButton
          onClick={() => {
            deleteTask(task.id)
          }}
        >
          <RemoveCircleOutlineIcon sx={{ color: 'red' }} />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}

export default ToDoItem
