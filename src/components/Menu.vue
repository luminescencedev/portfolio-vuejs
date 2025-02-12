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
  <div class="menu w-screen h-screen top-[-100%] fixed left-0 z-[9] bg-zinc-950 flex justify-center">
    <div class="flex items-center justify-center h-full w-[40vw]">
      <ul class="flex flex-col gap-4 w-full font-[Dirtyline] text-white text-9xl">
        <li class="flex justify-end gap-6">
          <router-link to="/" id="hover" class="cursor-none " @click="handleToggleMenu">Home</router-link>
          <div class="number flex flex-col">
            <span class="text-3xl">1</span>
          </div>
        </li>
        <li class="flex gap-6">
          <router-link to="/project" id="hover" class="cursor-none " @click="handleToggleMenu">Projects</router-link>
          <div class="number flex flex-col">
            <span class="text-3xl">2</span>
          </div>
        </li>
        <li class="flex justify-end gap-6">
          <router-link to="/about" id="hover" class="cursor-none " @click="handleToggleMenu">About</router-link>
          <div class="number flex flex-col">
            <span class="text-3xl">3</span>
          </div>
        </li>
        <li class="flex gap-6">
          <router-link to="/contact" id="hover" class="cursor-none " @click="handleToggleMenu">Contact</router-link>
          <div class="number flex flex-col">
            <span class="text-3xl">4</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.menu {
  transition: top 1s ease;
}


#hover {
  transition: color 0.5s ease-in-out, -webkit-text-stroke 1s ease-in-out;
  /* Gardez la propriété -webkit-text-stroke initiale ici pour une transition fluide */
  -webkit-text-stroke: 1px transparent;
}


#hover:hover {
  color: transparent;
  -webkit-text-stroke: 1px white; 
}

#hover:hover+.number{
  justify-content: flex-end;
}


</style>