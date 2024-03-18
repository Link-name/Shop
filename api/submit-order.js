const axios = require('axios');


module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).send({ message: 'Только POST запросы разрешены' });
  }

  const { formType, name, email, phone, comments, cartItems} = req.body;

  // Определяем логику обработки в зависимости от типа формы
  let message = '';

  if (formType === 'contactForm') {
    // Логика для формы обратной связи
    message = `Новое сообщение:\nИмя: ${name}\nТелефон: ${phone}\nСообщение: ${comments}`;
  } else if (formType === 'orderForm') {
    // Логика для формы заказа
    message = `Новый заказ:\nИмя: ${name}\nEmail: ${email}\nТелефон: ${phone}\nКомментарии: ${comments}\nЗаказ:\n`;
    cartItems.forEach(item => {
      message += `${item.name} - ${item.quantity}шт. - ${item.price}р. за шт.\n`;
    });
  } else {
    // Неизвестный тип формы
    return res.status(400).send({ message: 'Неизвестный тип формы' });
  }

  // Отправляем сообщение через Telegram API
  try {
    await axios.post(`https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendMessage`, {
      chat_id: process.env.CHAT_ID,
      text: message
    });
    res.send({ message: formType === 'contactForm' ? 'Сообщение успешно отправлено!' : 'Заказ успешно отправлен!' });
  } catch (error) {
    console.error('Ошибка при отправке сообщения:', error);
    res.status(500).send({ message: 'Ошибка при отправке запроса' });
  }
};
