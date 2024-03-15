<template>
  <div class="header">
    <img class="header__img" :src="headerImg1" alt="подставка с гравировкой - магазин Лукоморье">
    <div class="header__top center">
      <nav class="nav nav--left">
        <router-link class="nav__link" to="/">Главная</router-link>
        <router-link class="nav__link" to="/our_works">Наши&nbsp;работы</router-link>
      </nav>
      <div class="logo">
        <h1 class="logo__text">Лукоморье</h1>
        <div class="logo__subtext">Мастерская по Дереву</div>
      </div>
      <nav class="nav nav--right">
        <div class="nav__search">
          <router-link class="nav__link" to="/contact">Контакты</router-link>
        </div>
        <div class="nav__cart">
          <span class="nav__link__
                        basket nav__link" @click="toggleCart">Корзина<svg class="nav__link__svg" width="25" height="25"
              viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M.75-.02a.75.75 0 100 1.5l.408-.006 1.606 1.281 1.839 6.881L4.237 12a2 2 0 102.188 2.722l5.705.028a2 2 0 100-1.5l-5.705-.028a2.007 2.007 0 00-.722-.898l.438-2.632 7.933.027 1.91-7.715H4.227L1.683-.026 1.68-.02v-.005L.75-.02z"
                fill="#f5f5dc" stroke="#805a2c" stroke-width="-1px -1px 0" fill-opacity="1.000000" />
            </svg>
            <span class="cart-item-count" v-if="cartItemCount > 0">{{ cartItemCount }}</span></span>
        </div>
      </nav>
    </div>
  </div>


</template>

<script>


import headerImg1 from "@/assets/img/header_img2.jpg"
import { mapGetters } from 'vuex';


export default {
  computed: {
    ...mapGetters(['cartItemCount'])
  },
  data() {
    return {
      headerImg1: headerImg1,
    }
  },
  methods: {
    toggleCart() {
      this.$store.commit('toggleCartModal');

    },


  }

}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Kablammo&family=Satisfy&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Comforter&family=Pacifico&display=swap');
@import '@/assets/style/header/header';

.nav__cart {
  position: relative;
}

.cart-item-count {
  position: absolute;
  top: 0;
  right: 0;
  background-color: rgba(235, 14, 14, 0.8);
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  transform: translate(50%, -50%);
  opacity: 0;
  animation: fadeIn 0.5s forwards;
  animation-delay: 1s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }

}

@media (min-width:1200px) and (max-width:1800px) {


  .header__img {
    height: 140px;
  }
}
</style>
