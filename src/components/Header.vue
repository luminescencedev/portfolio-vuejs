<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';
import MagneticComponent from './MagneticComponent.vue';
import HomeButton from './HomeButton.vue';
import toggleMenu from '../composables/menuUtils.ts';

const isMenuOpen = ref(false);
const isBlendModeActive = ref(false);


const handleToggleMenu = () => {
  if (isMenuOpen.value === false) {
    isBlendModeActive.value = true;
    toggleMenu(false);
    isMenuOpen.value = !isMenuOpen.value;
  } else {
    isBlendModeActive.value = true;
    isMenuOpen.value = !isMenuOpen.value;
    toggleMenu(false);
  }
};

const handleMenuOpened = () => {
  isMenuOpen.value = true;
};

const handleMenuClosed = () => {
  isMenuOpen.value = false;
  setTimeout(() => {
    isBlendModeActive.value = false;
  }, 500);
};

onMounted(() => {
  document.addEventListener('menuOpened', handleMenuOpened);
  document.addEventListener('menuClosed', handleMenuClosed);
});

onUnmounted(() => {
  document.removeEventListener('menuOpened', handleMenuOpened);
  document.removeEventListener('menuClosed', handleMenuClosed);
});
</script>

<template>
  <header :class="{ 'text-white mix-blend-difference': isBlendModeActive }" class="py-10 fixed top-0 z-10 left-0 w-screen ">
    <div class="flex items-center justify-between px-16">
      <div class="flex items-center gap-10 h-6" id="hover">
        <MagneticComponent :padding-x="60" :padding-y="60" @click="handleToggleMenu">
          <HomeButton :isMenuOpen="isBlendModeActive"/>
        </MagneticComponent>
        <MagneticComponent :padding-x="10" :padding-y="60">
          <router-link class="cursor-none z-[11]" id="hover" to="/">
            <img :class="{ 'svg-white': isBlendModeActive }" src="../assets/A.svg" id="hover" alt="" class="h-6">
          </router-link>
        </MagneticComponent>
      </div>
      
      <nav>
        <ul class="flex gap-16">
          <transition name="fade">
            <li v-if="!isBlendModeActive" class="fade"><MagneticComponent :padding-x="10" :padding-y="60"><router-link class="cursor-none" id="hover" to="/project">Projects</router-link></MagneticComponent></li>
          </transition>
          <transition name="fade">
            <li v-if="!isBlendModeActive" class="fade"><MagneticComponent :padding-x="10" :padding-y="60"><router-link class="cursor-none" id="hover" to="/about">About</router-link></MagneticComponent></li>
          </transition>
          <transition name="fade">
            <li v-if="!isBlendModeActive" class="fade"><MagneticComponent :padding-x="10" :padding-y="60"><router-link class="cursor-none" id="hover" to="/contact">Contacts</router-link></MagneticComponent></li>
          </transition>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style>
.svg-white {
  filter: invert(1);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.35s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>