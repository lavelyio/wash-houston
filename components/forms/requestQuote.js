import React from 'react'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import axios from 'axios'
import Reward from 'react-rewards'
import { ErrorNotification } from '../notifications'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

export default function RequestQuote() {
  const classes = useStyles()

  const [form, updateForm] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  })
  const [submitError, setSubmitError] = React.useState(null)
  const reward = React.useRef(null)

  const handleSubmit = async (e) => {
    if (e) e.preventDefault()

    try {
      const resp = await axios.post('/api/send', {
        ...form,
        date: new Date().toDateString(),
      })
      reward.current.rewardMe()
    } catch (err) {
      setSubmitError(err?.message)
      reward.current.punishMe()
      console.log(err)
    }
  }

  const handleChange = ({ target }) => {
    const { name, value } = target
    updateForm((form) => ({ ...form, [name]: value }))
  }

  return (
    <Container component='main' maxWidth='xs'>
      <ErrorNotification hasError={!!submitError} msg={submitError} />
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component='h1' variant='h5'>
          Request A Quote
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete='fname'
                name='firstName'
                variant='outlined'
                defaultValue={form.firstName}
                required
                fullWidth
                onChange={handleChange}
                id='firstName'
                label='First Name'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                defaultValue={form.lastName}
                id='lastName'
                label='Last Name'
                onChange={handleChange}
                name='lastName'
                autoComplete='lname'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                defaultValue={form.email}
                required
                fullWidth
                id='email'
                label='Email Address'
                onChange={handleChange}
                name='email'
                autoComplete='email'
              />
            </Grid>
            <Grid item xs={12}>
              <TextareaAutosize
                defaultValue={form.message}
                id='message'
                name='message'
                style={{ width: '100%' }}
                rows={6}
                onChange={handleChange}
                aria-label='description'
              />
            </Grid>
          </Grid>
          <Reward
            ref={reward}
            type='confetti'
            lifetime={200}
            decay={0.9}
            spread={76}
            startVelocity={48}
            elementCount={65}
            elementSize={8}>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              onClick={handleSubmit}
              className={classes.submit}>
              Send
            </Button>
          </Reward>
        </form>
      </div>
    </Container>
  )
}
