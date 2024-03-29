const client = require('@sendgrid/mail')

const emailBody = ({
  email,
  firstName,
  lastName,
  date,
  message,
}) => `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en-GB">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <title>New Web Message</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

  <style type="text/css">
    a[x-apple-data-detectors] {color: inherit !important;}
  </style>

</head>
<body style="margin: 0; padding: 0;">
  <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
    <tr>
      <td style="padding: 20px 0 30px 0;">

<table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="border-collapse: collapse; border: 1px solid #cccccc;">
  <tr>
    <td align="center" bgcolor="#70bbd9" style="padding: 40px 0 30px 0;">
      <img src="https://media.tenor.com/images/f7f7fae6cc2a18e7cba56c34342660f4/tenor.gif" alt="New MEssage." width="300" height="230" style="display: block;" />
    </td>
  </tr>
  <tr>
    <td bgcolor="#ffffff" style="padding: 40px 30px 40px 30px;">
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;">
        <tr>
          <td style="color: #153643; font-family: Arial, sans-serif;">
            <h1 style="font-size: 24px; margin: 0;">You got a message from your website!</h1>
          </td>
        </tr>
        <tr>
          <td style="color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 24px; padding: 20px 0 30px 0;">
          <h3>Name: <p style="margin-left: 10;">${firstName} ${lastName}</p></h3>
          <h3>Email: <p style="margin-left: 10;"><a href="mailto:${email}"/></p></h3>
          <h5>Sent At: ${date}</h5>
          <h3>Message: <p style="margin-left: 10;"> ${message} </p></h3>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>

      </td>
    </tr>
  </table>
</body>
</html>`

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
      html: emailBody(message),
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
