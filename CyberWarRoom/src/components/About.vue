<template>
  <div class="home-root home-blend-bg">
    <nav class="nav">
      <div class="nav-left">
        <img src="@/assets/logo.png" alt="Cyber War Room Logo" class="nav-logo-img" />
      </div>
      <div class="nav-right">
        <NavButton to="/" label="HOME" :active="$route.path === '/'" />
        <NavButton to="/about" label="ABOUT" :active="$route.path === '/about'" />
        <NavButton to="/scenarios" label="SCENARIOS" :active="$route.path === '/scenarios'" />
        <NavButton to="/pricing" label="PRICING" :active="$route.path === '/pricing'" />
        <!-- Sound Icon Button -->
        <button class="sound-btn" @click="toggleMute" :aria-label="isMuted ? 'Unmute sound' : 'Mute sound'">
          <svg v-if="isMuted" width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 9H5v6h4l5 5V4l-5 5z" stroke="#b6eaff" stroke-width="2" fill="none"/>
            <line x1="19" y1="5" x2="5" y2="19" stroke="#ff0055" stroke-width="2"/>
          </svg>
          <svg v-else width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 9H5v6h4l5 5V4l-5 5z" stroke="#b6eaff" stroke-width="2" fill="none"/>
            <path d="M15.54 8.46a5 5 0 010 7.07" stroke="#b6eaff" stroke-width="2" fill="none"/>
            <path d="M17.66 6.34a9 9 0 010 12.73" stroke="#b6eaff" stroke-width="2" fill="none"/>
          </svg>
        </button>
        <NavButton to="/login" label="LOGIN" :active="$route.path === '/login'" />
      </div>
    </nav>
    <!-- Black-to-transparent overlay -->
    <div class="black-gradient-overlay"></div>
    <!-- Animated overlays on the right -->
    <img src="@/assets/circling.png" alt="Circling" class="overlay-circling" />
    <img src="@/assets/lower third.png" alt="Lower Third" class="overlay-lower-third" />
    <!-- Futuristic HUD box under construction 11 -->
    <div class="overlay-hud-box"></div>
    
    
    <!-- Main content wrapper for flex grow -->
    <div class="blend-content-wrapper">
      <div class="blend-content">
        <h1 class="main-title">ABOUT</h1>
        <img src="@/assets/aboutf1.png" alt="What is a War Room?" class="about-img about-img-what animate-in-left" />
        <img src="@/assets/aboutf2 (1).png" alt="Our Mission" class="about-img about-img-mission animate-in-up" />
        <img src="@/assets/aboutf3.png" alt="Our Vision" class="about-img about-img-vision animate-in-right" />
      </div>
    </div>
    <!-- Footer -->
    <footer class="footer">
      <div class="footer-links">
        <a href="#" class="footer-link">PRODUCTS</a>
        <a href="#" class="footer-link">SUPPORT</a>
        <a href="#" class="footer-link">TERMS & CONDITIONS</a>
        <a href="#" class="footer-link">PRIVACY POLICY</a>
      </div>
      <div class="social-icons">
        <a href="https://linkedin.com" class="social-icon" target="_blank" title="LinkedIn">
          <span>in</span>
        </a>
        <a href="https://x.com" class="social-icon" target="_blank" title="X (Twitter)">
          <span>𝕏</span>
        </a>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { inject } from 'vue'
import { useRoute } from 'vue-router'
import NavButton from './NavButton.vue'
const $route = useRoute()

