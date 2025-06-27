<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <div class="app-bg">
    <nav class="navbar" v-if="route.path !== '/'">
      <div class="logo-wrap">
        <img src="@/assets/logo.png" alt="Cyber War Room Logo" class="logo" />
        <span class="brand">CYBER WAR ROOM</span>
      </div>
      <ul class="nav-links">
        <li><router-link to="/" exact-active-class="active">HOME</router-link></li>
        <li><router-link to="/about" exact-active-class="active">ABOUT</router-link></li>
        <li><router-link to="/scenarios" exact-active-class="active">SCENARIOS</router-link></li>
        <li><router-link to="/pricing" exact-active-class="active">PRICING</router-link></li>
        <li><router-link to="/login" exact-active-class="active">LOGIN</router-link></li>
      </ul>
    </nav>
    <router-view />
    <footer class="footer-bar" v-if="route.path !== '/'">
      <ul>
        <li>PRODUCTS</li>
        <li>SUPPORT</li>
        <li>TERMS & CONDITIONS</li>
        <li>PRIVACY POLICY</li>
      </ul>
    </footer>
  </div>
</template>

<style scoped>
.app-bg {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #0a0a13;
}
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 3rem 1.5rem 2rem;
  background: rgba(10, 10, 19, 0.95);
  box-shadow: 0 2px 24px 0 #0ff2, 0 1.5px 0 #1e1e2f;
  z-index: 10;
}
.logo-wrap {
  display: flex;
  align-items: center;
}
.logo {
  height: 40px;
  margin-right: 1rem;
}
.brand {
  color: #fff;
  font-size: 1.4rem;
  font-weight: bold;
  letter-spacing: 2px;
  text-shadow: 0 0 8px #ff0055, 0 0 2px #fff;
}
.nav-links {
  display: flex;
  gap: 2.2rem;
  list-style: none;
}
.nav-links li {
  position: relative;
}
.nav-links a {
  color: #b6eaff;
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-decoration: none;
  padding: 0.3rem 0.7rem;
  border-radius: 6px;
  transition: background 0.2s, color 0.2s, box-shadow 0.2s;
}
.nav-links a:hover, .nav-links .active {
  background: linear-gradient(90deg, #0ff2, #ff0055);
  color: #fff;
  box-shadow: 0 0 8px #0ff2, 0 0 2px #ff0055;
}
.footer-bar {
  margin-top: auto;
  background: rgba(10, 10, 19, 0.95);
  color: #b6eaff;
  padding: 1.2rem 0;
  text-align: center;
  font-size: 1rem;
  letter-spacing: 1px;
  box-shadow: 0 -2px 24px 0 #0ff2, 0 -1.5px 0 #1e1e2f;
}
.footer-bar ul {
  display: flex;
  justify-content: center;
  gap: 2.5rem;
  list-style: none;
  padding: 0;
  margin: 0;
}
.footer-bar li {
  cursor: pointer;
  transition: color 0.2s;
}
.footer-bar li:hover {
  color: #ff0055;
}
</style>
