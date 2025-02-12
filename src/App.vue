<script setup lang="ts">
import Header from './components/Header.vue'
import Cursor from './components/Cursor.vue'
import Menu from './components/Menu.vue'
import Lenis from 'lenis';

const lenis = new Lenis();

function raf(time: number) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

</script>

<template>
        <div class="app text-zinc-950 h-screen w-screen">
            <Cursor />
            <Header />
            <router-view v-slot="{ Component }" class="px-6">
                <transition name="page" mode="out-in">
                    <component :is="Component" />
                </transition>
            </router-view>
            <Menu/>
        </div>
</template>

<style scoped>
  
</style>
