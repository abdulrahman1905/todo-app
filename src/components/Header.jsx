import { Box, Typography } from '@mui/material'

const Header = () => {
  return (
    <Box sx={{ textAlign: 'center', mt: 5, mb: 3 }}>
      <Typography variant='h5' component='h1'>
        ToDo List App
      </Typography>
    </Box>
  )
}

export default Header
