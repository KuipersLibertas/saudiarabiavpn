# Email Configuration Setup

## Contact Form Email Configuration

The contact form is configured to send emails to **info@kuiperslibertas.com**.

### Setup Instructions

1. **Create a `.env` file** in the root directory (if it doesn't exist already)

2. **Add the following configuration** to your `.env` file:

```env
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USER=robinjkuipers@gmail.com
MAIL_PASSWORD=aqylqmpzxazrgfow
MAIL_FROM=robinjkuipers@gmail.com
MAIL_TO=info@kuiperslibertas.com
```

### Configuration Details

- **MAIL_HOST**: SMTP server (Gmail in this case)
- **MAIL_PORT**: SMTP port (587 for TLS)
- **MAIL_USER**: Gmail account used to send emails
- **MAIL_PASSWORD**: Gmail App Password (not your regular password)
- **MAIL_FROM**: Email address shown as sender
- **MAIL_TO**: **Recipient email address** (info@kuiperslibertas.com) - where contact form submissions will be sent

### Important Notes

- The contact form will send all submissions to **info@kuiperslibertas.com**
- The sender's email will be set as the `replyTo` address for easy responses
- Make sure to use a Gmail App Password, not your regular Gmail password
- To create an App Password: https://myaccount.google.com/apppasswords

### Testing

After setting up the `.env` file, restart your development server and test the contact form at http://localhost:3001/contact
