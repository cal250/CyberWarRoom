<template>
  <router-link :to="to" class="nav-svg-btn" :class="{ active, login: isLogin }">
    <svg width="170" height="40" viewBox="0 0 170 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M170 24.4053L154.405 40H0V21.9326L21.9326 0H170V24.4053Z"
        :fill="svgFill"
        fill-opacity="0.92"
      />
    </svg>
    <span class="nav-svg-label" :class="{ 'active-label': active, 'login-label': isLogin }">{{ label }}</span>
  </router-link>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  to: { type: String, required: true },
  label: { type: String, required: true },
  active: { type: Boolean, default: false },
})
const isLogin = computed(() => props.label.toUpperCase() === 'LOGIN')
const svgFill = computed(() => {
  if (isLogin.value) {
    return props.active ? '#22d3ee' : '#6ee7ff';
  }
  return props.active ? '#fff' : '#3a3e47';
})
</script>

<style scoped>
.nav-svg-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 170px;
  height: 40px;
  margin: 0 8px;
  text-decoration: none;
  transition: filter 0.2s;
}
.nav-svg-btn.active,
.nav-svg-btn:hover {
  filter: drop-shadow(0 0 8px #22d3ee);
}
.nav-svg-label {
  position: absolute;
  left: 0;
  top: 0;
  width: 170px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Oswald', Arial, sans-serif;
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #fff;
  pointer-events: none;
  user-select: none;
  transition: color 0.2s;
}
.nav-svg-label.active-label {
  color: #111;
}
.nav-svg-label.login-label {
  color: #fff;
}
</style> 