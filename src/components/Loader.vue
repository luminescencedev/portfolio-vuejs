<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { gsap } from 'gsap';

const count = ref(0);

onMounted(() => {

    gsap.to(count, {
        value: 100,
        duration: 3,
        ease: 'power1.inOut',
        onUpdate: () => {
            count.value = Math.round(count.value);
        },
        onComplete: () => {
            const loaderContainer = document.querySelector('.loader-container') as HTMLElement;
            loaderContainer.classList.add('fade-out');
            loaderContainer.addEventListener('animationend', () => {
                loaderContainer.style.display = 'none';
            });
        }
    });
});
</script>

<template>
    <div class="loader-container fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black z-50">
        <div class="loader h-full w-full">
            <div class="flex items-center justify-center h-full">
                <h1 class="text-9xl text-white font-[PPEditorialNew-Italic]">{{ count }} - 100</h1>
            </div>
        </div>
    </div>
</template>

<style>
.loader-container.fade-out {
    animation: fadeOut 2s forwards;
}

@keyframes fadeOut {
    to {
        transform: translateY(-100%);
    }
}
</style>