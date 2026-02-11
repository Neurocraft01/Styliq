# Local Development with API Routes

## The Issue

The contact form API (`/api/contact`) is a Vercel serverless function that only works when deployed to Vercel. When running locally with `npm run dev`, you'll get a 404 error because Vite doesn't have a backend to handle the API request.

## Solution Options

### Option 1: Use Vercel CLI (Recommended for Testing API)

1. **Install Vercel CLI globally:**
   ```powershell
   npm install -g vercel
   ```

2. **Run development with Vercel:**
   ```powershell
   npm run dev:vercel
   ```
   
   This command runs your app with Vercel's local development environment, which includes support for serverless functions.

3. **First time setup:**
   - When you run `vercel dev` for the first time, it will ask you to link to your Vercel project
   - Follow the prompts to authenticate and link

4. **Create `.env` file** with your Resend API key:
   ```
   RESEND_API_KEY=your_resend_api_key_here
   ```

### Option 2: Use Regular Dev Mode (Frontend Development)

If you're just working on the frontend and don't need to test the email functionality:

1. **Run normal development:**
   ```powershell
   npm run dev
   ```

2. **The contact form will show an error** when submitted (404), but you can:
   - Ignore it and test on production/Vercel preview
   - Check the browser console to see the form data being sent
   - The form validation and UI will still work

### Option 3: Test on Deployed Version

The easiest way to test the complete contact form functionality:

1. Push your changes to GitHub
2. Vercel automatically deploys
3. Test on your live site: `www.styliqinteriors.com/contact`

## Current Setup

- **`npm run dev`** - Runs Vite dev server (no API support)
- **`npm run dev:vercel`** - Runs with Vercel CLI (API routes work)
- **`npm run build`** - Builds for production
- **`npm run preview`** - Preview production build locally

## Quick Start for Full Testing

```powershell
# Install Vercel CLI globally (one-time setup)
npm install -g vercel

# Create .env file with your Resend API key
# RESEND_API_KEY=your_key_here

# Run with API support
npm run dev:vercel

# Or if you prefer vercel command directly
vercel dev
```

## Notes

- The API will work on your deployed Vercel site once you add the `RESEND_API_KEY` environment variable in Vercel dashboard
- For local development, you can either use `vercel dev` or just test the email functionality on your deployed site
- Regular `npm run dev` is fine for frontend development when you don't need to test emails
