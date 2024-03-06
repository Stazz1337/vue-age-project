<template>
  <footer class="footer">
    <div>
      <img src="/logo.svg" alt="логотип Эйдж" class="logo" />
      <p class="text-logo">
        Учитесь через игру, <br />
        невзирая на возраст, <br />
        забыв о скуке!
      </p>
    </div>

    <div>
      <h2 class="programms__title">Направления программ</h2>
      <ul class="programms__list">
        <li class="programms__item" v-for="programm in programms" :key="programm">
          <a href="#" class="programms__link">{{ programm }}</a>
        </li>
      </ul>
    </div>

    <div class="options">
      <ul class="options__list">
        <li class="options__item" v-for="item in menu" :key="item">
          <a href="#" class="options__link">{{ item }}</a>
        </li>
      </ul>
    </div>

    <div class="contacts">
      <h2 class="contacts__title">Контакты</h2>
      <p class="email">age.company.info@gmail.com</p>
      <p class="policy">Политика конфиденциальности</p>
      <p class="copyright">© drzst.website, 2023 <br />ИП Колобов Иван Тимофеевич</p>
    </div>
  </footer>
</template>

<script setup>
const programms = [
  'Здоровье',
  'Культура',
  'О нас',
  'Личное развитие',
  'История',
  'Путешествия',
  'Творчество',
  'Домоводство',
];

const menu = ['Расписание', 'Выезды', 'Преподаватели', 'О нас'];
</script>

<style scoped>
.footer {
  display: none;
}

@media screen and (max-width: 768px) {
  .footer {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 10px;
    row-gap: 18px;
    column-gap: 40px;
    border-top: 1px solid #9d9d9d;
  }
}

.footer div:last-child {
  grid-column: 2 / 4;
}

.logo {
  width: 90px;
  height: 30px;
}

.text-logo {
  color: #9d9d9d;

  font-size: 8px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.24px;
}

.programms__title {
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 115%; /* 13.8px */
  letter-spacing: -0.36px;
}

.programms__list {
  display: flex;
  flex-direction: column;
}

.programms__item {
  line-height: 16px;
}

.programms__link {
  color: #9d9d9d;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.3px;
}

.options__list {
  margin-top: -5px;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.options__link {
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.36px;
}

.contacts {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.contacts__title {
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 115%; /* 13.8px */
  letter-spacing: -0.36px;
}

.email {
  color: #9d9d9d;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.36px;
}

.policy {
  color: #9d9d9d;

  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.3px;

  margin-top: 10px;
}

.copyright {
  color: #9d9d9d;

  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.3px;
}
</style>
