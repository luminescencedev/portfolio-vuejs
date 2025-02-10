<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue';

const cursorOutline = ref<HTMLElement | null>(null);
const isMenuOpen = ref(false);

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

    document.addEventListener('menuOpened', () => {
        isMenuOpen.value = true;
    });

    document.addEventListener('menuClosed', () => {
        isMenuOpen.value = false;
    });
});

watch(isMenuOpen, (newValue) => {
    if (cursorOutline.value) {
        if (newValue) {
            cursorOutline.value.classList.add('cursor-white');
        } else {
            cursorOutline.value.classList.remove('cursor-white');
        }
    }
});
</script>

<template>
<div class="z-100 fixed cursor">
    <div :class="{ 'cursor-white': isMenuOpen }" class="cursor-outline h-10 w-10 border border-zinc-950"></div>
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
    transition: width 0.3s ease, height 0.3s ease, border-color 0.3s ease;
}

.cursor-white {
    border-color: #fff;
}
</style>
