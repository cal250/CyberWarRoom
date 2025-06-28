<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s cubic-bezier(.4,0,.2,1);
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.fade-enter-to, .fade-leave-from {
  opacity: 1;
}

button,
.select-btn,
.arrow-btn {
  transition: box-shadow 0.3s, background 0.2s, color 0.2s, transform 0.2s;
}
button:hover,
.select-btn:hover,
.arrow-btn:hover {
  box-shadow: 0 0 16px #22d3ee, 0 0 32px #22d3ee80;
  background: #22d3ee;
  color: #111;
  transform: translateY(-2px) scale(1.04);
}
button:active,
.select-btn:active,
.arrow-btn:active {
  transform: scale(0.97);
  box-shadow: 0 0 8px #22d3ee;
}
</style>
