<script setup></script>

<template>
  <div class="wrapper">
    <div class="container">
      <img src="/logo.svg" alt="логотип" class="logo" />
      <p class="connect">Вы подключаетесь к трансляции</p>

      <h2 class="title">
        История искусств <time datetime="2023-12-25" class="date">25.12.2023</time>
      </h2>
      <p class="teacher"><span class="span">Преподаватель:</span>Иванов Иван Иванович</p>

      <button class="button" type="button" @click="$router.push({ name: 'BroadcastPage' })">Войти</button>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f2f2f2;
}

.container {
  background-color: #fff;
  padding: 40px 73px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  position: relative;
}

.logo {
  position: absolute;
  top: -100px;
}

.connect {
  color: #9d9d9d;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.56px;
}

.title {
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.75px;
}

.teacher {
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.48px;
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
}

.span {
  color: #9d9d9d;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.36px;
}

.button {
  min-width: 215px;
  padding: 15px;
  border-radius: 8px;
  background-color: #ffa509;
  color: #fff;
  border: none;
  cursor: pointer;
  margin-top: 10px;
}
</style>
