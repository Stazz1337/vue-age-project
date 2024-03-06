<script setup>
import Header from '../components/Header.vue';
import Main from '../components/Main.vue';
import Footer from '../components/Footer.vue';
import Sidebar from '../components/Sidebar.vue';

import { provide, ref } from 'vue';

const showSidebar = ref(false);

provide('showSidebar', showSidebar)

 const showSidebarHandler = () =>{
   showSidebar.value = !showSidebar.value
 }
 
</script>

<template>
  <div class="page">
    <Header @showSidebarHandler="showSidebarHandler" />
    <Sidebar v-show="showSidebar" />
    <Main v-show="!showSidebar" />
    <Footer v-show="!showSidebar" />
  </div>
</template>

<style scoped>
.page {
  max-width: 75%;
  margin: 0 auto;
}

@media screen and (max-width: 1440px) {
  .page {
    max-width: 90%;
  }
}

@media screen and (max-width: 1280px) {
  .page {
    max-width: 100%;
  }
}


</style>
