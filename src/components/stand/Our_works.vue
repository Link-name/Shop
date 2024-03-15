<template>
  <div id="app">
    <section class="gallery">
      <h1 class="gallery__title">Настоящая красота здесь!</h1>
      <div class="gallery__categories">
        <a v-for="category in categories" :key="category" class="gallery__categories__link"
          :class="{ 'active': currentCategory === category }" @click.prevent="setCurrentCategory(category)">
          {{ category }}
        </a>
      </div>
      <div class="product-container">
        <ProductItem v-for="product in displayedProducts" :key="product.id" :product="product" />
      </div>
      <div class="page_numbering">
        <span>Стр. {{ loadedPages }} из {{ totalPages }}</span>
      </div>
      <button class="page_reload_button" v-if="hasMoreProducts" @click="loadMoreProducts">Загрузить еще</button>
    </section>
  </div>
</template>

<script>
import { ref, computed, watch, onMounted } from 'vue';
import { useStore } from 'vuex';
import ProductItem from './Our_works_ProductItem.vue';

export default {
  components: {
    ProductItem,
  },
  setup() {
    const productsPerPage = 6;
    const currentCategory = ref(null);
    const displayedProducts = ref([]);
    const store = useStore();

    const allFilteredProducts = computed(() => {
      return currentCategory.value
        ? store.state.products.filter(product => product.category === currentCategory.value)
        : store.state.products;
    });

    const totalPages = computed(() => Math.ceil(allFilteredProducts.value.length / productsPerPage));
    const loadedPages = computed(() => Math.ceil(displayedProducts.value.length / productsPerPage));
    const hasMoreProducts = computed(() => displayedProducts.value.length < allFilteredProducts.value.length);

    const setCurrentCategory = (category) => {
      currentCategory.value = category;
      displayedProducts.value = allFilteredProducts.value.slice(0, productsPerPage);
    };

    const loadMoreProducts = () => {
      const nextIndex = displayedProducts.value.length;
      const nextProducts = allFilteredProducts.value.slice(nextIndex, nextIndex + productsPerPage);
      displayedProducts.value = [...displayedProducts.value, ...nextProducts];
    };

    onMounted(() => {
      setCurrentCategory(null); // Or set to a default category
    });

    return {
      displayedProducts,
      categories: store.state.categories,
      currentCategory,
      setCurrentCategory,
      loadMoreProducts,
      hasMoreProducts,
      totalPages,
      loadedPages,
    };
  },
};
</script>







<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Bad+Script&family=Cormorant+Infant:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=Lobster&family=Pacifico&display=swap');
@import '@/assets/style/our_works/our_works';
</style>