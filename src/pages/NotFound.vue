<script setup></script>

<template>
  <div class="wrapper">
    <img src="/logo.svg" alt="логотип" class="logo" />
    <h2 class="code">404</h2>
    <p class="text">Трансляции на этой странице нет</p>
    <p class="connect">Пожалуйста, свяжитесь с менеджером для получения новой ссылки</p>
    <button class="button" type="button">Связаться с менеджером</button>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo {
  width: 151px;
  height: 50px;
  margin: 77px 0 30px;
}

@media screen and (max-width: 768px) {
  .logo {
    display: none;
  }
}

.code {
  color: #ffa509;
  font-size: 22vw;
  font-style: normal;
  font-weight: 600;
  line-height: 387px;
  letter-spacing: -12.25px;
}

@media screen and (max-width: 768px) {
  .code {
    font-size: 200px;
  }
}

.text {
  color: #9d9d9d;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.7px;
  margin-top: -30px;
}

@media screen and (max-width: 768px) {
  .text {
    margin-top: -90px;
  }
}

.connect {
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.84px;
  margin: 15px 0 30px;
  text-align: center;
}

.button {
  min-width: 215px;
  padding: 15px;
  border-radius: 8px;
  background-color: #ffa509;
  color: #fff;
  border: none;
  cursor: pointer;
  min-width: 215px;
}
</style>
