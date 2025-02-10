<script lang="ts" setup>
import { onMounted } from 'vue';

onMounted(() => {
    // const loader = document.querySelector('.loader') as HTMLElement;
    

    setTimeout(() => {
        const loaderContainer = document.querySelector('.loader-container') as HTMLElement;
        loaderContainer.classList.add('fade-out');
        loaderContainer.addEventListener('animationend', () => {
            loaderContainer.style.display = 'none';
        });
    }, 3000);
});
</script>

<template>
    <div class="loader-container fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black z-50">
        <div class="loader">
            
        </div>
    </div>
</template>

<style>
.loader-container.fade-out {
    animation: fadeOut 1s forwards;
}

@keyframes fadeOut {
    to {
        transform: translateY(-100%);
    }
}
</style>