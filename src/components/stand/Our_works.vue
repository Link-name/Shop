<template>
    <section class="gallery">
      <h1 class="gallery__title">Настоящая красота здесь!</h1>
      <div class="gallery__categories">
        <router-link v-for="category in categories" 
                     :key="category" 
                     :to="{ name: 'Our_works', params: { category: category }}" 
                     class="gallery__categories__link"
                     :class="{ 'active': currentCategory === category }">
          {{ category }}
        </router-link>
      </div>
      <div class="product-container">
        <ProductItem v-for="product in displayedProducts" 
                     :key="product.id" 
                     :product="product" />
      </div>
      <div class="page_numbering">
        <span>Стр. {{ loadedPages }} из {{ totalPages }}</span>
      </div>
      <button class="page_reload_button" 
              v-if="hasMoreProducts" 
              @click="loadMoreProducts">
        Загрузить еще
      </button>
    </section>
</template>

<script>
import { ref, computed, watch, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRouter, useRoute } from 'vue-router';
import ProductItem from './Our_works_ProductItem.vue';

export default {
  components: {
    ProductItem,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();
    const currentCategory = ref(route.params.category || null);
    const displayedProducts = ref([]);
    const productsPerPage = 6;

    const allFilteredProducts = computed(() => {
      return currentCategory.value
        ? store.state.products.filter(product => product.category === currentCategory.value)
        : store.state.products;
    });

    const totalPages = computed(() => Math.ceil(allFilteredProducts.value.length / productsPerPage));
    const loadedPages = computed(() => Math.ceil(displayedProducts.value.length / productsPerPage));
    const hasMoreProducts = computed(() => displayedProducts.value.length < allFilteredProducts.value.length);

    watch(() => route.params.category, (newCategory) => {
      currentCategory.value = newCategory;
      displayedProducts.value = allFilteredProducts.value.slice(0, productsPerPage);
    }, { immediate: true });

    const loadMoreProducts = () => {
      const nextIndex = displayedProducts.value.length;
      const nextProducts = allFilteredProducts.value.slice(nextIndex, nextIndex + productsPerPage);
      displayedProducts.value.push(...nextProducts);
    };

    onMounted(() => {
      // Загружаем первую страницу продуктов при монтировании
      displayedProducts.value = allFilteredProducts.value.slice(0, productsPerPage);
    });

    const categories = computed(() => store.state.categories);

    return {
      displayedProducts,
      categories,
      currentCategory,
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