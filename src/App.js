import { Fragment } from 'react'
import ToDoListScreen from './pages/ToDoListScreen'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <Fragment>
      <ToDoListScreen />
      <ToastContainer />
    </Fragment>
  )
}

export default App
