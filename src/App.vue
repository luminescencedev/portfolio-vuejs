<script setup lang="ts">
import Header from './components/Header.vue'
import Cursor from './components/Cursor.vue'
import Menu from './components/Menu.vue'
import Space from './components/Space.vue'
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
            <Space />
            <router-view v-slot="{ Component }">
                <transition name="page" mode="out-in">
                    <component :is="Component" class="px-6" />
                </transition>
            </router-view>
            <Menu/>
        </div>
</template>

<style scoped>
  
</style>