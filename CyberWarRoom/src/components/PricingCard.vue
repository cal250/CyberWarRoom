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
    <svg class="card-bg-svg" width="420" height="722" viewBox="0 0 420 722" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M420 600.028L328.029 692H0V141.664L109.664 32H420V600.028Z" fill="#070708" fill-opacity="0.52"/>
      <path d="M420 600.028L328.029 692H0V141.664L109.664 32H420V600.028Z" stroke="#66E0F8"/>
      <rect width="340" height="356" x="40" y="161" fill="white" fill-opacity="0.08"/>
      <!-- corner decorations omitted for brevity -->
    </svg>
  </div>
</template>

<script setup>
</script>

<style scoped>
.pricing-card {
  position: relative;
  width: 420px;
  height: 722px;
  margin: 0 60px;
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
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  padding: 0.6rem 2.8rem;
  border-radius: 4px 4px 0 0;
  box-shadow: 0 2px 12px 0 rgba(34, 211, 238, 0.08);
  z-index: 2;
  min-width: 160px;
  text-align: center;
}
.features-box {
  position: absolute;
  top: 140px;
  left: 50%;
  transform: translateX(-50%);
  width: 320px;
  min-height: 320px;
  background: rgba(10, 20, 40, 0.82);
  
  border-radius: 8px;
  color: #fff;
  font-family: 'Oswald', Arial, sans-serif;
  font-size: 1.1rem;
  padding: 2.2rem 2.2rem 1.2rem 2.2rem;
  z-index: 2;
  box-shadow: 0 0 32px 0 rgba(34, 211, 238, 0.08);
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.price-row {
  position: absolute;
  bottom: 110px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  font-family: 'Oswald', Arial, sans-serif;
  font-size: 2.2rem;
  color: #fff;
  font-weight: 700;
  letter-spacing: 0.08em;
}
.price {
  font-size: 2.2rem;
  font-weight: 700;
  color: #fff;
}
.select-btn {
  position: absolute;
  bottom: 38px;
  left: 50%;
  transform: translateX(-50%);
  background: #fff;
  color: #222;
  font-family: 'Oswald', Arial, sans-serif;
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  padding: 0.7rem 2.8rem 0.7rem 2.8rem;
  border: none;
  border-radius: 4px 0 8px 8px;
  box-shadow: 0 2px 12px 0 rgba(34, 211, 238, 0.08);
  cursor: pointer;
  z-index: 2;
  min-width: 140px;
  transition: background 0.2s, color 0.2s;
}
.select-btn:hover {
  background: #66E0F8;
  color: #111;
}
</style> 