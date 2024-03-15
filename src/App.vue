<template>

  <router-view />
</template>

<script>
import Home from './components/Home.vue';
import Our_works from './components/Our_works.vue';
import Contact from './components/Contact.vue';
import Backet from './components/Backet.vue';
import Project from './components/Project.vue';





export default {
  components: {
    Home,
    Our_works,
    Contact,
    Backet,
    Project
  },
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
}
</style>