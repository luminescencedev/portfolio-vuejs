<script lang="ts" setup>
import { defineProps } from 'vue';

defineProps({
  isMenuOpen: {
    type: Boolean,
    required: true
  }
});
</script>

<template>
  <div :class="{ 'text-white mix-blend-difference': isMenuOpen }" class="flex flex-col gap-1" id="hover">
    <div class="first-row flex gap-1" id="hover">
      <span class="square" id="hover"></span>
      <span class="square dot" id="hover"></span>
      <span class="square" id="hover"></span>
    </div>
    <div class="second-row flex gap-1" id="hover">
      <span class="square dot" id="hover"></span>
      <span class="square" id="hover"></span>
      <span class="square dot" id="hover"></span>
    </div>
    <div class="third-row flex gap-1" id="hover">
      <span class="square" id="hover"></span>
      <span class="square dot" id="hover"></span>
      <span class="square" id="hover"></span>
    </div>
  </div>
</template>

<style>
.square {
  width: 2px;
  height: 2px;
  background-color: #09090b;
  display: inline-block;
  transition: all ease 0.3s;
}

.disabled {
  opacity: 0;
}

.text-white .square {
  background-color: #fff;
}
</style>