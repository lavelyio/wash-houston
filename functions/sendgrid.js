const client = require('@sendgrid/mail')

function sendEmail(client, message, senderEmail, senderName) {
  return new Promise((fulfill, reject) => {
    const { SENDGRID_SEND_TO } = process.env
    const data = {
      from: {
        email: senderEmail,
        name: senderName,
      },
      subject: `New Message from ${message.email}`,
      to: SENDGRID_SEND_TO,
      html: `New Request for Contact/ Quote <br/>Message: [${message.firstName} ${message.lastName}]\n ${message.message}`,
    }

    client
      .send(data)
      .then(([response, body]) => {
        fulfill(response)
      })
      .catch((error) => reject(error))
  })
}

exports.handler = function (event, context, callback) {
  const { SENDGRID_API_KEY, SENDGRID_SENDER_EMAIL, SENDGRID_SENDER_NAME } = process.env

  const body = JSON.parse(event.body)

  client.setApiKey(SENDGRID_API_KEY)

  sendEmail(client, body, SENDGRID_SENDER_EMAIL, SENDGRID_SENDER_NAME)
    .then((response) => callback(null, { statusCode: response.statusCode }))
    .catch((err) => callback(err, null))
}
