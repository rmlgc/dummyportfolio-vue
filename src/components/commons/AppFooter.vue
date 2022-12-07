<script setup>
import MyLinktree from '@/components/commons/MyLinktree.vue'

</script>
<template>
    <div>
        <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
        <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a> +
        <a href="https://quasar.dev/" target="_blank" rel="noopener"> Quasar</a>.
    </div>
    <br>
    <br>
    <br>
    <q-footer reveal elevated class="bg-glass--primary bg-glass--slim">
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