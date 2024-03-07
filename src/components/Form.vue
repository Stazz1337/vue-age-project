<script setup>
import Button from './Button.vue';

const props = defineProps({
  title: {
    type: String,
  },
});

const emit = defineEmits(['submit']);
</script>

<template>
  <form class="form" @submit.prevent="$emit('submit')">
    <img src="/logo.svg" alt="логотип" class="logo" />
    <h2 class="title">{{ props.title }}</h2>
    <div class="wrapper">
      <slot name="inputs"></slot>
    </div>
    <slot name="repeat"></slot>
    <div class="wrapper-button">
      <Button class="yellow" type="submit">Войти</Button>
      <Button>Связь с менеджером</Button>
    </div>
    <slot name="google"></slot>
  </form>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;

  border-radius: 15px;
  background: #fff;
  gap: 30px;
  padding: 40px 30px;
  min-width: 500px;
  position: relative;
}

@media (max-width: 768px) {
  .form {
    min-width: 370px;
    width: 100%;
    padding: 30px 10px;
  }
}

.logo {
  position: absolute;
  top: -100px;
  left: 35%;
  display: none;
  width: 150px;
  height: 50px;
}

@media (max-width: 1439px) {
  .logo {
    display: block;
  }
}

@media (max-width: 768px) {
  .logo {
    left: 30%;
  }
}

.title {
  text-align: center;
}

.wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.wrapper-button {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
