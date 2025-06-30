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

// Cursor dot logic
const dotX = ref(window.innerWidth / 2)
const dotY = ref(window.innerHeight / 2)
const dotVisible = ref(false)
let animationFrame

function animateDot(e) {
  dotVisible.value = true
  const targetX = e.clientX
  const targetY = e.clientY
  cancelAnimationFrame(animationFrame)
  function move() {
    dotX.value += (targetX - dotX.value) * 0.18
    dotY.value += (targetY - dotY.value) * 0.18
    if (Math.abs(dotX.value - targetX) > 0.5 || Math.abs(dotY.value - targetY) > 0.5) {
      animationFrame = requestAnimationFrame(move)
    } else {
      dotX.value = targetX
      dotY.value = targetY
    }
  }
  move()
}
function hideDot() {
  dotVisible.value = false
}

onMounted(() => {
  nextTick(() => {
    document.body.addEventListener('click', () => {
      if (bgm.value) {
        bgm.value.muted = isMuted.value
        bgm.value.volume = 0.5
        bgm.value.play().catch(() => {})
      }
    }, { once: true })
    // Cursor dot events
    const app = document.getElementById('app')
    app.addEventListener('mousemove', animateDot)
    app.addEventListener('mouseenter', () => { dotVisible.value = true })
    app.addEventListener('mouseleave', hideDot)
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
    <!-- Blue glowing cursor dot -->
    <div
      v-if="dotVisible"
      :style="{
        position: 'fixed',
        left: dotX + 'px',
        top: dotY + 'px',
        width: '18px',
        height: '18px',
        background: 'radial-gradient(circle, #3cf 70%, #09f 100%)',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 9999,
        boxShadow: '0 0 24px 8px #3cf, 0 0 48px 16px #09f',
        transform: 'translate(-50%, -50%)',
        transition: 'background 0.2s',
        opacity: 0.85
      }"
    ></div>
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
