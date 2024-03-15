<template>
   <main>
      <section class="gallery">
         <h1 class="gallery__title">Наcтоящая красота здесь!</h1>
         <div class="gallery__categories">
           <a v-for="(category, index) in categories" :key="index" class="gallery__categories__link" href="#"
               @click.prevent="setActiveCategory(category)">
               <nobr></nobr>
               {{ category }}
            </a>
         </div>
         <div class="gallery__items">
            <div v-for="item in filteredItems" :key="item.title" class="gallery__items__item img-size">
               <a :href="item.link" @click.prevent="setActiveCategory(item.title)">
                  <img :src="item.imageSrc" :alt="item.title">
               </a>
               <h3 class="gallery__items__item__title">{{ item.title }}</h3>
            </div>
         </div>
      </section>
   </main>
</template>

<script>
import coasters from "@/assets/img/gallety_img/подставки.jpg"
import pouring__resin from "@/assets/img/gallety_img/со смолой.jpg"
import cutting__boards from "@/assets/img/gallety_img/разделочные_доски.jpg"
import tables from "@/assets/img/gallety_img/столики.jpg"
import trays from "@/assets/img/gallety_img/подносы.jpg"
import present from "@/assets/img/gallety_img/подарки.jpg"

export default {

   data() {
      return {
         trays: trays,
         categories: ["Подставки", "С эпоксидной смолой", "Разделочные доски", "Подносы", "Столики", "Подарки"],
         activeCategory: null, // Индекс активной категории
         items: [
            { title: 'Подставки', imageSrc: coasters, link: '#' },
            { title: 'С эпоксидной смолой', imageSrc: pouring__resin, link: '#' },
            { title: 'Разделочные доски', imageSrc: cutting__boards, link: '#' },
            { title: 'Столики', imageSrc: tables, link: '#' },
            { title: 'Подносы', imageSrc: trays, link: '#' },
            { title: 'Подарки', imageSrc: present, link: '#' },
         ],
      };
   },
   computed: {
      filteredItems() {
         if (this.activeCategory === null) return this.items;
         return this.items.filter(item => item.category === this.categories[this.activeCategory]);
      }
   },
   methods: {
      setActiveCategory(category) {

      if (this.categories.includes(category)) {
         this.$router.push({ name: 'Our_works', params: { category } });
      } else {
  
         const item = this.items.find(item => item.title === category);
         if (item) {
            this.$router.push({ name: 'Our_works', params: { category: item.category } });
         }
      }
   },
   }
};


</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Caveat&display=swap");
@import '@/assets/style/gallery/gallery';
@import '@/assets/style/header/header';
</style>