<template>
  <div class="pricing-card">
    <div class="plan-tab">
      <slot name="title">PLAN</slot>
    </div>
    <div class="features-box">
      <slot name="features"></slot>
    </div>
    <div class="price-row">
      <span class="price"><slot name="price"></slot></span>
    </div>
    <button class="select-btn"><slot name="button">SELECT</slot></button>
    <svg class="card-bg-svg" width="360" height="620" viewBox="0 0 360 620" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M360 515.028L281.168 595H0V121.664L94.168 27.5H360V515.028Z" fill="#070708" fill-opacity="0.52"/>
      <path d="M360 515.028L281.168 595H0V121.664L94.168 27.5H360V515.028Z" stroke="#66E0F8"/>
      <rect width="292" height="306" x="34" y="138" fill="white" fill-opacity="0.08"/>
      <!-- corner decorations omitted for brevity -->
    </svg>
  </div>
</template>

<script setup>
</script>

<style scoped>
.pricing-card {
  position: relative;
  width: 360px;
  height: 620px;
  margin: 0 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
.card-bg-svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
}
.plan-tab {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  color: #222;
  font-family: 'Oswald', Arial, sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  padding: 0.5rem 2.2rem;
  border-radius: 4px 4px 0 0;
  box-shadow: 0 2px 12px 0 rgba(34, 211, 238, 0.08);
  z-index: 2;
  min-width: 140px;
  text-align: center;
}
.features-box {
  position: absolute;
  top: 120px;
  left: 50%;
  transform: translateX(-50%);
  width: 280px;
  min-height: 280px;
  background: rgba(10, 20, 40, 0.82);
  
  border-radius: 8px;
  color: #fff;
  font-family: 'Oswald', Arial, sans-serif;
  font-size: 1rem;
  padding: 1.8rem 1.8rem 1rem 1.8rem;
  z-index: 2;
 
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.price-row {
  position: absolute;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  font-family: 'Oswald', Arial, sans-serif;
  font-size: 1.8rem;
  color: #fff;
  font-weight: 700;
  letter-spacing: 0.08em;
}
.price {
  font-size: 1.8rem;
  font-weight: 700;
  color: #fff;
}
.select-btn {
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  background: #fff;
  color: #222;
  font-family: 'Oswald', Arial, sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  padding: 0.6rem 2.4rem 0.6rem 2.4rem;
  border: none;
  border-radius: 4px 0 8px 8px;
  box-shadow: 0 2px 12px 0 rgba(34, 211, 238, 0.08);
  cursor: pointer;
  z-index: 2;
  min-width: 120px;
  transition: background 0.2s, color 0.2s;
}
.select-btn:hover {
  background: #66E0F8;
  color: #111;
}
</style> 