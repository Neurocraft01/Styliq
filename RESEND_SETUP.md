# Resend API Setup Instructions

This project now includes email functionality using Resend API for the contact form.

## Setup Steps

### 1. Get Your Resend API Key

1. Go to [Resend](https://resend.com) and create an account
2. Navigate to the API Keys section
3. Create a new API key
4. Copy the API key

### 2. Configure Environment Variables

1. Create a `.env` file in the root directory:
   ```bash
   cp .env.example .env
   ```

2. Add your Resend API key to the `.env` file:
   ```
   RESEND_API_KEY=your_actual_resend_api_key_here
   ```

### 3. Verify Your Domain (For Production)

For production use, you'll need to verify your domain with Resend:

1. Go to your Resend dashboard
2. Navigate to Domains section
3. Add and verify your domain
4. Update the `from` email address in `/api/contact.ts`:
   ```typescript
   from: 'Contact Form <noreply@yourdomain.com>'
   ```

### 4. Deploy the API

This project uses serverless functions for the contact form. The `/api/contact.ts` file needs to be deployed:

#### Option A: Vercel (Recommended)
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. The API routes will be automatically deployed

#### Option B: Netlify
1. Add a `netlify.toml` file with functions configuration
2. Deploy via Netlify CLI or GitHub integration

#### Option C: Custom Backend
If you prefer a custom backend, you can:
1. Create an Express.js server
2. Move the API logic to your server
3. Update the fetch URL in Contact.tsx to point to your backend

### 5. Test the Contact Form

1. Start the development server: `npm run dev`
2. Navigate to the Contact page
3. Fill out and submit the form
4. Check your email (Styliqinteriors@gmail.com) for the message

## Important Notes

- **Never commit your `.env` file** - it's already in `.gitignore`
- The free tier of Resend allows 100 emails/day
- For testing, the default sender is `onboarding@resend.dev`
- For production, use your verified domain

## Troubleshooting

If emails aren't sending:
1. Check that your API key is correctly set in `.env`
2. Verify the API endpoint is accessible at `/api/contact`
3. Check browser console for errors
4. Ensure your deployment platform supports serverless functions

## Contact Form Features

✅ Email validation
✅ Required field validation
✅ Loading state while submitting
✅ Success/error messages
✅ Beautiful HTML email template
✅ Reply-to functionality
