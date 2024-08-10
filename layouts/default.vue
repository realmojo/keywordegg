<template>
  <div>
    <Header />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from '~/components/layouts/Header.vue';
import Footer from '~/components/layouts/Footer.vue';
</script>
