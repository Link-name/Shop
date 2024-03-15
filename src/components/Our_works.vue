<template>
    <Header/>
    <Our_works/>
    <Footer/>
    <Backet/>
    <Project/>


    </template>
    
    <script>
    
    
    import Header from './stand/Header2.vue'
    import Our_works from './stand/Our_works.vue'
    import Footer from './stand/Footer.vue'
    import Backet from './Backet.vue'
    import Project from './Project.vue'

 
      export default {
        components:{
          Header,
          Footer,
          Our_works,
          Backet,
          Project
 
        }
        
      }
    </script>
    
    <style lang="scss" scoped>
    
    </style>