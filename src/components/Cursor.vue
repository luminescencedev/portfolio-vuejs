<script lang="ts" setup>
import { onMounted, ref } from 'vue';

const cursorOutline = ref<HTMLElement | null>(null);

const handleMouseOver = (event: MouseEvent) => {
    if ((event.target as HTMLElement).id === 'hover') {
        cursorOutline.value!.style.width = '60px';
        cursorOutline.value!.style.height = '60px';
    }
};

const handleMouseOut = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (target.id === 'hover') {
        cursorOutline.value!.style.width = '40px';
        cursorOutline.value!.style.height = '40px';
    }
};

onMounted(() => {
    cursorOutline.value = document.querySelector('.cursor-outline') as HTMLElement;

    window.addEventListener('mousemove', (e) => {
        if (cursorOutline.value) {
            const posX = e.clientX;
            const posY = e.clientY;

            cursorOutline.value.style.left = `${posX}px`;
            cursorOutline.value.style.top = `${posY}px`;
        }
    });

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    document.addEventListener('mouseleave', handleMouseOut);
});
</script>

<template>
<div class="z-100 fixed">
    <div class="cursor-outline h-10 w-10 border border-black/90"></div>
</div>
</template>

<style>
.cursor-outline {
    position: fixed;
    top: 0;
    left: 0;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    pointer-events: none;
    transition: width 0.3s ease, height 0.3s ease;
}
</style>
