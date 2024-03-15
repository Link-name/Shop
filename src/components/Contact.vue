<template>
    <div>
        <Header />
        <ContactForm />
        <Footer />
        <Backet/>
        
    </div>

</template>

<script>
import Header from './stand/Header2.vue'
import ContactForm from './stand/ContactForm.vue'
import Footer from './stand/Footer.vue'
import Backet from './Backet.vue'

export default {
    components: {
        Header,
        Footer,
        ContactForm,
        Backet

    }

}
</script>

<style lang="scss" scoped>
@import '@/assets/style/footer/footer';
@import '@/assets/style/header/header';

div {
    background-color:#f5f5dc;
}


</style>