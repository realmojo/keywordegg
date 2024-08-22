<template>
  <div>
    <Header />
    <main class="container flex justify-center max-w-screen-2xl">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from '~/components/layouts/Header.vue';
import Footer from '~/components/layouts/Footer.vue';
</script>
