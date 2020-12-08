require('dotenv').config()
const withImages = require('next-images')

module.exports = withImages({
  env: {
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
    SENDGRID_TO: process.env.SENDGRID_SEND_TO,
    SENDGRID_SENDER_EMAIL: process.env.SENDGRID_SENDER_EMAIL,
  },
})
