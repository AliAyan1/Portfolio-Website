import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type ResponseData = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Create a transporter object using Gmail's SMTP service
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'aliayan8967@gmail.com', // Replace with your email
        pass: 'AliAyan1234567000',   // Replace with your email password or app password
      },
    });

    const mailOptions = {
      from: email,  // Sender's email
      to: 'aliayan8967@gmail.com',  // Recipient's email
      subject: `Message from ${name}`,  // Subject of the email
      text: message,  // Body of the email
    };

    try {
      // Send email using transporter
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    // Method not allowed
    res.status(405).json({ message: 'Method not allowed' });
  }
}
