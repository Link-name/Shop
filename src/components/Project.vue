<template>
  <div v-if="currentProduct" @click.self="closeCard" class="container1">
    <div class="contener" style="background-color: rgb(245, 245, 220);">
      <div class="product-card" v-if="isCardVisible && currentProduct">
        <div class="overlay" v-if="zoomed" @click="zoomed = false"></div>
        <div>
          <div class="image-container">
            <img class="big__image" :class="{ 'zoomed-in': zoomed }" :src="currentProduct.images[currentImageIndex].src"
              :alt="currentProduct.images[currentImageIndex].alt" @click="toggleZoom">
            <button class="swiper-button-next" @click="nextImage">›</button>
            <button class="swiper-button-prev" @click="prevImage">‹</button>
          </div>
          <div class="thumbnails">
            <img height="100px" v-for="(item, index) in currentProduct.images" :key="index" :src="item.src"
              :alt="item.alt" :class="{ active: index === currentImageIndex }" @click="changeImage(index)" />
          </div>
        </div>
        <div class="product-details">
          <span class="close-btn" @click="closeCard">✖</span>
          <h2 class="product-details__title">{{ currentProduct.name }}</h2>
          <p class="product-details__price">Стоимость: {{ currentProduct.price }} р.</p>
          <button class="product-details__button" @click="addToCart">Заказать</button>
          <p class="product-details__text">Описание товара: <br> {{ currentProduct.description }}</p>
          <p class="product-details__text">Размеры товара: <br> {{ currentProduct.dimensions }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      currentImageIndex: 0, 
      zoomed: false, 
    };
  },
  computed: {
    ...mapGetters(['currentProduct']),
    isCardVisible() {
      // Проверка, выбран ли продукт и существует ли он
      return this.currentProduct !== undefined && this.currentProduct !== null;
    }
  },
  methods: {
    toggleZoom() {
      // Переключение состояния увеличения изображения
      this.zoomed = !this.zoomed;
    },
    nextImage() {
      // Переход к следующему изображению
      if (this.currentImageIndex < this.currentProduct.images.length - 1) {
        this.currentImageIndex += 1;
      } else {
        this.currentImageIndex = 0; // Возврат к первому изображению
      }
    },
    prevImage() {
      // Переход к предыдущему изображению
      if (this.currentImageIndex > 0) {
        this.currentImageIndex -= 1;
      } else {
        this.currentImageIndex = this.currentProduct.images.length - 1; // Переход к последнему изображению
      }
    },
    changeImage(index) {
      // Изменение текущего изображения на выбранное
      this.currentImageIndex = index;
    },
    closeCard() {
      this.$store.dispatch('showProductDetails', false);
    },
    addToCart() {
      if (this.currentProduct) {
        // Добавляем продукт в корзину
        this.$store.dispatch('addToCart', {
          id: this.currentProduct.id,
          name: this.currentProduct.name,
          price: this.currentProduct.price,
          image: this.currentProduct.images[0].src, // Предполагаем, что у продукта есть изображения
          quantity: 1
        });
        // Инициируем анимацию
        this.animateProductToCart();
      }
    },

    animateProductToCart() {
      const animElem = document.createElement('div');
      animElem.style.position = 'fixed';
      animElem.style.zIndex = '10000';
      animElem.style.left = '45%'; 
      animElem.style.top = '25%';
      animElem.style.width = '50px';
      animElem.style.height = '50px'; 
      animElem.style.backgroundImage = `url(${this.currentProduct.images[0].src})`;
      animElem.style.backgroundSize = 'cover';
      animElem.style.borderRadius = '50%';
      animElem.style.transition = 'all 2s ease-in-out';

      document.body.appendChild(animElem);

      // Через маленький промежуток времени меняем позицию и размер для анимации "полета"
      setTimeout(() => {
        const cartIconRect = document.querySelector('.nav__cart').getBoundingClientRect();
        animElem.style.left = `${cartIconRect.left}px`;
        animElem.style.top = `${cartIconRect.top}px`;
        animElem.style.width = '40px';
        animElem.style.height = '40px';
        animElem.style.opacity = '0';
      }, 10);

      // Удаляем элемент после анимации
      setTimeout(() => {
        animElem.remove();
      }, 5100); 
    },
    order() {
      // Обработка заказа
      // Здесь должен быть код для добавления продукта в корзину или отображения формы заказа
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Bad+Script&family=Cormorant+Infant:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=Lobster&family=Pacifico&display=swap');
@import '@/assets/style/project/project';
</style>