const fs = require('fs');
const path = require('path');
const nodemailer = require("nodemailer");
const handlebars = require("handlebars");

async function mailer (name, lastName, email, games) {

    const gameNames = games.map(game => game.dataValues.name).join(", ");
    let totalPrice = games.map(game => game.dataValues.price).reduce(

        (accumulator, currentValue) => accumulator + currentValue
    );
    totalPrice = Math.floor(totalPrice * 100) / 100;
    const fullDate = new Date();
    const date = fullDate.toDateString();
    const time = fullDate.toLocaleTimeString();

    const filePath = path.join(__dirname, '../assets/purchaseMail.html');
    const source = fs.readFileSync(filePath, 'utf-8').toString();
    const template = handlebars.compile(source);
    const replacements = { 
        
        fullName: `${name} ${lastName}`,
        games: gameNames, 
        prices: `US$${totalPrice.toFixed(2)}`, 
        date: `On ${date} at ${time}` 
    }
    const htmlToSend = template(replacements);

    const transporter = nodemailer.createTransport({

        service: "Gmail",
        auth: {
            user: "devgames3.team@gmail.com",
            pass: "xmapekazkfhyiwbh"
        }
    });

    let info = await transporter.sendMail({

        from: "'The DevGames3 Team' <devgames3.team@gmail.com>",
        to: `${email}`, 
        subject: "Thank you for your purchase.",
        html: htmlToSend
    }); 

    console.log("Message sent: %s", info.messageId);
}

module.exports = { mailer }