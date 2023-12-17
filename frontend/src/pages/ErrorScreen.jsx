import { Container, Typography } from '@mui/material'
import { Link, useRouteError } from 'react-router-dom'
import CommonButton from '../components/CommonButton'

const ErrorScreen = () => {
  const error = useRouteError()
  return (
    <Container
      maxWidth='xs'
      sx={{
        textAlign: 'center',
      }}
    >
      <Typography variant='h4' component='h1' sx={{ mt: 6 }}>
        Oops!
      </Typography>
      <Typography variant='body1' component='p' sx={{ mt: 2 }}>
        Sorry, an unexpected error has occured.
      </Typography>
      <Typography
        variant='body2'
        component='p'
        sx={{ color: 'text.secondary', mt: 2 }}
      >
        Error {error.status}: {error.statusText} {error.message}
      </Typography>
      <Link to='/'>
        <CommonButton variant='outlined' sx={{ textTransform: 'none', mt: 4 }}>
          Go to Main Page
        </CommonButton>
      </Link>
    </Container>
  )
}

export default ErrorScreen
