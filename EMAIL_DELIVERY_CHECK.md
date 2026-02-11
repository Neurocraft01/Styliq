# Checking Email Delivery in Resend

## ✅ Your API is Working!

The logs you're seeing (`POST /emails`) confirm that:
- The contact form is successfully calling the API
- The API is sending requests to Resend
- Your RESEND_API_KEY is configured correctly

## How to Check Email Delivery

### 1. Check Resend Dashboard

1. Log in to [resend.com](https://resend.com)
2. Go to **Emails** section in the sidebar
3. You should see a list of all emails sent
4. Each email will show:
   - ✅ **Delivered** - Email was successfully delivered
   - ⏳ **Queued** - Email is being processed
   - ❌ **Failed** - Email delivery failed

### 2. Click on Individual Emails

Click on any email in the list to see:
- **To:** Email address it was sent to
- **From:** Sender address
- **Subject:** Email subject line
- **Status:** Delivery status
- **Events:** Timeline of delivery (sent, delivered, opened, etc.)
- **Raw Email:** Full HTML content

### 3. Check Your Inbox

**For Admin Emails (Styliqinteriors@gmail.com):**
- Check your Gmail inbox
- Check Gmail Spam/Promotions folders
- Search for emails from `onboarding@resend.dev`

**For Client Auto-Reply Emails:**
- Test by submitting the form with your own email
- Check inbox and spam folder
- Look for subject: "Thank you for contacting Styliq Interiors!"

## Common Issues

### Emails Not in Inbox?

1. **Check Spam Folder** - First-time senders often land in spam
2. **Whitelist the Sender** - Add `onboarding@resend.dev` to contacts
3. **Wait a Few Minutes** - Emails can take 1-5 minutes to arrive

### Why Multiple POST Requests?

If you see duplicate POST requests (like 2 at the same time):
- Someone submitted the form multiple times
- Or there was a form submission retry due to network issues
- Check in Resend dashboard if duplicate emails were actually sent

### Seeing "Queued" Status?

- Normal for first few seconds
- Should change to "Delivered" within 1-2 minutes
- If stuck in "Queued" for >5 minutes, there might be an issue

## Testing the Full Flow

### Test as a Customer:

1. Go to your contact page: https://www.styliqinteriors.com/contact
2. Fill out the form with YOUR email address
3. Submit the form
4. You should see success message on the website
5. Check your email inbox - you should receive auto-reply within 1-2 minutes
6. Check Styliqinteriors@gmail.com - admin notification should arrive

### Check Both Emails Were Sent:

In Resend dashboard, you should see **2 emails** per form submission:
1. Email to Styliqinteriors@gmail.com (admin notification)
2. Email to customer's address (auto-reply)

## Upgrade from onboarding@resend.dev

The default sender is `onboarding@resend.dev` which is fine for testing, but for production:

1. **Verify Your Domain** in Resend
2. **Update** `/api/contact.ts`:
   ```typescript
   from: 'Styliq Interiors <noreply@styliqinteriors.com>'
   ```
3. This improves deliverability and looks more professional

## Need Help?

If emails are showing "Delivered" in Resend but not arriving in inbox:
- Emails are likely in spam
- Add sender to email whitelist
- Consider verifying your domain for better delivery rates

If emails are showing "Failed" in Resend:
- Check the error message in Resend dashboard
- Verify RESEND_API_KEY is correct in Vercel
- Check if you've exceeded free tier limits (100 emails/day)
