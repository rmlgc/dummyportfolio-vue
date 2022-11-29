<script setup>
import MyLinktree from '@/components/commons/MyLinktree.vue'

</script>
<template>
    <q-footer reveal elevated>
        <q-toolbar>
            <q-toolbar-title>
                <q-avatar>
                    <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
                </q-avatar>
                <div>
                    <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
                    <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a> +
                    <a href="https://quasar.dev/" target="_blank" rel="noopener"> Quasar</a>.
                </div>
            </q-toolbar-title>
        </q-toolbar>
        <MyLinktree/>
    </q-footer>
</template>
<style scoped lang="scss">
.footer {
  position: fixed;
  bottom: -60px;
  left: 92vw;
  transition: bottom 1s ease-in-out;

  &:hover {
    bottom: 0;
  }
}
</style>