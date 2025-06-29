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
        <button class="sound-btn" @click="isMuted = !isMuted" :aria-label="isMuted ? 'Unmute sound' : 'Mute sound'">
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
    <!-- Futuristic HUD box under construction 11 -->
    <div class="overlay-hud-box"></div>
    
    
    <!-- Main content wrapper for flex grow -->
    <div class="blend-content-wrapper">
      <div class="blend-content">
        <h1 class="main-title">SCENARIOS</h1>
        <div class="scenarios-grid">
          <ScenarioCard
            v-for="(card, idx) in scenarioCards"
            :key="card.title"
            :title="card.title"
            :image="card.image"
            :active="selectedScenario && selectedScenario.title === card.title"
            @select="onSelectScenario(card)"
          />
        </div>
      </div>
      <!-- Sidebar for selected scenario -->
      <div v-if="showOverlay" class="scenario-sidebar">
        <div class="sidebar-content">
          <!-- Scenario title -->
          <div class="sidebar-title">{{ selectedScenario?.title }}</div>
          <!-- Scenario details panel -->
          <div class="sidebar-details-panel">
            <slot name="details">
              <div v-html="selectedScenario?.details"></div>
            </slot>
          </div>
          
          <button class="close-sidebar-btn" @click="closeOverlay">&times;</button>
        </div>
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
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import NavButton from './NavButton.vue'
import ScenarioCard from './ScenarioCard.vue'
import img1 from '@/assets/artem-bryzgalov-r2CAjGQ0gSI-unsplash.jpg'
import img2 from '@/assets/maximalfocus-76McKuOlI5U-unsplash.jpg'
import img3 from '@/assets/kenny-eliason-mgYAR7BzBk4-unsplash.jpg'
import img4 from '@/assets/muha-ajjan-sL2BRR1cuvM-unsplash.jpg'
import img5 from '@/assets/michael-dziedzic-aQYgUYwnCsM-unsplash.jpg'
import img6 from '@/assets/adi-goldstein-EUsVwEOsblE-unsplash.jpg'
const $route = useRoute()
const isMuted = ref(false)

