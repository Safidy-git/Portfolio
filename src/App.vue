<template>
  <div class="app">
    <Navigation />
    <router-view />  <!-- tout le contenu change selon la route -->
  </div>
</template>

<script setup>
import Navigation from './components/Navigation.vue'
</script>

<style scoped>
.app {
  width: 100%;
  position: relative;
}
</style>
