<script setup lang="ts">
import {RouterLink, RouterView, useRouter} from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import AppFooter from '@/components/commons/AppFooter.vue'
import AppAside from '@/components/commons/AppAside.vue'
import AppHeader from '@/components/commons/AppHeader.vue'
import {watch, onMounted, ref} from "vue";
import {storeToRefs} from 'pinia'
import {useWebStore} from '@//stores/useWebStore'
import {useQuasar} from 'quasar'

const {settingsWebsite} = storeToRefs(useWebStore())
const router = useRouter();
const $q = useQuasar()




  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    $q.dark.set("auto")
  }
onMounted(async () => {
})

watch(() => settingsWebsite.value, (n) => {
  console.log(n, " value changed", console.table(settingsWebsite.leftDrawerOpen))
});
watch(() => router, (n) => {
  console.log(n, " value changed", console.table(router))
});
</script>

<template>
  <q-layout view="hHh Lpr fFf">
    <AppHeader/>
    <AppAside/>
    <q-page-container>
      <q-page padding>
        <HelloWorld msg="Did it!"/>
        <RouterView/>
      </q-page>
    </q-page-container>

    <q-footer reveal elevated>
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          <div>
            <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
            <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.+
            <a href="https://quasar.dev/" target="_blank" rel="noopener"> Quasar</a>.
          </div>
        </q-toolbar-title>
      </q-toolbar>
      <AppFooter></AppFooter>
    </q-footer>
  </q-layout>
</template>


<style scoped>

</style>
