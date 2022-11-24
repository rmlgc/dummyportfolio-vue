<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <section class="greetings flex justify-evenly container ">
    <div class="wrapper">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125"/><br>
      <img alt="Quasar logo" class="logo" src="https://cdn.quasar.dev/logo-v2/svg/logo.svg" width="125" height="125"/>
    </div>
    <div class="wrapper">
      <h1 class="green text-h2">{{ msg }}</h1>
      <h2 class="text-body1">
        I’ve successfully created a project with
        <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
        <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>. +
        <a href="https://quasar.dev/" target="_blank" rel="noopener"> Quasar</a>.
      </h2>
      <h3 class="text-h6">
        stay tune to my <a href="https://github.com/rmlgc" target="_blank" rel="noopener">GitHub</a> for see what's
        next?
      </h3>
    </div>
    <img alt="Erre logo" class="logo" src="https://avatars.githubusercontent.com/u/22599950?s=125&v=5" width="125"
         height="125"/>
  </section>
</template>

<style scoped>

</style>
