require('dotenv').config()
const withOptimizedImages = require('next-optimized-images')

module.exports = {
  env: {
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
    SENDGRID_TO: process.env.SENDGRID_SEND_TO,
    SENDGRID_SENDER_EMAIL: process.env.SENDGRID_SENDER_EMAIL,
  },
}
