import List from '@mui/material/List'
import ToDoItem from './ToDoItem'
import Message from './Message'

const ToDoList = ({ tasks, deleteTask }) => {
  return tasks.length === 0 ? (
    <Message variant='info' sx={{ mt: 2 }}>
      No task to display
    </Message>
  ) : (
    <List>
      {tasks.map((task) => (
        <ToDoItem task={task} key={task.id} deleteTask={deleteTask} />
      ))}
    </List>
  )
}

export default ToDoList
