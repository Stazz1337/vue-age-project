<script setup>
import Input from './Input.vue';
import Button from './Button.vue';
</script>

<template>
  <form class="form">
    <h2 class="title">Авторизация</h2>
    <div class="wrapper">
        <Input label='ФИО' placeholder="Соколова Елена Петровна" name="name" type="text"  />
        <Input label='Телефон' placeholder="79999999999" name="phone" type="tel" />
    </div>
    <div class="wrapper-button">
        <Button class="yellow">Войти</Button>
        <Button>Связь с менеджером</Button>
    </div>
    <slot></slot>
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
