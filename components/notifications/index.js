import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'

function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />
}
const ErrorNotification = ({ hasError, msg }) => {
  const [open, setOpen] = React.useState(hasError)

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity='error'>
        {msg}
      </Alert>
    </Snackbar>
  )
}

const SuccessNotification = ({ msg }) => {
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  return (
    <Snackbar open={true} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity='success'>
        {msg}
      </Alert>
    </Snackbar>
  )
}

export { ErrorNotification, SuccessNotification }
