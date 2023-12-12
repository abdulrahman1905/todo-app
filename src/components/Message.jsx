import React from 'react'
import { Alert } from '@mui/material'

const Message = ({ children, variant, sx }) => {
  return (
    <Alert severity={variant} sx={sx}>
      {children}
    </Alert>
  )
}

Message.defaultProps = {
  variant: 'info',
}
export default Message
