<script setup>
import { ref, provide, onMounted, nextTick } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()

// Global mute state
const isMuted = ref(false)
const toggleMute = () => { isMuted.value = !isMuted.value }
provide('isMuted', isMuted)
provide('toggleMute', toggleMute)

// Audio logic
const audioSrc = new URL('@/assets/Royalty Free Music for Video Creators.mp3', import.meta.url).href
const bgm = ref(null)

onMounted(() => {
  nextTick(() => {
    document.body.addEventListener('click', () => {
      if (bgm.value) {
        bgm.value.muted = isMuted.value
        bgm.value.volume = 0.5
        bgm.value.play().catch(() => {})
      }
    }, { once: true })
  })
})

// React to mute changes
definedWatch(isMuted, (val) => {
  if (bgm.value) {
    bgm.value.muted = val
  }
})
function definedWatch(source, cb) {
  if (typeof watch !== 'undefined') watch(source, cb)
}
</script>

<template>
  <div id="app">
    <!-- Global background music -->
    <audio
      ref="bgm"
      :src="audioSrc"
      loop
      :muted="isMuted"
      style="display:none"
    ></audio>
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
