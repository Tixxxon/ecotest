<template>
  <Header />
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/Base/MainHeader.vue';
import Footer from '@/components/Base/MainFooter.vue';

export default defineComponent({
  components: {
    Header,
    Footer,
  },
});
</script>
