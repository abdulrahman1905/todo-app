import List from '@mui/material/List'
import ToDoItem from './ToDoItem'

const ToDoList = ({ tasks, deleteTask }) => {
  return (
    <List>
      {tasks.map((task) => (
        <ToDoItem task={task} key={task.id} deleteTask={deleteTask} />
      ))}
    </List>
  )
}

export default ToDoList
