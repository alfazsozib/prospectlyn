const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'alfazsozib@gmail.com',
    pass: 'ohox asvc ljvs jfmm'  }
});

router.post('/', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  const mailOptions = {
  from: '"Job Newsletter" <alfazsozib@gmail.com>',
  to: email,
  subject: 'Welcome to the Job Newsletter',
  html: `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: auto; padding: 40px 30px; background-color: #f9f9f9; border: 1px solid #e5e7eb; border-radius: 8px; color: #111827;">
      <h2 style="color: #1f2937; margin-bottom: 20px;">Thank You for Subscribing</h2>
      <p style="font-size: 16px; line-height: 1.6; margin-bottom: 16px;">
        We're glad to have you with us. Your subscription to our job newsletter is confirmed.
      </p>
      <p style="font-size: 16px; line-height: 1.6; margin-bottom: 16px;">
        Every week, you'll receive curated job and internship opportunities, along with actionable tips to help you advance your career.
      </p>
      <p style="font-size: 16px; line-height: 1.6; margin-bottom: 32px;">
        If you ever have questions or suggestions, feel free to reach out. We're here to support your journey.
      </p>
      <div style="border-top: 1px solid #e5e7eb; padding-top: 16px; font-size: 14px; color: #6b7280;">
        Best regards,<br/>
        The Prospetlyne Team
      </div>
    </div>
  `
};

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Confirmation email sent successfully' });
  } catch (err) {
    console.error('Failed to send email:', err);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

module.exports = router;
