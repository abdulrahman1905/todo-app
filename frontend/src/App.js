import Container from '@mui/material/Container'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'
import { Fragment } from 'react'

function App() {
  return (
    <Fragment>
      <Container maxWidth='xs'>
        <Header />
        <Outlet />
      </Container>
      <ToastContainer />
    </Fragment>
  )
}

export default App
