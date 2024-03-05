<script setup>
const props = defineProps({
  text: {
    type: String,
  },
  class: {
    type: String,
  },
});
</script>

<template>
  <button class="button" type="button" :class="props.class">
    <slot></slot>
  </button>
</template>

<style scoped>
.button {
  min-width: 215px;
  padding: 20px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  color: #9d9d9d;
  background-color: transparent;
  border: 1px solid #9d9d9d;
}

.yellow {
  background-color: #ffa509;
  color: #fff;
  border: none;
}
</style>
