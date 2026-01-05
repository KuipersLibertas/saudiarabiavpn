# Gmail SMTP Setup for Contact Form

This project uses Gmail SMTP to send emails from the contact form.

## Prerequisites

1. A Gmail account
2. An App Password generated from your Google Account

## Setup Instructions

### 1. Install Dependencies

First, install the required nodemailer package:

```bash
npm install nodemailer
npm install --save-dev @types/nodemailer
```

### 2. Generate Gmail App Password

1. Go to your Google Account: https://myaccount.google.com/
2. Navigate to Security
3. Enable 2-Step Verification (if not already enabled)
4. Go to App Passwords: https://myaccount.google.com/apppasswords
5. Generate a new app password for "Mail"
6. Copy the 16-character password

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USER=your-email@gmail.com
MAIL_PASSWORD=your-16-character-app-password
MAIL_FROM=your-email@gmail.com
```

Replace:
- `your-email@gmail.com` with your actual Gmail address
- `your-16-character-app-password` with the app password you generated

### 4. Test the Contact Form

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Navigate to the contact page: http://localhost:3000/contact

3. Fill out and submit the form

4. Check your Gmail inbox for the contact form submission

## Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `MAIL_HOST` | SMTP server hostname | `smtp.gmail.com` |
| `MAIL_PORT` | SMTP server port | `587` |
| `MAIL_USER` | Your Gmail address | `your-email@gmail.com` |
| `MAIL_PASSWORD` | Gmail app password | `abcd efgh ijkl mnop` |
| `MAIL_FROM` | Sender email address | `your-email@gmail.com` |

## Troubleshooting

### "Invalid login" error
- Make sure you're using an App Password, not your regular Gmail password
- Verify that 2-Step Verification is enabled on your Google Account

### Emails not being received
- Check your spam folder
- Verify that the `MAIL_USER` and `MAIL_FROM` are set to your Gmail address
- Ensure the app password is correct (no spaces)

### "Cannot find module 'nodemailer'" error
- Run `npm install nodemailer @types/nodemailer`
- Restart your development server

## Security Notes

- Never commit your `.env.local` file to version control
- The `.env.local` file is already included in `.gitignore`
- Keep your app password secure and don't share it
