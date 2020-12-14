import React from 'react'
import Button from '@material-ui/core/Button'
import CallOutlineIcon from '@material-ui/icons/CallOutlined'

const phone = 'tel:+1-936-346-5322'
export default function ContactUsButton() {
  const onClick = (e) => {
    window.location.href = phone
  }

  return (
    <Button
      variant='outlined'
      color='primary'
      size='small'
      onClick={onClick}
      endIcon={<CallOutlineIcon />}>
      Contact Us
    </Button>
  )
}
