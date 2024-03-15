<template>
<Header/>
<Gallery/>
<Order/>
<Media_content/>
<Reviews/>
<Footer/>
<router-view/>
<Backet/>



</template>

<script>


import Header from './stand/Header.vue'
import Gallery from './stand/Gallery.vue'
import Order from './stand/Order.vue'
import Reviews from './stand/Reviews.vue'
import Media_content from './stand/Media_content.vue'
import Footer from './stand/Footer.vue'
import Backet from './Backet.vue'
  export default {
    components:{
      Header,
      Footer,
      Gallery,
      Order,
      Reviews,
      Media_content,
      Backet
    }
    
  }
</script>

<style>

</style>