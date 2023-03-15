const nodemailer = require('nodemailer');

async function mailer (email, products) {

    const transporter = nodemailer.createTransport({

        host: 'smtp.ethereal.email',
        port: 587,
        auth: {

            user: 'gust80@ethereal.email',
            pass: 'dqn22VdrqByjajfAUx'
        }
    });

    let info = await transporter.sendMail({

        from: 'gust80@ethereal.email',
        to: `${email}`, 
        subject: "Thank you for your purchase.",
        text: `You bought: ${products.map(game => game.name).join(", ")}`
    }); 

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

module.exports = { mailer }