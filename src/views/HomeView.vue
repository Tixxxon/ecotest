<template>
  <Header />
  <Main />
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/Base/MainHeader.vue';
import Footer from '@/components/Base/MainFooter.vue';
import Main from '@/components/MainContent.vue';

export default defineComponent({
  components: {
    Header,
    Footer,
    Main,
  },
});
</script>
