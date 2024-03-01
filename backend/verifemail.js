// server.js

const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
    service: 'your_email_service_provider',
    auth: {
        user: 'your_email@example.com',
        pass: 'your_email_password'
    }
});

// Route for handling registration
app.post('/register', (req, res) => {
    // Extract email from request body
    const { email } = req.body;

    // Create email verification token (You can use a library like crypto to generate random tokens)
    const verificationToken = 'your_verification_token';

    // Send verification email
    const mailOptions = {
        from: 'your_email@example.com',
        to: email,
        subject: 'Email Verification',
        text: `Please click the following link to verify your email: http://yourdomain.com/verify/${verificationToken}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Verification email sent successfully');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
