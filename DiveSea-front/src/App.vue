<script setup>
import { RouterLink, RouterView } from 'vue-router'
import MainHeader from './components/MainHeader.vue'
import MainFooter from './components/MainFooter.vue'
</script>

<template>
  <div class="page__body">
    <MainHeader />
<!--    <RouterLink to="/">Home</RouterLink>-->
<!--    <RouterLink to="/about">About</RouterLink>-->
    <RouterView />
    <MainFooter />
  </div>
</template>

<style scoped>

</style>
