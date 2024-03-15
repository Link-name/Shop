<template>
    <div class="product">
      <img class="product__image" :src="product.image" :alt="product.title">
      <h2 class="product__title">{{ product.title }}</h2>
      <p class="product__description">{{ product.description }}</p>
      <div class="product__price">{{ product.price }} р.</div>
      <button class="product__button" @click="showDetails(product.id)">Подробнее</button>
    </div>
  </template>
  
  <script>
  export default {
    props: ['product'],
  methods: {
    
    showDetails(productId) {
    this.$store.dispatch('showProductDetails', productId);
    
  }
  }
  }
  </script>
  
  <style lang="scss" scoped>
@import '@/assets/style/our_works/our_works';
  </style>
  я