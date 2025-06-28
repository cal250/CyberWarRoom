<template>
  <div class="scenario-card-svg" @mouseenter="hovered = true" @mouseleave="hovered = false">
    <svg
      class="scenario-svg"
      viewBox="0 0 598 298"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath id="card-clip">
          <path d="M109 0H598V170.741L470.704 298H0V109L109 0Z" />
        </clipPath>
      </defs>
      <image
        :href="resolvedImage"
        x="0"
        y="0"
        width="598"
        height="298"
        clip-path="url(#card-clip)"
        preserveAspectRatio="xMidYMid slice"
      />
      <path
        d="M109 0H598V170.741L470.704 298H0V109L109 0Z"
        :stroke="hovered ? '#22d3ee' : '#66E0F8'"
        stroke-width="4"
        fill="none"
        :filter="hovered ? 'url(#glow)' : ''"
      />
      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#22d3ee" />
        <feDropShadow dx="0" dy="0" stdDeviation="12" flood-color="#22d3ee" />
      </filter>
    </svg>
    <button class="arrow-btn">
      <span>&#8594;</span>
    </button>
    <div class="scenario-title">
      <slot>{{ title }}</slot>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
const props = defineProps({
  title: String,
  image: String
})
const hovered = ref(false)
const resolvedImage = computed(() => {
  try {
    return new URL(props.image, import.meta.url).href
  } catch {
    return props.image
  }
})
</script>

<style scoped>
.scenario-card-svg {
  width: 598px;
  height: 298px;
  position: relative;
  display: flex;
  align-items: flex-end;
  margin: 0 24px 32px 0;
  overflow: hidden;
}
.scenario-svg {
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 0;
  transition: filter 0.3s;
  position: relative;
  z-index: 1;
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
  z-index: 2;
}
</style> 