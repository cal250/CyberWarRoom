<template>
  <div class="scenario-card" :style="{ backgroundImage: `url(${image})` }">
    <button class="arrow-btn">
      <span>&#8594;</span>
    </button>
    <div class="scenario-title">
      <slot>{{ title }}</slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  image: String
})
</script>

<style scoped>
.scenario-card {
  width: 420px;
  height: 220px;
  background-size: cover;
  background-position: center;
  position: relative;
  clip-path: polygon(7% 0, 100% 0, 93% 100%, 0% 100%);
  display: flex;
  align-items: flex-end;
  margin: 0 24px 32px 0;
  box-shadow: 0 0 32px 0 rgba(34, 211, 238, 0.12);
  border: 2px solid #22d3ee;
  overflow: hidden;
}
.scenario-title {
  background: rgba(10, 20, 40, 0.72);
  color: #fff;
  font-family: 'Fira Mono', 'Consolas', 'Courier New', monospace;
  font-size: 1.1rem;
  padding: 16px 32px;
  border: 1px solid #22d3ee;
  margin: 0 0 24px 24px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  position: absolute;
  left: 0;
  bottom: 0;
}
.arrow-btn {
  position: absolute;
  top: 18px;
  right: 28px;
  background: #6ee7ff;
  color: #111;
  border: none;
  border-radius: 6px;
  width: 48px;
  height: 38px;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 2;
  transition: background 0.2s, color 0.2s;
}
.arrow-btn:hover {
  background: #22d3ee;
  color: #fff;
}
</style> 