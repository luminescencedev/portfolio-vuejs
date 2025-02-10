<script lang="ts" setup>

import toggleMenu from '../menuUtils.ts'

</script>

<template>
  <div class="menu w-screen h-screen top-[-100%] fixed left-0 z-[9] bg-white">
      <div class="flex items-center justify-center h-full">
        <ul class="flex flex-col gap-4">
          <li>
            <router-link to="/" id="hover" class="cursor-none" @click="toggleMenu">Home</router-link>
          </li>
          <li>
            <router-link to="/project" id="hover" class="cursor-none" @click="toggleMenu">Projects</router-link>
          </li>
          <li>
            <router-link to="/about" id="hover" class="cursor-none" @click="toggleMenu">About</router-link>
          </li>
          <li>
            <router-link to="/contact" id="hover" class="cursor-none" @click="toggleMenu">Contact</router-link>
          </li>
        </ul>
      </div>
  </div>
</template>

<style>
.menu {
  transition: top 1s ease;
}

</style>