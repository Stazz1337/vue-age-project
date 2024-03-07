<script setup>
import Form from '../components/Form.vue';
import Input from '../components/Input.vue';
import axios from 'axios';
import { ref } from 'vue';

import { useRouter } from 'vue-router';
const router = useRouter();
const name = ref('');
const phone = ref('');



async function submit() {
  try {
    const response = await axios.post('https://lk.agecompany.ru/api/', {
      name: name.value,
      phone: phone.value,
    });
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
      router.push('/enter');
    } else {
      console.error(error);
    }
  } catch (error) {
    console.error(error);
  }
}
</script>

<template>
  <div class="wrapper">
    <div class="container">
      <img src="/logo.svg" alt="логотип" class="logo" />
    </div>
    <div class="wrapper-form">
      <Form title="Авторизация" @submit="submit">
        <template #inputs>
          <Input
            label="ФИО"
            placeholder="Соколова Елена Петровна"
            name="name"
            type="text"
            v-model="name" />
          <Input
            label="Телефон"
            placeholder="79999999999"
            name="phone"
            type="tel"
            v-model="phone" />
        </template>
        <template #google>
          <div class="wrapper-google">
            <div class="separator">Или войдите с помощью</div>
            <button class="button" type="button">
              <img src="/google.svg" alt="Google" />Google
            </button>
          </div>
        </template>
      </Form>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  height: 100vh;
  background: #f2f2f2;
  align-items: center;
  justify-content: center;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background: #ffa509;
  flex-basis: 49%;
  min-height: 96vh;
}

@media screen and (max-width: 1439px) {
  .container {
    display: none;
  }
}

.logo {
  width: 281px;
  height: 94.145px;
}

.wrapper-form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 51%;
}

.wrapper-google {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.separator {
  display: flex;
  align-items: center;
  text-align: center;

  color: #9d9d9d;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
}

.separator::before,
.separator::after {
  content: '';
  flex: 1;
  border-bottom: 1px solid #9d9d9d;
}

.separator:not(:empty)::before {
  margin-right: 0.25em;
}

.separator:not(:empty)::after {
  margin-left: 0.25em;
}

.button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin: 0 auto;
  padding: 16px;
  width: 144px;
  border-radius: 6px;
  border: 1px solid #9d9d9d;
  background-color: #fff;
  cursor: pointer;
}
</style>
