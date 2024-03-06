<template>
  <div class="sidebar">
    <ul class="sidebar__list">
      <li class="sidebar__list-item">
        <a href="#" class="sidebar__link"
          >Расписание занятий <img src="/shedule.svg" alt="Иконка расписания"
        /></a>
      </li>
      <li class="sidebar__list-item">
        <a href="#" class="sidebar__link"
          >Связь с менеджером <img src="/user.svg" alt="Иконка пользователя"
        /></a>
      </li>
    </ul>
    <div class="wrapper">
   
      <button class="exit" type="button" @click="$router.push({ name: 'Enter' })">
        <img src="/exit.svg" alt="Иконка выхода" />Выйти
      </button>
      <div class="wrapper-user">
        <p class="username">Анна Иванова</p>
        <p class="email">name@age.ru</p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style>
.sidebar {  
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  z-index: -1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
}

.sidebar__list {
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  gap: 15px;
  margin-top: 100px;
}

.sidebar__list-item {
  display: flex;
  gap: 7px;
}

.sidebar__link {
  cursor: pointer;
  font-size: 20px;
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
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.email {
  font-family: 'Inter';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.3px;
  color: #9d9d9d;
}

.exit {
  font-family: 'Poppins';
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: #9d9d9d;
  display: flex;
  align-items: center;
  gap: 10px;
  border: none;
  background: none;
  cursor: pointer;
}

.wrapper {
  display: flex;
  justify-content: space-between;
}
</style>
