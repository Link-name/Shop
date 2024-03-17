const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();
const port =  8080; // Можете изменить порт, если необходимо

app.use(bodyParser.json());

const TELEGRAM_API = 'https://api.telegram.org/bot';
const ACCESS_TOKEN = '6908002647:AAHT-9tdj265myeZsJNahgNQGvEhenh0v0s';
const CHAT_ID = '-1001877560058';

app.post('/submit-order', async (req, res) => {
    const { name, email, phone, comments, cartItems } = req.body;
    let message = `Новый заказ:\nИмя: ${name}\nEmail: ${email}\nТелефон: ${phone}\nКомментарии: ${comments}\nЗаказ:\n`;

    cartItems.forEach(item => {
        message += `${item.name} - ${item.quantity}шт. - ${item.price}р. за шт.\n`;
    });

    try {
        await axios.post(`${TELEGRAM_API}${ACCESS_TOKEN}/sendMessage`, {
            chat_id: CHAT_ID,
            text: message
        });
        res.send('Заказ успешно отправлен!');
    } catch (error) {
        console.error('Ошибка при отправке сообщения:', error);
        res.status(500).send('Ошибка при отправке заказа');
    }
});

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});
