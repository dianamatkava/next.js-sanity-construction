import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    console.log(req.body);

    if (!name || !email || !message) {
      return res.status(422).json({ message: 'All fields are required' });
    }

    const SMTP_SERVER_HOST = process.env.SMTP_SERVER_HOST;
    const SMTP_SERVER_PORT = process.env.SMTP_SERVER_PORT;
    const SMTP_SERVER_USERNAME = process.env.SMTP_SERVER_USERNAME;
    const SMTP_SERVER_PASSWORD = process.env.SMTP_SERVER_PASSWORD;

    const transporter = nodemailer.createTransport({
      host: SMTP_SERVER_HOST,
      port: Number(SMTP_SERVER_PORT),
      secure: true,
      auth: {
        user: SMTP_SERVER_USERNAME,
        pass: SMTP_SERVER_PASSWORD,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Message from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      return res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
