// This is a Next.js API route for sending contact form submissions to Gmail using nodemailer
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, phone, email, message, time } = req.body;

  // Configure nodemailer with Gmail SMTP
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'abhishekkumarbnglr7544@gmail.com',
      pass: process.env.GMAIL_APP_PASSWORD, // Use an app password for Gmail
    },
  });

  try {
    await transporter.sendMail({
      from: 'abhishekkumarbnglr7544@gmail.com',
      to: 'abhishekkumarbnglr7544@gmail.com',
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nPreferred Time: ${time}\nMessage: ${message}`,
    });
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to send email', error });
  }
}
