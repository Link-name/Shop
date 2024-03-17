const axios = require('axios');

module.exports = async (req, res) => {
  // Проверяем метод запроса
  if (req.method !== 'POST') {
    return res.status(405).send({ message: 'Только POST запросы разрешены' });
  }

  // Извлекаем данные из запроса
  const { name, email, phone, comments, cartItems } = req.body;

  // Формируем сообщение для Telegram
  let message = `Новый заказ:\nИмя: ${name}\nEmail: ${email}\nТелефон: ${phone}\nКомментарии: ${comments}\nЗаказ:\n`;
  cartItems.forEach(item => {
    message += `${item.name} - ${item.quantity}шт. - ${item.price}р. за шт.\n`;
  });

  // Отправляем сообщение через Telegram API
  try {
    const response = await axios.post(`https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendMessage`, {
      chat_id: process.env.CHAT_ID,
      text: message
    });
    res.send({ message: 'Заказ успешно отправлен!' });
  } catch (error) {
    console.error('Ошибка при отправке сообщения:', error);
    res.status(500).send({ message: 'Ошибка при отправке заказа' });
  }
};
