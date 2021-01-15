import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import DateFnsUtils from '@date-io/date-fns'
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}))

export default function Calendar({ onChange }) {
  const classes = useStyles()
  return (
    <form className={classes.container} noValidate>
      <TextField
        id='datetime-local'
        label='Availability'
        type='datetime-local'
        name='requestedDate'
        defaultValue={new Date().toLocaleDateString()}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={onChange}
      />
    </form>
  )
}
