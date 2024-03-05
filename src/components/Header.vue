<script setup></script>

<template>
  <header class="header">
    <div class="wrapper-logo">
      <img class="logo" src="/logo.svg" alt="Age логотип" />
      <ul>
        <li>
          <a href="#" class="link"
            ><img src="/shedule.svg" alt="Иконка расписания" />Расписание занятий</a
          >
        </li>
        <li>
          <a href="#" class="link"
            ><img src="/user.svg" alt="Иконка пользователя" />Связь с менеджером</a
          >
        </li>
      </ul>
    </div>
    <div class="wrapper">
      <div class="wrapper-user">
        <p class="username">Анна Иванова</p>
        <p class="email">name@age.ru</p>
      </div>
      <button class="exit" type="button" @click="$router.push({ name: 'Enter' })"><img src="/exit.svg" alt="Иконка выхода"  />Выйти</button>
    </div>
  </header>
</template>

<style scoped>
.header {
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 70px;
  border-bottom: 1px solid #9d9d9d;
}
.logo {
  width: 120px;
  height: 40px;
}

.wrapper-logo {
  display: flex;
  gap: 100px;
}

ul {
  display: flex;
  list-style: none;
  gap: 30px;
}

li {
  display: flex;
  gap: 10px;
}

.link {
  cursor: pointer;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  align-items: center;
  gap: 10px;
  text-align: center;
}

.wrapper-user {
  display: flex;
  flex-direction: column;
}

.username {
  font-family: 'Poppins';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.email {
  font-family: 'Inter';
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.3px;
  color: #9D9D9D;
}

.exit {
  font-family: 'Poppins';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: #9D9D9D;
  display: flex;
  align-items: center;
  gap: 10px;
  border: none;
  background: none;
  cursor: pointer;
}

.wrapper {
  display: flex;
  gap: 38px;
}
</style>
