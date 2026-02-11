# Configure Resend API Key in Vercel

## Why you're not receiving emails:

The contact form API needs the `RESEND_API_KEY` environment variable to be set in Vercel. Without it, emails cannot be sent.

## Setup Steps:

### 1. Get Your Resend API Key

1. Go to [resend.com](https://resend.com) and log in
2. Navigate to **API Keys** in the dashboard
3. Click **Create API Key**
4. Copy the generated API key

### 2. Add Environment Variable to Vercel

1. Go to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your **Styliq Interiors** project
3. Go to **Settings** tab
4. Click **Environment Variables** in the left sidebar
5. Add a new variable:
   - **Key:** `RESEND_API_KEY`
   - **Value:** Paste your Resend API key
   - **Environment:** Check all (Production, Preview, Development)
6. Click **Save**

### 3. Redeploy Your Application

After adding the environment variable, you need to redeploy:

**Option A: Trigger a new deployment**
- Go to **Deployments** tab
- Click the **⋯** (three dots) on the latest deployment
- Click **Redeploy**

**Option B: Push a small change**
```bash
git commit --allow-empty -m "Trigger redeploy for env variables"
git push
```

### 4. Test the Contact Form

Once redeployed:
1. Go to your contact page
2. Submit a test message
3. Check both:
   - Your admin email: **Styliqinteriors@gmail.com**
   - The client's email (the one you entered in the form)

## What's New:

✅ **Google Review Button** - Added to testimonials section with your review link
✅ **Client Auto-Reply** - When someone submits the contact form, they now receive:
   - A professional confirmation email
   - A summary of their message
   - Your contact information
   - A link to your website

✅ **Admin Notification** - You receive the original notification with all form details

## Troubleshooting:

If emails still don't work after setup:
1. Check Vercel deployment logs for errors
2. Verify the API key is correct in Vercel settings
3. Check your Resend dashboard for delivery status
4. Make sure you're on Resend's free tier (100 emails/day) or have an active plan

## For Production (Optional):

To use your own domain for sending emails:
1. Verify your domain in Resend dashboard
2. Update `/api/contact.ts`:
   ```typescript
   from: 'Styliq Interiors <noreply@styliqinteriors.com>'
   ```
