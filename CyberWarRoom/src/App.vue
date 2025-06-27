<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <div class="app-bg">
    <router-view />
  </div>
</template>

<style scoped>
.app-bg {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #0a0a13;
}
</style>
