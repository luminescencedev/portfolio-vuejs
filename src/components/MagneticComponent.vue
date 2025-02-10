<template>
  <div class="detection-area" id="hover"  @mousemove="handleMouseMove" @mouseleave="handleMouseLeave" :style="cssVars">
    <div ref="magnetic" id="hover" class="magnetic-content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import gsap from 'gsap';

const magnetic = ref<HTMLElement | null>(null);

const props = defineProps({
  paddingX: {
    type: Number,
    default: 60, 
  },
  paddingY: {
    type: Number,
    default: 60, 
  },
});

const cssVars = computed(() => ({
  '--padding-x': `${props.paddingX}px`,
  '--padding-y': `${props.paddingY}px`,
}));

const handleMouseMove = (e: MouseEvent) => {
  if (!magnetic.value) return;

  const { clientX, clientY } = e;
  const { height, width, left, top } = magnetic.value.getBoundingClientRect();

  // Centre du composant
  const centerX = left + width / 2;
  const centerY = top + height / 2;

  // Distance de la souris par rapport au centre du composant
  const distanceX = clientX - centerX;
  const distanceY = clientY - centerY;

  // Distance totale (Pythagore)
  const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

  // Si la souris est dans le rayon de détection
  if (distance <= Math.max(props.paddingX, props.paddingY)) {
    // Calculer l'effet magnétique en fonction de la distance
    const strength = 1.3 - distance / Math.max(props.paddingX, props.paddingY);
    const x = distanceX * strength;
    const y = distanceY * strength;

    xTo(x);
    yTo(y);
  }
};

const handleMouseLeave = () => {
  xTo(0);
  yTo(0);
};

let xTo: gsap.QuickToFunc, yTo: gsap.QuickToFunc;

onMounted(() => {
  if (magnetic.value) {
    xTo = gsap.quickTo(magnetic.value, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
    yTo = gsap.quickTo(magnetic.value, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });
  }
});
</script>

<style scoped>

.detection-area {
  position: relative;
  display: flex;
  justify-content: center;
   padding: var(--padding-y) var(--padding-x); 
  margin: calc(-1 * var(--padding-y)) calc(-1 * var(--padding-x));
}

.magnetic-content {
  position: relative;
  display: inline-block;
}
</style>