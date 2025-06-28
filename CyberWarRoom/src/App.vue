<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <div class="app-bg">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<style scoped>
.app-bg {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #0a0a13;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.8s cubic-bezier(.4,0,.2,1), filter 0.8s cubic-bezier(.4,0,.2,1);
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  filter: blur(12px);
}
.fade-enter-to, .fade-leave-from {
  opacity: 1;
  filter: blur(0);
}
</style>
