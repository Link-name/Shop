<template>
    <section class="section container">
      <div class="section__reviews">
        <h2 class="section__title">Отзывы</h2>
        <div class="container__reviews__text">
          <div class="section__reviews__text" v-for="(review, index) in reviews" :key="index">
            <p class="section__reviews__text-nik">{{ review.text }}</p>
            <h4 class="section__reviews__nik">{{ review.author }}</h4>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>

import { ref } from 'vue';
  export default {
    setup() {
      const reviews = ref([
        {
          text: "Мне очень нравится новая кухня. Все отлично, начиная от дизайна до воплощения.",
          author: "Ольга Петрова",
        },
        {
          text: "Мне очень нравится новая кухня. Все отлично, начиная от дизайна до воплощения.",
          author: "Ольга Петрова",
        },
        {
          text: "Мне очень нравится новая кухня. Все отлично, начиная от дизайна до воплощения.",
          author: "Ольга Петрова",
        },
      ]);
  
      return { reviews };
    },
  };
  </script>
  
  <style lang="scss" scoped>
  @import '@/assets/style/reviews/reviews';

  </style>
  