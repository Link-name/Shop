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

const form = ref({
  name: '',
  phone: '',
  message: '',
});

const submitForm = () => {
  // Здесь может быть код для обработки формы, например, отправка данных на сервер
  console.log(form.value); // Выводит текущие значения формы в консоль
};
</script>

<style lang="scss" scoped>
@import '@/assets/style/contactForm/contactForm';
</style>