import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, phone, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'Styliq Interiors Contact Form <onboarding@resend.dev>', // Replace with your verified domain
      to: ['Styliqinteriors@gmail.com'], // Your email
      replyTo: email,
      subject: `New Contact Form Submission: ${subject || 'No Subject'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb; border-radius: 8px;">
          <div style="background-color: #E85C0D; padding: 20px; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
          </div>
          
          <div style="background-color: white; padding: 30px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <div style="margin-bottom: 20px;">
              <h3 style="color: #374151; margin: 0 0 8px 0; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Name</h3>
              <p style="color: #1f2937; margin: 0; font-size: 16px;">${name}</p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <h3 style="color: #374151; margin: 0 0 8px 0; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Email</h3>
              <p style="color: #1f2937; margin: 0; font-size: 16px;">
                <a href="mailto:${email}" style="color: #E85C0D; text-decoration: none;">${email}</a>
              </p>
            </div>
            
            ${phone ? `
            <div style="margin-bottom: 20px;">
              <h3 style="color: #374151; margin: 0 0 8px 0; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Phone</h3>
              <p style="color: #1f2937; margin: 0; font-size: 16px;">
                <a href="tel:${phone}" style="color: #E85C0D; text-decoration: none;">${phone}</a>
              </p>
            </div>
            ` : ''}
            
            ${subject ? `
            <div style="margin-bottom: 20px;">
              <h3 style="color: #374151; margin: 0 0 8px 0; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Subject</h3>
              <p style="color: #1f2937; margin: 0; font-size: 16px;">${subject}</p>
            </div>
            ` : ''}
            
            <div style="margin-bottom: 0;">
              <h3 style="color: #374151; margin: 0 0 8px 0; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Message</h3>
              <p style="color: #1f2937; margin: 0; font-size: 16px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 12px; margin: 0;">
              This email was sent from the Styliq Interiors contact form
            </p>
          </div>
        </div>
      `,
    });

    return res.status(200).json({ 
      message: 'Email sent successfully', 
      data 
    });

  } catch (error: any) {
    console.error('Error sending email:', error);
    return res.status(500).json({ 
      message: 'Failed to send email', 
      error: error.message 
    });
  }
}
