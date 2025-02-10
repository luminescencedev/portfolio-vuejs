<script lang="ts" setup>
import { ref } from 'vue';
import toggleMenu from '../menuUtils.ts';

const isMenuOpen = ref(false);


const handleToggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  toggleMenu();
};




</script>

<template>
  <div class="menu w-screen h-screen top-[-100%] fixed left-0 z-[9] bg-zinc-950">
    <div class="flex items-center justify-center h-full">
      <ul class="flex flex-col gap-4">
        <li>
          <router-link to="/" id="hover" class="cursor-none text-animate opacity-0 text-white" @click="handleToggleMenu">Home</router-link>
        </li>
        <li>
          <router-link to="/project" id="hover" class="cursor-none text-animate opacity-0 text-white" @click="handleToggleMenu">Projects</router-link>
        </li>
        <li>
          <router-link to="/about" id="hover" class="cursor-none text-animate opacity-0 text-white" @click="handleToggleMenu">About</router-link>
        </li>
        <li>
          <router-link to="/contact" id="hover" class="cursor-none text-animate opacity-0 text-white" @click="handleToggleMenu">Contact</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
.menu {
  transition: top 0.5s ease;
}

</style>