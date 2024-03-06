<script setup>
import Modal from './Modal.vue';
import { ref } from 'vue';

const showModal = ref(false);
</script>

<template>
  <main class="main">
    <div class="wrapper">
      <div class="wrapper-title">
        <h2 class="title">
          История искусств <time datetime="2023-12-25" class="date">25.12.2023</time>
        </h2>

        <p class="teacher"><span class="span">Преподаватель:</span>Иванов Иван Иванович</p>
      </div>
      <button class="button" type="button" @click="showModal = true">
        <span class="button-span">Покинуть трансляцию</span> <img src="/close.svg" alt="Иконка закрытия" />
      </button>
    </div>
    <div class="wrapper-frame">
      <iframe
        class="frame"
        src="https://www.youtube.com/embed/9TIXPeyUR7c"
        title="Learn English with Adam"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>
    </div>
    <Modal v-if="showModal" @close="showModal = false" />
  </main>
</template>

<style scoped>
.main {
  padding: 0 70px 50px;
}

@media screen and (max-width: 1000px) {
  .main {
    padding: 0 30px 50px;
  }
}

@media screen and (max-width: 768px) {
  .main {
    padding: 0 10px 40px;
  }
}

.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 27px 0 30px;
}

@media screen and (max-width: 1000px) {
  .wrapper {
    padding: 12px 0 15px;
  }
}

@media screen and (max-width: 768px) {
  .wrapper {
    padding: 30px 0;
  }
}


.wrapper-title {
  display: flex;
  gap: 30px;
}

@media screen and (max-width: 768px) {
  .wrapper-title {
    flex-direction: column;
    gap: 15px;

  }
}
.title {
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.75px;
  display: flex;
  gap: 15px;
}

@media screen and (max-width: 768px) {
  .title {
    flex-direction: column;
    gap: 5px;
  }
}

.date {
  display: flex;
  align-items: center;
}

.teacher {
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.48px;
  display: flex;
  align-items: center;
}

@media screen and (max-width: 768px) {
  .teacher {
    flex-direction: column;
    gap: 5px;
    align-items: flex-start;
  }
}

.span {
  color: #9d9d9d;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.36px;
  margin-right: 5px;
}

.button {
  padding: 12px 15px;
  display: flex;
  align-items: center;
  gap: 5px;
  border-radius: 8px;
  border: 1px solid #ff2e2e;

  color: #ff2e2e;
  background-color: transparent;
  font-family: 'Inter';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.42px;
  cursor: pointer;
}



@media screen and (max-width: 1000px) {
  .button {
   width: 130px;
   margin-left: 10px;
  }
}

@media screen and (max-width: 768px) {
  .button {
    width: 50px;
    height: 44px;
    align-self: flex-start;
  }
}

.wrapper-frame {
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-bottom: 55%;
}

.frame {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
}

@media screen and (max-width: 768px) {
  .button-span {
    display: none;
  }
}
</style>
