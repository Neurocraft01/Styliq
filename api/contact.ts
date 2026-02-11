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

    // Send notification email to admin
    const adminEmail = await resend.emails.send({
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

    // Send auto-reply confirmation email to client
    const clientEmail = await resend.emails.send({
      from: 'Styliq Interiors <onboarding@resend.dev>',
      to: [email],
      subject: 'Thank you for contacting Styliq Interiors!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb; border-radius: 8px;">
          <div style="background-color: #E85C0D; padding: 30px; border-radius: 8px 8px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px; font-family: serif;">STYLIQ</h1>
            <p style="color: white; margin: 5px 0 0 0; font-size: 12px; letter-spacing: 3px;">INTERIORS</p>
          </div>
          
          <div style="background-color: white; padding: 40px 30px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h2 style="color: #1f2937; margin: 0 0 20px 0; font-size: 24px;">Hello ${name}!</h2>
            
            <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
              Thank you for reaching out to us. We have received your message and one of our design experts will get back to you within 24 hours.
            </p>
            
            <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 30px 0;">
              <h3 style="color: #374151; margin: 0 0 15px 0; font-size: 16px; text-transform: uppercase; letter-spacing: 1px;">Your Message Summary</h3>
              ${subject ? `<p style="color: #6b7280; margin: 5px 0; font-size: 14px;"><strong>Subject:</strong> ${subject}</p>` : ''}
              <p style="color: #6b7280; margin: 5px 0; font-size: 14px;"><strong>Message:</strong></p>
              <p style="color: #6b7280; margin: 10px 0 0 0; font-size: 14px; line-height: 1.5; white-space: pre-wrap;">${message}</p>
            </div>
            
            <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
              In the meantime, feel free to explore our portfolio and design themes on our website.
            </p>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://www.styliqinteriors.com" style="display: inline-block; background-color: #E85C0D; color: white; padding: 15px 35px; text-decoration: none; border-radius: 5px; font-weight: bold; font-size: 16px;">Visit Our Website</a>
            </div>
            
            <div style="border-top: 2px solid #e5e7eb; margin: 30px 0; padding-top: 20px;">
              <p style="color: #6b7280; font-size: 14px; margin: 0 0 10px 0;"><strong>Contact Us:</strong></p>
              <p style="color: #6b7280; font-size: 14px; margin: 5px 0;">📧 Styliqinteriors@gmail.com</p>
              <p style="color: #6b7280; font-size: 14px; margin: 5px 0;">📱 7447415182 / 8805500590</p>
              <p style="color: #6b7280; font-size: 14px; margin: 5px 0;">📍 Near Laxmi Sweets, Yashwantrao Chavan Road, Pimpri Colony, Pune - 411018</p>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px; padding-top: 20px;">
            <p style="color: #9ca3af; font-size: 12px; margin: 0;">
              © 2026 Styliq Interiors. All rights reserved.
            </p>
          </div>
        </div>
      `,
    });

    return res.status(200).json({ 
      message: 'Email sent successfully', 
      data: { adminEmail, clientEmail }
    });

  } catch (error: any) {
    console.error('Error sending email:', error);
    return res.status(500).json({ 
      message: 'Failed to send email', 
      error: error.message 
    });
  }
}
