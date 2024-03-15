import { createStore } from 'vuex';
import { categories, products } from '@/data/productsData.js'; // Добавьте эту строку
import { infoProducts } from '@/data/infoProducts';

// Создание нового хранилища
const store = createStore({
  state() {
    return {
      cartItems: [],
      categories,
      products,
      infoProducts,
      isCartModalVisible: false,
      isProductModalVisible: false,
      currentProduct: null,
      currentProductId: null,
    }
  },
  mutations: {
    // метода карзины удаление и добавления
    toggleCartModal(state) {
      state.isCartModalVisible = !state.isCartModalVisible;
    },
    addToCart(state, item) {
      const existingItem = state.cartItems.find(product => product.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...item, quantity: 1 });
      }
    },
    removeFromCart(state, itemId) {
      const index = state.cartItems.findIndex(item => item.id === itemId);
      if (index !== -1) {
        state.cartItems.splice(index, 1);
      }
    },
    setCurrentProductId(state, id) {
      state.currentProductId = id;
    },
    setModalVisibility(state, isVisible) {
      state.isModalVisible = isVisible;
    },
    setProductModalVisibility(state, isVisible) {
      state.isProductModalVisible = isVisible;
    },
    setCardVisibility(state, isVisible) {
      state.isProductModalVisible = isVisible;
    },
    setCurrentProduct(state, product) {
      state.currentProduct = product; // Установите null для закрытия
    },
    updateCartItemQuantity(state, { id, quantity }) {
      const cartItem = state.cartItems.find(item => item.id === id);
      if (cartItem) {
        cartItem.quantity = quantity;
      }
    },
    // Удаление товара из корзины
    removeCartItem(state, id) {
      state.cartItems = state.cartItems.filter(item => item.id !== id);
    },

  },
  actions: {
    addToCart({ commit }, item) {
      commit('addToCart', item);
    },
    removeFromCart({ commit }, itemId) {
      commit('removeFromCart', itemId);
    },
    showProductDetails({ commit }, productId) {
      commit('setCurrentProductId', productId); // Установка текущего productId
      commit('setProductModalVisibility', true); // Открытие модального окна для продукта
    },
    setCurrentProduct({ commit }, product) {
      commit('setCurrentProduct', product);
    },
    updateQuantity({ commit }, { id, quantity }) {
      commit('updateCartItemQuantity', { id, quantity });
    },
    removeFromCart({ commit }, id) {
      commit('removeCartItem', id);
    },
  },
  getters: {
    cartItems: state => state.cartItems,
    totalPrice: state => {
      return state.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    },
    currentProduct(state) {
      return state.infoProducts.find(product => product.id === state.currentProductId);
    },
    cartItemCount(state) {
      return state.cartItems.reduce((total, item) => total + item.quantity, 0);
    }
  }
})

export default store;
