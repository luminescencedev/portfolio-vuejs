<script lang="ts" setup>

</script>

<template>
  <div>
    <MagneticComponent :padding-x="60" :padding-y="60">
      <h1 class="text-4xl font-bold">Welcome to My Portfolio</h1>
    </MagneticComponent>
    <p class="mt-4 text-lg">
      Explore my projects and learn more about my work.
    </p>
    <router-link to="/projects" class="mt-6 inline-block bg-black text-white py-2 px-4 rounded">
      View Projects
    </router-link>
  </div>
</template>

<style>

</style>