<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { gsap } from 'gsap';

const count = ref(0);

onMounted(() => {
    
        const text = document.querySelector('.text-container') as HTMLElement;
            text.classList.add('fade-out');
            text.addEventListener('animationend', () => {
                gsap.to(count, {
                    value: 100,
                    duration: 3,
                    ease: 'power3.inOut',
                    onUpdate: () => {
                        count.value = Math.round(count.value);
                    },
                    onComplete: () => {
                        const loaderContainer = document.querySelector('.loader-container') as HTMLElement;
                        loaderContainer.classList.add('go-up');
                        loaderContainer.addEventListener('animationend', () => {
                            loaderContainer.style.display = 'none';
                        });
                    }
                });
            });
    
});
</script>

<template>
    <div class="loader-container fixed z-101 top-0 left-0 h-full w-full flex items-center justify-center bg-zinc-950 ">
        <div class="loader w-screen h-screen flex flex-row">
            <div class="h-screen w-[33vw]">
            </div>
            <div class="h-screen w-[34vw] ">
                <div class="w-full h-[45vh]"></div>
                <div class="text-container w-full h-[30vh] flex flex-col justify-center overflow-hidden px-10">
                    <div class="absolute top-[55vh] left-[33vw] h-[10vh] w-[34vw] bg-zinc-950"></div>
                    <div class=" flex justify-end ">
                        <h1 class="text-5xl text-white leading-snug font-[PPEditorialNew-Italic]"><span class="text-outline">{{ count }}%</span></h1>
                    </div>
                    <div class="flex justify-center">
                        <div class="w-full">
                            <div class="bg-white h-0.5 rounded-full" :style="{ width: count + '%' }"></div>
                        </div>
                    </div>
                </div>
                <div class="w-full h-[45vh]"></div>
            </div>
            <div class="h-screen w-[33vw]">
            </div>
        </div>
    </div>
</template>

<style>
.loader-container.go-up {
    animation: goUp 2s forwards;
}

.text-container.fade-out {
    animation: fadeOut 1s ease-in-out forwards;
}

@keyframes goUp{
    to {
        transform: translateY(-100%);
    }
}

@keyframes fadeOut {
    from {
        height: 30vh;
    }
    to {
        height: 10vh;
    }
}

.text-outline {
  color: transparent;
  -webkit-text-stroke: 1px white; 
}

</style>