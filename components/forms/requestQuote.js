import React from 'react'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Tooltip from '@material-ui/core/Tooltip'
import Container from '@material-ui/core/Container'
import axios from 'axios'
import Reward from 'react-rewards'
import ReCAPTCHA from 'react-google-recaptcha'
import { ErrorNotification, SuccessNotification } from '../notifications'

const recaptchaKey = '6LfGsS8aAAAAAO9EwbE9SSFKJedntKWOeBx33iqm'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
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

const initialForm = {
  firstName: '',
  lastName: '',
  email: '',
  message: '',
  requestedDate: new Date().toUTCString(),
  valid: false,
}

export default function RequestQuote() {
  const classes = useStyles()

  const [form, updateForm] = React.useState(initialForm)
  const [submitError, setSubmitError] = React.useState(null)
  const [submitOK, setSubmitOK] = React.useState(false)
  const reward = React.useRef(null)
  const formRef = React.useRef(null)

  const handleSubmit = async (e) => {
    if (e) e.preventDefault()

    try {
      const resp = await axios.post('/.netlify/functions/sendgrid', {
        ...form,
        date: new Date().toDateString(),
      })
      reward.current.rewardMe()
      setSubmitOK(true)
      try {
        formRef.current.reset()
        updateForm(initialForm)
      } catch (err) {
        console.error(err)
      }
    } catch (err) {
      setSubmitOK(false)
      setSubmitError(err?.message)
      reward.current.punishMe()
      console.log(err)
    }
  }

  const handleChange = ({ target }) => {
    const { name, value } = target
    updateForm((form) => ({ ...form, [name]: value }))
  }

  const captchaChange = (value) => {
    console.log('Captcha: ', value)
  }

  // Site Key: 6LfGsS8aAAAAAO9EwbE9SSFKJedntKWOeBx33iqm
  // server key: 6LfGsS8aAAAAAJAFRD5SEnMeQ_OoHX3kCJV82Vh4

  return (
    <Container component='main' maxWidth='xs'>
      {submitOK && <SuccessNotification msg={`We'll get back with you shortly.`} />}
      <ErrorNotification hasError={!!submitError} msg={submitError} />
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component='h1' variant='h5'>
          Request A Quote
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit} ref={formRef}>
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
              <TextField
                id='datetime-local'
                label='Availability'
                type='datetime-local'
                name='requestedDate'
                defaultValue={form.requestedDate}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextareaAutosize
                defaultValue={form.message}
                id='message'
                name='message'
                style={{ width: '100%', padding: 5 }}
                rows={5}
                onChange={handleChange}
                aria-label='description'
              />
            </Grid>
            <Grid item xs={12}>
              <ReCAPTCHA sitekey={recaptchaKey} onChange={captchaChange} />
            </Grid>
          </Grid>
          <Tooltip
            title={form.valid ? 'Send us your message' : 'Ensure all fields are completed'}
            aria-label='form submit'>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              disabled={!form.valid}
              onClick={handleSubmit}
              className={classes.submit}>
              <Reward
                ref={reward}
                type='confetti'
                lifetime={200}
                decay={0.9}
                spread={76}
                startVelocity={48}
                elementCount={65}
                elementSize={8}
              />
              Send
            </Button>
          </Tooltip>
        </form>
      </div>
    </Container>
  )
}