// Use global mute state
const isMuted = inject('isMuted')
const toggleMute = inject('toggleMute')
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap');
:root {
  --side-padding: 3vw;
  --footer-bottom-space: 18px;
  --top-space: 2.5rem;
}
.home-root {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #0a0a13;
  position: relative;
  overflow: hidden;
}
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 60px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 1000;
  font-family: 'Oswald', Arial, sans-serif;
}
.nav-left {
  display: flex;
  align-items: center;
  gap: 10px;
}
.nav-logo-img {
  height: 56px;
  margin-left: 12px;
  vertical-align: middle;
}
.nav-right {
  display: flex;
  gap: 36px;
  align-items: center;
}
.nav-trapezium {
  font-family: 'Oswald', Arial, sans-serif;
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #fff;
  background: rgba(34, 211, 238, 0.18);
  padding: 12px 28px 12px 20px;
  margin: 0 8px;
  text-decoration: none;
  display: inline-block;
  position: relative;
  transition: background 0.2s, color 0.2s, box-shadow 0.2s;
  clip-path: polygon(12% 0, 100% 0, 88% 100%, 0% 100%);
  box-shadow: 0 2px 12px 0 rgba(34, 211, 238, 0.08);
  border: none;
  outline: none;
}
.nav-trapezium.active,
.nav-trapezium:hover {
  background: #fff;
  color: #111;
  box-shadow: 0 4px 24px 0 rgba(34, 211, 238, 0.18);
}
.login-btn {
  background: #6ee7ff;
  color: #111;
  margin-left: 16px;
  clip-path: polygon(12% 0, 100% 0, 88% 100%, 0% 100%);
  transition: background 0.2s, color 0.2s;
}
.login-btn.active,
.login-btn:hover {
  background: #22d3ee;
  color: #fff;
}
@media (max-width: 768px) {
  .nav-right {
    display: none;
  }
}
.main-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 60px 40px;
  min-height: 80vh;
  margin-top:6px;
}
.text-section {
  flex: 1;
  max-width: 500px;
}
.main-title {
  font-size: 7.2rem;
  font-weight: 700;
  line-height: 1.15;
  margin-bottom: 0;
  letter-spacing: 0.12em;
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.8);
  font-family: 'Oswald', Arial, sans-serif;
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.enter-btn {
  padding: 10px 38px 10px 24px;
  border: 2px solid #22d3ee;
  background: transparent;
  color: #fff;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 2.1rem;
  text-decoration: none;
  display: inline-block;
  margin-bottom: 125px;
  clip-path: polygon(10% 0, 100% 0, 90% 100%, 0% 100%);
  letter-spacing: 0.12em;
  margin-top:30px;
}
.enter-btn:hover {
  background: #22d3ee;
  color: #111;
}
.globe-section {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.globe {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(34, 211, 238, 0.3), rgba(37, 99, 235, 0.3));
  border: 2px solid rgba(34, 211, 238, 0.5);
  box-shadow: 0 0 50px rgba(0, 255, 255, 0.3);
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;
}
.globe:hover {
  box-shadow: 0 0 80px rgba(0, 255, 255, 0.5);
  transform: scale(1.05);
}
.globe-ring {
  position: absolute;
  border: 1px solid rgba(34, 211, 238, 0.3);
  border-radius: 50%;
}
.ring-1 {
  inset: 15px;
}
.ring-2 {
  inset: 30px;
}
.continent {
  position: absolute;
  background: rgba(34, 211, 238, 0.4);
  border-radius: 2px;
}
.continent-1 {
  top: 30%;
  left: 25%;
  width: 30px;
  height: 20px;
}
.continent-2 {
  top: 50%;
  right: 30%;
  width: 20px;
  height: 30px;
}
.continent-3 {
  bottom: 30%;
  left: 30%;
  width: 35px;
  height: 15px;
}
.orbital-ring {
  position: absolute;
  border: 1px solid rgba(239, 68, 68, 0.3);
  border-radius: 50%;
  animation: spin 20s linear infinite;
}
.orbital-1 {
  inset: -20px;
}
.orbital-2 {
  inset: -40px;
  border-color: rgba(34, 211, 238, 0.2);
  animation-duration: 30s;
  animation-direction: reverse;
}
.ui-panel {
  position: absolute;
  background: rgba(0, 0, 0, 0.8);
  border: 1px solid rgba(34, 211, 238, 0.5);
  padding: 10px;
  font-family: 'Courier New', monospace;
  font-size: 12px;
}
.panel-top-left {
  top: -20px;
  left: -20px;
  border-color: rgba(239, 68, 68, 0.5);
}
.panel-top-right {
  top: -20px;
  right: -20px;
}
.panel-label {
  color: #22d3ee;
  margin-bottom: 5px;
}
.panel-value {
  font-weight: bold;
}
.threat {
  color: #ef4444;
}
.online {
  color: #10b981;
}
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
@media (max-width: 768px) {
  .main-content {
    flex-direction: column;
    text-align: center;
    padding: 40px 20px;
  }
  .main-title {
    font-size: 3rem;
  }
  .globe {
    width: 250px;
    height: 250px;
    margin-top: 40px;
  }
}
/* Footer with Social Icons */
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  z-index: 10;
}
.social-icons {
  display: flex;
  gap: 15px;
}
.social-icon {
  width: 32px;
  height: 32px;
  border: 1px solid #6b7280;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  font-size: 14px;
  transition: all 0.3s;
  background: rgba(255, 255, 255, 0.05);
}
.social-icon:hover {
  border-color: #22d3ee;
  color: #22d3ee;
  background: rgba(34, 211, 238, 0.1);
  transform: translateY(-2px);
}
.footer-links {
  display: flex;
  gap: 30px;
}
.footer-link {
  color: white;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s;
}
.footer-link:hover {
  color: #22d3ee;
}
@media (max-width: 768px) {
  .footer {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }
  .footer-links {
    order: 2;
  }
  .social-icons {
    order: 1;
  }
}
.circling {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 520px;
  height: 520px;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 2;
  opacity: 0.85;
  filter: drop-shadow(0 0 32px #0ff2) brightness(1.2);
  animation: circling-scale-fade 3.5s ease-in-out infinite;
}
@keyframes circling-scale-fade {
  0% { transform: scale(1); opacity: 0.7; }
  50% { transform: scale(1.15); opacity: 1; }
  100% { transform: scale(1); opacity: 0.7; }
}
.overlay-lower-third {
  position: absolute;
  left: 6vw;
  bottom: 8vh;
  width: 200px;
  z-index: 4;
  opacity: 1;
  animation: lower-third-fadein 1.2s 0.5s forwards, lower-third-float 3s 1.7s infinite alternate ease-in-out;
}
@keyframes lower-third-fadein {
  to { opacity: 1; }
}
@keyframes lower-third-float {
  from { transform: translateY(0); }
  to { transform: translateY(18px); }
}
.overlay-construction {
  position: absolute;
  right: 7vw;
  bottom: 7vh;
  width: 340px;
  z-index: 4;
  opacity: 0;
  animation: construction-fadein 1.5s 1.2s forwards, construction-float 4s 2.7s infinite alternate ease-in-out;
}
@keyframes construction-fadein {
  to { opacity: 1; }
}
@keyframes construction-float {
  from { transform: translateY(0); }
  to { transform: translateY(-12px); }
}
/* Loading Screen Styles */
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #000;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.loading-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin: 0;
}
.loading-logo-img {
  width: auto;
  height: 56px;
  display: block;
  margin: 0;
  animation: glow 2s infinite alternate;
}
.loading-title {
  font-size: 2.5rem;
  color: #22d3ee;
  text-align: center;
  margin-bottom: 10px;
  letter-spacing: 3px;
}
.loading-subtitle {
  color: #666;
  text-align: center;
  font-size: 1rem;
  margin-bottom: 40px;
}
.progress-container {
  width: 400px;
  max-width: 90vw;
}
.progress-bar {
  width: 100%;
  height: 8px;
  background: rgba(34, 211, 238, 0.2);
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 20px;
}
.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #22d3ee, #06b6d4);
  width: 0%;
  transition: width 0.5s ease;
}
.loading-text {
  text-align: center;
  color: #10b981;
  font-family: 'Courier New', monospace;
  font-size: 14px;
}
@keyframes glow {
  0% { box-shadow: 0 0 20px rgba(239, 68, 68, 0.5); }
  100% { box-shadow: 0 0 40px rgba(239, 68, 68, 0.8); }
}
/* End Loading Screen Styles */
/* Blended Background Layout */
.home-blend-bg {
  min-height: 100vh;
  width: 100vw;
  background: url('@/assets/world.png') right center/65vw auto no-repeat;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.black-gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  pointer-events: none;
  background: linear-gradient(90deg, #000 0%, #000 36%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.0) 80%);
}
.blend-content-wrapper {
  flex: 1 1 auto;
  display: flex;
  align-items: stretch;
  position: relative;
}
.blend-content {
  position: absolute;
  top: 120px;
  left: 70px;
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 2;
  padding: 0;
  gap: 0;
  margin-bottom: 80px;
}
.about-cards {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 38px;
  margin-top: 32px;
}
.about-card {
  background: rgba(10, 20, 40, 0.82);
  border: 2px solid #22d3ee;
  color: #fff;
  padding: 56px 48px 56px 48px;
  font-family: 'Fira Mono', 'Consolas', 'Courier New', monospace;
  font-size: 1.18rem;
  width: 700px;
  max-width: 90vw;
  min-width: 340px;
  box-shadow: 0 0 32px 0 rgba(34, 211, 238, 0.08);
  clip-path: polygon(4% 0, 100% 0, 96% 100%, 0% 100%);
  position: relative;
  z-index: 2;
}
.about-card h2 {
  font-size: 1.2rem;
  color: #fff;
  margin-bottom: 16px;
  letter-spacing: 0.04em;
  font-weight: 700;
  font-family: 'Fira Mono', 'Consolas', 'Courier New', monospace;
  text-transform: uppercase;
}
.card-what {
  margin-left:0px;
  margin-top:0;
}
.card-mission {
  margin-left: 400px;
  margin-top: -80px;
  clip-path: polygon(2% 0, 100% 0, 98% 100%, 0% 100%);
}
.card-vision {
  margin-left: 900px;
  margin-top: -80px;
  clip-path: polygon(1% 0, 100% 0, 99% 100%, 0% 100%);
}
.about-card p {
  font-family: 'Fira Mono', 'Consolas', 'Courier New', monospace;
  font-size: 0.92rem;
  color: #b6eaff;
  line-height: 1.5;
  margin: 0;
  letter-spacing: 0.01em;
}
.progress-indicator {
  margin-top: 0;
  display: flex;
  gap: 12px;
  width: 100%;
  max-width: 260px;
  margin-bottom: 0;
}
.progress-bar-small {
  height: 6px;
  border-radius: 2px;
  background: rgba(255, 255, 255, 0.18);
  transition: all 0.3s ease;
}
.progress-bar-small.bar-1 {
  width: 70px;
  background: rgba(255, 255, 255, 0.22);
}
.progress-bar-small.bar-2 {
  width: 70px;
  background: rgba(255, 255, 255, 0.22);
}
.progress-bar-small.bar-3 {
  width: 220px;
  background: #fff;
  box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.5);
}
.sound-btn {
  background: none;
  border: none;
  cursor: pointer;
  margin: 0 10px;
  padding: 0;
  display: flex;
  align-items: center;
  transition: filter 0.2s;
}
.sound-btn:hover svg {
  filter: drop-shadow(0 0 4px #22d3ee);
}
/* Overlayed Asset Animations */
.overlay-circling {
  position: absolute;
  left: 12vw;
  bottom: 6vh;
  width: 200px;
  height: 200px;
  z-index: 3;
  pointer-events: none;
  opacity: 0.85;
  
}
@keyframes circling-scale-fade {
  0% { transform: scale(1); opacity: 0.7; }
  50% { transform: scale(1.15); opacity: 1; }
  100% { transform: scale(1); opacity: 0.7; }
}
.overlay-lower-third {
  position: absolute;
  left: 1vw;
  bottom: 10vh;
  width: 340px;
  z-index: 4;
  opacity: 1;
}
@keyframes lower-third-float {
  from { transform: translateY(0); }
  to { transform: translateY(18px); }
}


@keyframes construction-float {
  from { transform: translateY(0); }
  to { transform: translateY(-12px); }
}
.overlay-hud-box {
  position: absolute;
  right: 6.5vw;
  bottom: 6.5vh;
  width: 370px;
  height: 110px;
  background: rgba(20, 30, 50, 0.32);

  border-radius: 18px;
  box-shadow: 0 0 24px 4px rgba(0,255,255,0.12), 0 0 0 2px rgba(0,255,255,0.08) inset;
  z-index: 3;
  pointer-events: none;
  opacity: 0.92;
  filter: blur(0.2px);
  animation: hudbox-fadein 1.2s 1.1s forwards;
  opacity: 0;
}
@keyframes hudbox-fadein {
  to { opacity: 0.92; }
}
.about-img {
  display: block;
  width: 560px;
  max-width: 80vw;
  position: absolute;
  margin-top:40px;
}
.about-img-what {
  left: 0;
  top: 140px;
}
.about-img-mission {
  left: 360px;
  top: 290px;
}
.about-img-vision {
  left: 700px;
  top: 450px;
}
@media (max-width: 1200px) {
  .about-img-what { left: 0; top: 120px; width: 44vw; }
  .about-img-mission { left: 28vw; top: 220px; width: 44vw; }
  .about-img-vision { left: 56vw; top: 320px; width: 44vw; }
}
@media (max-width: 800px) {
  .about-img, .about-img-what, .about-img-mission, .about-img-vision {
    position: static;
    width: 90vw;
    margin: 18px auto 0 auto;
    left: unset;
    top: unset;
  }
}
.animate-in-left {
  opacity: 0;
  transform: translateX(-80px);
  animation: about-in-left 1.1s cubic-bezier(0.23, 1, 0.32, 1) 0.2s forwards;
}
.animate-in-right {
  opacity: 0;
  transform: translateX(80px);
  animation: about-in-right 1.1s cubic-bezier(0.23, 1, 0.32, 1) 0.4s forwards;
}
.animate-in-up {
  opacity: 0;
  transform: translateY(-80px);
  animation: about-in-up 1.1s cubic-bezier(0.23, 1, 0.32, 1) 0.6s forwards;
}
@keyframes about-in-left {
  to { opacity: 1; transform: translateX(0); }
}
@keyframes about-in-right {
  to { opacity: 1; transform: translateX(0); }
}
@keyframes about-in-up {
  to { opacity: 1; transform: translateY(0); }
}
</style> 