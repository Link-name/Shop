<template>
    <div id="app">
        <section class="gallery">
          <h1 class="gallery__title">Наcтоящая красота здесь!</h1>
          <div class="gallery__categories">
            <a v-for="category in categories" :key="category" class="gallery__categories__link"
              :class="{ 'active': currentCategory === category }" @click.prevent="filterProducts(category)">
              {{ category }}
            </a>
          </div>
          <div class="product-container">
            <ProductItem v-for="product in filteredProducts" :key="product.id" :product="product">
            </ProductItem>
          </div>
        </section>
      </div>
    </template>
    <script>
    import { ref, computed, watch } from 'vue';
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
        const currentCategory = ref(route.params.category);
        const products = computed(() => store.state.products);
        const filteredProducts = ref([]);
        const filterProducts = (categoryName) => {
          currentCategory.value = categoryName;
          filteredProducts.value = categoryName
            ? products.value.filter(product => product.category === categoryName)
            : products.value;
        };
    
    
        watch(() => route.params, (newParams) => {
          filterProducts(newParams.category || null);
        }, { immediate: true });
        filterProducts(currentCategory.value);
    
        const categories = computed(() => store.state.categories);
    
        return {
          categories,
          filteredProducts,
          currentCategory,
          filterProducts
        };
      }
    };
    </script>