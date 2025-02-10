<script lang="ts" setup>

</script>

<template>
  <div class="menu w-screen h-screen top-[-100%] fixed left-0 z-[9] bg-white">
    <div>
      <div class="flex items-center justify-center h-full">
        <ul class="flex flex-col gap-4">
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/project">Projects</router-link>
          </li>
          <li>
            <router-link to="/about">About</router-link>
          </li>
          <li>
            <router-link to="/contact">Contact</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style>
.menu {
  transition: top 1s ease;
}

</style>