<script lang="ts" setup>

import MagneticComponent from './MagneticComponent.vue';
import HomeButton from './HomeButton.vue';
import toggleMenu from '../menuUtils.ts'


</script>

<template>
  <header class="py-10 fixed top-0 z-10 left-0 w-screen">
    <div class="flex items-center justify-between px-16">
      <div class="flex items-center gap-10 h-6" id="hover">
        <MagneticComponent :padding-x="60" :padding-y="60" @click="toggleMenu">
          <HomeButton/>
        </MagneticComponent>
        <MagneticComponent :padding-x="10" :padding-y="60"><router-link class="cursor-none z-[11]" id="hover" to="/"><img src="../assets/A.svg" id="hover"  alt="" class="h-6"></router-link></MagneticComponent>
      </div>
      
      <nav>
        <ul class="flex gap-16">
          <li><MagneticComponent :padding-x="10" :padding-y="60"><router-link class="cursor-none" id="hover" to="/project" >Projects</router-link></MagneticComponent></li>
          <li><MagneticComponent :padding-x="10" :padding-y="60"><router-link class="cursor-none" id="hover" to="/about">About</router-link></MagneticComponent></li>
          <li><MagneticComponent :padding-x="10" :padding-y="60"><router-link class="cursor-none" id="hover" to="/contact">Contacts</router-link></MagneticComponent></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style>
/* Ajoutez des styles si nécessaire */
</style>