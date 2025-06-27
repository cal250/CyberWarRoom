<template>
  <div class="scenario-row">
    <ScenarioCard v-for="(scen, i) in scenarios" :key="i" :title="scen.title" :image="scen.image" />
  </div>
</template>

<script setup>
import ScenarioCard from './ScenarioCard.vue'
defineProps({
  scenarios: Array
})
</script>

<style scoped>
.scenario-row {
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  padding-bottom: 16px;
  margin-bottom: 32px;
  scrollbar-width: none;
}
.scenario-row::-webkit-scrollbar {
  display: none;
}
</style> 