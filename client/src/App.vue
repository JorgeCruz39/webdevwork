<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/NavBar.vue';
</script>

<template>
  <NavBar />
  <header>
    <div class="wrapper">
      
    </div>
  </header>
  <div class= "container">
    <HelloWorld msg="You did it!" />
    <RouterView />

</div>
 
</template>

<style></style>