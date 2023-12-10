import { useState } from 'react'
import {
  Box,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  TextField,
} from '@mui/material'
import CommonButton from './CommonButton'

const EditTaskForm = ({ task, toggleEditFormShow, saveTaskChanges }) => {
  const [title, setTitle] = useState(task.title)
  const [deadline, setDeadline] = useState(task.deadline)
  const [status, setStatus] = useState(task.status)

  const handleSubmit = (e) => {
    e.preventDefault()
    saveTaskChanges({ title, deadline, status })
  }

  return (
    <Box
      component='form'
      onSubmit={handleSubmit}
      sx={{
        mt: 2,
      }}
    >
      <TextField
        sx={{ my: 1 }}
        fullWidth
        required
        id='title'
        label='Title'
        value={title}
        onChange={(e) => {
          setTitle(e.target.value)
        }}
      />
      <TextField
        sx={{ mb: 1 }}
        fullWidth
        required
        id='deadline'
        label='Deadline'
        value={deadline}
        onChange={(e) => {
          setDeadline(e.target.value)
        }}
      />
      <FormControl sx={{ mb: 1 }} required fullWidth>
        <InputLabel id='status-label'>Status</InputLabel>
        <Select
          labelId='status-label'
          value={status}
          label='Status'
          onChange={(e) => {
            setStatus(e.target.value)
          }}
        >
          <MenuItem value='done'>Done</MenuItem>
          <MenuItem value='in progress'>In progress</MenuItem>
          <MenuItem value='not started'>Not started</MenuItem>
        </Select>
      </FormControl>
      <Box sx={{ textAlign: 'right' }}>
        <CommonButton
          sx={{ textTransform: 'none' }}
          variant='outlined'
          onClick={toggleEditFormShow}
        >
          Cancel
        </CommonButton>
        <CommonButton
          sx={{ textTransform: 'none', ml: 1 }}
          variant='contained'
          type='submit'
        >
          Save
        </CommonButton>
      </Box>
    </Box>
  )
}

export default EditTaskForm
