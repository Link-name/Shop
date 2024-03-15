<template>
    <div class="product-card">
      <div class="swiper" ref="swiperContainer">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(image, index) in product.images" :key="index">
            <img :src="image" :alt="`Image ${index + 1} of ${product.name}`">
          </div>
        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </div>
      <div class="product-details">
        <span class="close-btn" @click="closeCard">✖</span>
        <h2>{{ product.name }}</h2>
        <p>{{ product.price }}</p>
        <p>{{ product.description }}</p>
        <button @click="orderProduct">Order</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, defineProps, emit } from 'vue';
  import Swiper, { Navigation } from 'swiper';
  import 'swiper/css';
  import 'swiper/css/navigation';
  
  const props = defineProps({
    product: Object
  });
  
  const swiperContainer = ref(null);
  
  onMounted(() => {
    new Swiper(swiperContainer.value, {
      modules: [Navigation],
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  });
  
  function closeCard() {
    emit('close');
  }
  
  function orderProduct() {
    console.log(`Order placed for: ${props.product.name}`);
  }
  </script>
  
  <style scoped>

  </style>
  