const scenarioCards = [
  { title: 'RANSOMWARE RESPONSE', image: img1, message: 'Respond to a simulated ransomware attack. Make critical decisions to protect your organization.', details: `
    <div class='details-section'>
      <svg class='responce-svg-card' width='100%' height='170' viewBox='0 0 562 170' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <rect width='560' height='168' transform='translate(1 1)' fill='white' fill-opacity='0.08'/>
        <path d='M3.52 34.69H1V1H34.69V3.52H3.52V34.69Z' fill='#CAE8F3' stroke='#1D1D1B' stroke-width='0.25' stroke-miterlimit='10'/>
        <path d='M558.48 34.69H561V1H527.31V3.52H558.48V34.69Z' fill='#CAE8F3' stroke='#1D1D1B' stroke-width='0.25' stroke-miterlimit='10'/>
        <path d='M558.48 135H561V168.69H527.31V166.17H558.48V135Z' fill='#CAE8F3' stroke='#1D1D1B' stroke-width='0.25' stroke-miterlimit='10'/>
        <path d='M3.52 135H1V168.69H34.69V166.17H3.52V135Z' fill='#CAE8F3' stroke='#1D1D1B' stroke-width='0.25' stroke-miterlimit='10'/>
        <foreignObject x='32' y='18' width='498' height='134'>
          <div class='svg-message-content' xmlns='http://www.w3.org/1999/xhtml'>
            <div class='svg-section-header'>PREMISE / SETTING:</div>
            <p class='svg-section-content'>The year is 2042. You're a junior analyst at SynSec, a global cybersecurity agency defending against digital warfare, deepfake leaks, rogue AI, and zero-day exploits. But when your team lead mysteriously disappears and the agency is compromised from the inside, you're thrown into a race against time to stop a massive cyberattack called Black Frost.</p>
          </div>
        </foreignObject>
      </svg>
    </div>
    <div class='details-section'>
      <svg class='responce-svg-card' width='100%' height='320' viewBox='0 0 562 320' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <rect width='560' height='318' transform='translate(1 1)' fill='white' fill-opacity='0.08'/>
        <path d='M3.52 34.69H1V1H34.69V3.52H3.52V34.69Z' fill='#CAE8F3' stroke='#1D1D1B' stroke-width='0.25' stroke-miterlimit='10'/>
        <path d='M558.48 34.69H561V1H527.31V3.52H558.48V34.69Z' fill='#CAE8F3' stroke='#1D1D1B' stroke-width='0.25' stroke-miterlimit='10'/>
        <path d='M558.48 285H561V318.69H527.31V316.17H558.48V285Z' fill='#CAE8F3' stroke='#1D1D1B' stroke-width='0.25' stroke-miterlimit='10'/>
        <path d='M3.52 285H1V318.69H34.69V316.17H3.52V285Z' fill='#CAE8F3' stroke='#1D1D1B' stroke-width='0.25' stroke-miterlimit='10'/>
        <foreignObject x='32' y='18' width='498' height='284'>
          <div class='svg-message-content' xmlns='http://www.w3.org/1999/xhtml'>
            <div class='svg-section-header'>MISSION PROGRESSION</div>
            <ul class='svg-section-content'>
              <li><span class='mission-title'>★ MISSION 1 – PHISHING LABYRINTH:</span> You enter a simulation of a fake corporate email system. Your task: Spot real vs phishing emails before time runs out. Each mistake lets malware infect more of the system.</li>
              <li><span class='mission-title'>★ MISSION 2 – DEEPFAKE DECRYPTION:</span> A celebrity is being blackmailed with an AI-generated video. Your job: Analyze audio patterns, video artifacts, and metadata to detect tampering.</li>
              <li><span class='mission-title'>★ MISSION 3 – PHYSICAL BREACH:</span> You go undercover at a tech convention to locate a rogue USB keylogger. Dialogue choices affect how much info NPCs reveal.</li>
            </ul>
          </div>
        </foreignObject>
      </svg>
    </div>
    <div class='details-section'>
      <svg class='responce-svg-card' width='100%' height='120' viewBox='0 0 562 120' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <rect width='560' height='118' transform='translate(1 1)' fill='white' fill-opacity='0.08'/>
        <path d='M3.52 20H1V1H34.69V3.52H3.52V20Z' fill='#CAE8F3' stroke='#1D1D1B' stroke-width='0.25' stroke-miterlimit='10'/>
        <path d='M558.48 20H561V1H527.31V3.52H558.48V20Z' fill='#CAE8F3' stroke='#1D1D1B' stroke-width='0.25' stroke-miterlimit='10'/>
        <path d='M558.48 90H561V118.69H527.31V116.17H558.48V90Z' fill='#CAE8F3' stroke='#1D1D1B' stroke-width='0.25' stroke-miterlimit='10'/>
        <path d='M3.52 90H1V118.69H34.69V116.17H3.52V90Z' fill='#CAE8F3' stroke='#1D1D1B' stroke-width='0.25' stroke-miterlimit='10'/>
        <foreignObject x='32' y='18' width='498' height='84'>
          <div class='svg-message-content' xmlns='http://www.w3.org/1999/xhtml'>
            <div class='svg-section-header'>FINAL MISSION – STOP THE PAYLOAD</div>
            <span class='svg-section-content'>STOP THE PAYLOAD</span>
          </div>
        </foreignObject>
      </svg>
    </div>
  ` },
  { title: 'CLOUD INTRUSION', image: img2, message: 'Investigate and mitigate a cloud infrastructure breach. Trace the attacker and secure your assets.', details: `<div><div class='details-section'><h3>PREMISE / SETTING:</h3><p>Your company's cloud environment is under attack. Trace the breach, identify the attacker's methods, and secure your assets before data is lost.</p></div><div class='details-section'><h3>MISSION PROGRESSION</h3><ul><li><b>MISSION 1 – LOG HUNT:</b> Analyze cloud logs to find the attacker's entry point.</li><li><b>MISSION 2 – CONTAINMENT:</b> Isolate compromised resources and prevent lateral movement.</li><li><b>MISSION 3 – RECOVERY:</b> Restore services and report the incident to stakeholders.</li></ul></div></div>` },
  { title: 'PHISHING ATTACK', image: img3, message: 'Identify and respond to a sophisticated phishing campaign targeting your company.', details: `<div><div class='details-section'><h3>PREMISE / SETTING:</h3><p>A wave of phishing emails is targeting your company. Identify malicious messages and educate your team to prevent compromise.</p></div><div class='details-section'><h3>MISSION PROGRESSION</h3><ul><li><b>MISSION 1 – INBOX INSPECTION:</b> Review employee inboxes for suspicious emails.</li><li><b>MISSION 2 – EMPLOYEE TRAINING:</b> Conduct a simulated phishing test and analyze results.</li><li><b>MISSION 3 – INCIDENT RESPONSE:</b> Respond to a successful phishing attack and mitigate damage.</li></ul></div></div>` },
  { title: 'DATA BREACH', image: img4, message: 'Contain and analyze a major data breach. Communicate with stakeholders and regulators.', details: `<div><div class='details-section'><h3>PREMISE / SETTING:</h3><p>A major data breach has occurred. Analyze the breach, contain the threat, and communicate with stakeholders and regulators.</p></div><div class='details-section'><h3>MISSION PROGRESSION</h3><ul><li><b>MISSION 1 – BREACH ANALYSIS:</b> Determine the scope and impact of the breach.</li><li><b>MISSION 2 – CONTAINMENT:</b> Stop further data loss and secure affected systems.</li><li><b>MISSION 3 – PUBLIC RELATIONS:</b> Prepare statements and handle media inquiries.</li></ul></div></div>` },
  { title: 'INSIDER THREAT', image: img5, message: 'Detect and stop a malicious insider before critical data is exfiltrated.', details: `<div><div class='details-section'><h3>PREMISE / SETTING:</h3><p>Suspicious activity suggests an insider is planning to steal sensitive data. Investigate and stop the threat before it's too late.</p></div><div class='details-section'><h3>MISSION PROGRESSION</h3><ul><li><b>MISSION 1 – USER BEHAVIOR ANALYSIS:</b> Review logs for unusual access patterns.</li><li><b>MISSION 2 – INTERVIEW:</b> Question employees and gather evidence.</li><li><b>MISSION 3 – PREVENTION:</b> Implement controls to prevent future incidents.</li></ul></div></div>` },
  { title: 'SOCIAL ENGINEERING', image: img6, message: 'Navigate a social engineering scenario and train your team to recognize manipulation.', details: `<div><div class='details-section'><h3>PREMISE / SETTING:</h3><p>Attackers are using social engineering tactics to manipulate employees. Train your team to recognize and resist these attacks.</p></div><div class='details-section'><h3>MISSION PROGRESSION</h3><ul><li><b>MISSION 1 – PHONE SCAM:</b> Identify vishing attempts targeting staff.</li><li><b>MISSION 2 – PHYSICAL SECURITY:</b> Test building access controls against tailgating.</li><li><b>MISSION 3 – AWARENESS CAMPAIGN:</b> Launch a company-wide security awareness campaign.</li></ul></div></div>` },
]
const selectedScenario = ref(null)
const showOverlay = ref(false)
function onSelectScenario(card) {
  selectedScenario.value = card
  showOverlay.value = true
}
function closeOverlay() {
  showOverlay.value = false
  selectedScenario.value = null
}
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
  padding: 32px 60px 32px 80px;
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
  font-size: 4.2rem;
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
.scenario-img {
  display: block;
  width: 98vw;
  max-width: 1800px;
  margin: 18px 0 0 0;
  /* border-radius: 18px; */
  /* box-shadow: 0 0 32px 0 rgba(34, 211, 238, 0.12); */
  /* border: 2px solid #22d3ee; */
}
.scenarios-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  justify-items: center;
  max-width: 100vw;
  margin: 0 auto;
  overflow-x: auto;
}
.scenario-item {
  flex: 1 1 0;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
}
.scenario-item:first-child .scenario-img-small,
.scenario-item:nth-child(2) .scenario-img-small,
.scenario-item:nth-child(3) .scenario-img-small {
  max-width: 125%;
  max-height: 275px;
}
.scenario-item:hover {
  box-shadow: 0 0 24px #22d3ee, 0 0 48px #22d3ee80;
  z-index: 2;
}
.scenario-img-small {
  max-width: 100%;
  max-height: 220px;
  width: 100%;
  height: auto;
  object-fit: contain;
  border-radius: 12px;
  border: 2px solid transparent;
  transition: all 0.3s ease;
  filter: brightness(0.8);
}
.scenario-item:hover .scenario-img-small {
  /* Remove border and box-shadow from image hover */
  filter: brightness(1.2);
  transform: scale(1.05);
}
@media (max-width: 900px) {
  .scenario-row {
    flex-direction: column;
    gap: 18px;
    width: 100vw;
    max-width: 100vw;
  }
  .scenario-item {
    width: 100%;
  }
  .scenario-img-small {
    max-width: 100%;
    max-height: 180px;
  }
}
.scenario-sidebar {
  position: fixed;
  top: 0;
  right: 0;
  width: 45vw;
  height: 100vh;
  background: rgba(10, 10, 20, 0.82);
  border: none;
  box-shadow: none;
  z-index: 2000;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  animation: slideIn 0.4s ease-out;
  overflow-y: auto;
}
.sidebar-content {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-top: 48px;
  position: relative;
  z-index: 2010;
}
.sidebar-details-panel {
  background: none;
  border: none;
  box-shadow: none;
  padding: 0;
  color: #fff;
  font-family: 'Fira Mono', 'Consolas', 'Courier New', monospace;
  font-size: 1.08rem;
  overflow-y: auto;
  flex: 1;
  margin-bottom: 20px;
}
.section-header {
  font-family: 'Oswald', Arial, sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: #b6eaff;
  margin: 32px 0 10px 0;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
.section-content {
  font-family: 'Fira Mono', 'Consolas', 'Courier New', monospace;
  font-size: 1.08rem;
  color: #fff;
  margin-bottom: 18px;
  line-height: 1.5;
}
.mission-title {
  color: #ffb6b6;
  font-weight: bold;
}
.close-sidebar-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 2rem;
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  z-index: 2100;
  transition: color 0.2s;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(34, 211, 238, 0.1);
}
.close-sidebar-btn:hover {
  color: #22d3ee;
  background: rgba(34, 211, 238, 0.2);
}
@keyframes slideIn {
  from { 
    transform: translateX(100%);
    opacity: 0;
  }
  to { 
    transform: translateX(0);
    opacity: 1;
  }
}
.scenario-item.active {
  box-shadow: 0 0 48px 12px #22d3ee, 0 0 96px 24px #00fff7a0;
  transform: scale(1.045);
  z-index: 3;
  border-radius: 18px;
}
.sidebar-title {
  font-family: 'Oswald', Arial, sans-serif;
  font-size: 2.6rem;
  font-weight: 700;
  color: #b6eaff;
  margin-bottom: 32px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-align: left;
  margin-left: 32px;
}
.responce-svg-card {
  box-shadow: 0 0 48px 0 #22d3eecc, 0 0 0 2px #22d3ee44 inset;
  border-radius: 24px;
  background: rgba(34, 211, 238, 0.04);
  margin-bottom: 40px;
  width: 100%;
}
.svg-message-content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  color: #fff;
  font-family: 'Oswald', Arial, sans-serif;
  font-size: 1.22rem;
  padding: 0 32px;
  word-break: break-word;
}
.svg-section-header {
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 0.04em;
  margin: 24px 0 18px 0;
  color: #b6eaff;
  text-transform: uppercase;
}
.svg-section-content {
  font-family: 'Fira Mono', 'Consolas', 'Courier New', monospace;
  font-size: 1.32rem;
  color: #fff;
  margin-bottom: 18px;
  line-height: 1.8;
}
</style> 