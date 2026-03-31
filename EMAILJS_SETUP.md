# EmailJS Setup Guide

This guide will help you set up EmailJS to enable the contact form functionality.

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add an Email Service

1. After logging in, go to the "Email Services" page
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the instructions to connect your email account
5. **Copy the Service ID** (you'll need this later)

## Step 3: Create an Email Template

1. Go to the "Email Templates" page
2. Click "Create New Template"
3. Use this template structure:

```
Subject: New Contact Form Submission - {{subject}}

From: {{name}}
Email: {{email}}
Phone: {{phone}}

Message:
{{message}}

---
This message was sent via the VK Enterprises contact form.
```

4. Configure the template settings:
   - **To Email**: Your email address (where you want to receive messages)
   - **From Name**: {{name}}
   - **Reply To**: {{email}}

5. **Copy the Template ID** (you'll need this later)

## Step 4: Get Your Public Key

1. Go to "Account" → "General"
2. Find your **Public Key** (formerly called User ID)
3. Copy this key

## Step 5: Update the Contact Page

Open `src/pages/Contact.jsx` and find these lines (around line 35):

```javascript
const SERVICE_ID = 'YOUR_SERVICE_ID';
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
```

Replace them with your actual values:

```javascript
const SERVICE_ID = 'service_abc123';  // Your Service ID
const TEMPLATE_ID = 'template_xyz789';  // Your Template ID
const PUBLIC_KEY = 'user_abc123xyz';    // Your Public Key
```

## Step 6: Uncomment EmailJS Code

In the same file, find this line (around line 40):

```javascript
// await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
```

Uncomment it:

```javascript
await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
```

And comment out or remove the mailto fallback code (lines 43-56).

## Step 7: Test the Form

1. Start your development server: `npm run dev`
2. Navigate to the Contact page
3. Fill out the form with test data
4. Submit the form
5. Check your email inbox for the message

## Template Variables

The following variables are available in your email template:

- `{{name}}` - Sender's full name
- `{{email}}` - Sender's email address
- `{{phone}}` - Sender's phone number (optional)
- `{{subject}}` - Message subject
- `{{message}}` - Message content

## Troubleshooting

### Emails Not Sending

1. **Check your Service ID, Template ID, and Public Key** - Make sure they're correct
2. **Check EmailJS Dashboard** - Look for error logs in the "History" section
3. **Email Service Connection** - Verify your email service is still connected
4. **Monthly Limit** - Free accounts have a 200 emails/month limit

### CORS Errors

EmailJS should work without CORS issues, but if you encounter them:
1. Make sure you're using the latest version of @emailjs/browser
2. Check that your domain is allowed in EmailJS settings

### Form Validation

The form includes basic HTML5 validation. Required fields are:
- Name
- Email
- Subject
- Message

## Free Tier Limitations

EmailJS free tier includes:
- 200 emails per month
- 2 email services
- 2 email templates
- Basic support

For production use with higher volume, consider upgrading to a paid plan.

## Alternative: Mailto Fallback

If you don't want to set up EmailJS, the contact form currently uses a mailto fallback that opens the user's default email client. This is already configured and works without any setup.

## Security Note

Never commit your EmailJS keys to public repositories. Consider using environment variables for production:

```javascript
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
```

Create a `.env` file:
```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## Additional Resources

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS React Guide](https://www.emailjs.com/docs/examples/reactjs/)
- [EmailJS Dashboard](https://dashboard.emailjs.com/)
