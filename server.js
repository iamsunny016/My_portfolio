import express from 'express';
import cors from 'cors';
import { Resend } from 'resend';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

// Middleware
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:5174'],
  methods: ['POST']
}));
app.use(express.json());

// Premium HTML Template Generator
const generatePremiumEmailHtml = (name, email, message) => {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <style>
      body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #030305; margin: 0; padding: 40px 20px; color: #ffffff; }
      .container { max-width: 600px; margin: 0 auto; background: linear-gradient(145deg, #111116 0%, #0a0a0d 100%); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 16px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.5); }
      .header { padding: 30px; text-align: center; border-bottom: 1px solid rgba(255, 255, 255, 0.05); }
      .header h1 { margin: 0; font-size: 24px; font-weight: 600; letter-spacing: 1px; color: #ffffff; }
      .header span { color: #00f0ff; }
      .content { padding: 40px 30px; }
      .label { font-size: 12px; text-transform: uppercase; letter-spacing: 1.5px; color: #8a2be2; margin-bottom: 8px; font-weight: 600; }
      .value { font-size: 16px; color: #e2e8f0; margin-top: 0; margin-bottom: 24px; line-height: 1.6; }
      .message-box { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); padding: 20px; border-radius: 12px; font-size: 15px; color: #cbd5e1; line-height: 1.7; white-space: pre-wrap; }
      .footer { text-align: center; padding: 20px; font-size: 12px; color: #64748b; border-top: 1px solid rgba(255, 255, 255, 0.05); }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>New Message for <span>Rajnish.dev</span></h1>
      </div>
      <div class="content">
        <div class="label">From</div>
        <p class="value">${name}</p>
        
        <div class="label">Email Address</div>
        <p class="value"><a href="mailto:${email}" style="color: #00f0ff; text-decoration: none;">${email}</a></p>
        
        <div class="label">Message</div>
        <div class="message-box">${message}</div>
      </div>
      <div class="footer">
        This is an automated notification securely forwarded from your portfolio backend.
      </div>
    </div>
  </body>
  </html>
  `;
};

// Contact Endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required' });
    }

    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'm.scrajnish@gmail.com', // Must be verified email on Resend
      replyTo: email,
      subject: `New Portfolio Message from ${name}`,
      html: generatePremiumEmailHtml(name, email, message)
    });

    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Resend API Error:', error);
    res.status(500).json({ error: 'Failed to send message' });
  }
});

app.listen(port, () => {
  console.log(`🚀 Backend server running at http://localhost:${port}`);
});
