<script setup></script>

<template>
  <div class="modal" @click.self="$emit('close')">
    <div class="modal-content">
      <h2 class="title">Вы уверены, что хотите покинуть трансляцию?</h2>
      <div class="wrapper-buttons">
        <button class="button button-yellow" type="button" @click="$emit('close')">
          Нет, останусь
        </button>
        <button class="button" type="button" @click="$router.push({ name: 'Enter' })">Покинуть</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal {
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  padding: 40px 30px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  min-width: 440px;
  gap: 30px;
}

.title {
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.84px;
  max-width: 375px;
  text-align: center;
}

.wrapper-buttons {
  display: flex;
  gap: 10px;
}

.button {
  min-width: 215px;
  padding: 15px;
  border-radius: 8px;
  color: #9d9d9d;
  background-color: transparent;
  border: 1px solid #9d9d9d;
  cursor: pointer;
}

.button-yellow {
  background-color: #ffa509;
  color: #fff;
  border: none;
}
</style>
