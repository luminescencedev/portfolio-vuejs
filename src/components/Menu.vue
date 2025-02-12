<script lang="ts" setup>
import { ref } from 'vue';

import toggleMenu from '../menuUtils.ts';

const isMenuOpen = ref(false);


const handleToggleMenu = (isRouteChanging: boolean) => {
  isMenuOpen.value = !isMenuOpen.value;
  toggleMenu(isRouteChanging);
};
</script>

<template>
  <div class="menu w-screen h-screen top-[-100%] fixed left-0 z-[9] bg-zinc-950 flex justify-center">
    <div class="flex items-center justify-center h-full w-[40vw]">
      <ul class="flex flex-col gap-4 w-full font-[Dirtyline] text-white text-9xl">
        <li class="flex justify-end gap-6">
          <router-link to="/" id="hover" class="cursor-none link-1" @click="() => handleToggleMenu(true)">Home</router-link>
          <div class="number flex flex-col">
            <span class="text-3xl">1</span>
          </div>
        </li>
        <li class="flex gap-6">
          <router-link to="/project" id="hover" class="cursor-none link-2" @click="() => handleToggleMenu(true)">Projects</router-link>
          <div class="number flex flex-col">
            <span class="text-3xl">2</span>
          </div>
        </li>
        <li class="flex justify-end gap-6">
          <router-link to="/about" id="hover" class="cursor-none link-3" @click="() => handleToggleMenu(true)">About</router-link>
          <div class="number flex flex-col">
            <span class="text-3xl">3</span>
          </div>
        </li>
        <li class="flex gap-6">
          <router-link to="/contact" id="hover" class="cursor-none link-4" @click="() => handleToggleMenu(true)">Contact</router-link>
          <div class="number flex flex-col">
            <span class="text-3xl">4</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>

.router-link-exact-active {
  transition: color 0.5s ease-in-out, -webkit-text-stroke 1s ease-in-out;
  color: transparent;
  -webkit-text-stroke: 1px white;
}

.router-link-exact-active:hover {
  color: white;
  -webkit-text-stroke: 1px transparent;
}

#hover:not(.router-link-exact-active) {
  transition: color 0.5s ease-in-out, -webkit-text-stroke 1s ease-in-out;
  -webkit-text-stroke: 1px transparent;
}

#hover:hover:not(.router-link-exact-active) {
  color: transparent;
  -webkit-text-stroke: 1px white; 
}

#hover:hover+.number {
  justify-content: flex-end;
}
</style>