require('dotenv').config()

const sgMail = require('@sendgrid/mail')

export default async function (req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  console.log(req.body)
  const { email, message } = req.body

  const content = {
    to: process.env.SENDGRID_SEND_TO,
    from: process.env.SENDGRID_SENDER_EMAIL,
    subject: `New Message From - ${email}`,
    text: message,
    html: `<p>${message}</p>`,
  }

  try {
    await sgMail.send(content)
    res.status(200).send('Message sent successfully.')
  } catch (error) {
    console.log('ERROR', error)
    console.log(error.response.body)
    res.status(400).send('Message not sent.')
  }
}
