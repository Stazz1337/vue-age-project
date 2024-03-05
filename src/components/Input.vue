<script setup>
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
});
</script>

<template>
  <div class="wrapper-input">
    <label class="label" :for="propsname">{{ props.label }}</label>

    <input
      class="input"
      :type="props.text"
      :id="props.name"
      :name="props.name"
      :placeholder="props.placeholder"
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
