import Button from '@mui/material/Button'

const CommonButton = ({ children, size, sx, variant, onClick, type }) => {
  return (
    <Button size={size} sx={sx} variant={variant} onClick={onClick} type={type}>
      {children}
    </Button>
  )
}

export default CommonButton
