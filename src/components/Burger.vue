<script setup>
import { inject, computed } from 'vue';

const showSidebar = inject('showSidebar');
const burgerIcon = computed(() => {
  return showSidebar.value ? '/close-lowres.svg' : '/burger.svg'
})
</script>

<template>
  <div class="burger">
    <img src="/logo.svg" alt="логотип Эйдж" />
    <button class="button" type="button" @click="$emit('showSidebarHandler')">
      <img :src="burgerIcon" alt="Иконка бургера" />
    </button>
  </div>
</template>

<style scoped>
.burger {
  display: none;
}

@media screen and (max-width: 768px) {
  .burger {
    display: flex;
    padding: 15px 10px;
    justify-content: space-between;
  }
}

.button {
  border: none;
  background-color: transparent;
  cursor: pointer;
}
</style>
