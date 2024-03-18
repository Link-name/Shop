<template>
  <div class="body-container">
    <div class="contact-form">
      <h1 class="contact-form__h1">Свяжитесь с нами</h1>
      <form @submit.prevent="submitForm">
        <input type="text" v-model="form.name" placeholder="Имя">
        <input type="tel" v-model="form.phone" placeholder="Номер телефона">
        <textarea v-model="form.message" placeholder="Сообщение"></textarea>
        <button type="submit">Отправить</button>
      </form>
      <div class="contact-info">
        <p class="contact-info__p">Столяр Иванов</p>
        <p class="contact-info__p">Красная площадь, 1, Москва, 109012, Россия</p>
        <a class="contact-info__link" href="mailto:demo@webnode.com">demo@webnode.com</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const form = ref({
  name: '',
  phone: '',
  message: '',
});

const submitForm = async () => {
  const formData = {
    name: form.value.name,
    phone: form.value.phone,
    message: form.value.message,
  };

  try {
    await axios.post('/api/contact', formData);
    alert('Ваше сообщение отправлено, спасибо!');
    // Очистка формы после отправки
    form.value.name = '';
    form.value.phone = '';
    form.value.message = '';
  } catch (error) {
    console.error('Ошибка при отправке сообщения:', error);
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/style/contactForm/contactForm';
</style>