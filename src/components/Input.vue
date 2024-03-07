<script setup>

import { defineProps, defineEmits, computed } from 'vue';
const props = defineProps({
  label: {
    type: String,
  },
  placeholder: {
    type: String,
  },
  name: {
    type: String,
  },
  type: {
    type: String,
  },
  modelValue: [String, Number],
});

const emit = defineEmits(['update:modelValue']);

const value = computed({
 get() {
    return props.modelValue;
 },
 set(newValue) {
    emit('update:modelValue', newValue);
 },});
</script>

<template>
  <div class="wrapper-input">
    <label class="label" :for="props.label">{{ props.label }}</label>

    <input
      class="input"
      :type="props.type"
      :id="props.name"
      :name="props.name"
      :placeholder="props.placeholder"
      :value="modelValue"
      v-model="value"
      required />

    <span class="error"></span>
  </div>
</template>

<style scoped>
.wrapper-input {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
}

.label {
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.56px;
}

.input {
  width: 100%;
  padding: 15px 20px;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.49px;
  border-radius: 10px;
  border: 1px solid #9d9d9d;
}

@media screen and (max-width: 768px) {
  .input {
    padding: 20px 20px;
  }
}

.input::placeholder {
  color: #9d9d9d;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.49px;
}

.error {
  display: none;
}
</style>
