<script setup lang="ts">
import {storeToRefs} from 'pinia'
import {useWebStore} from '@//stores/useWebStore'

const {settingsWebsite, loading} = storeToRefs(useWebStore())
const {settingsWebsiteToggle} = useWebStore()
</script>
<template>
  <q-header reveal elevated class="bg-primary text-white" height-hint="1">
    <q-toolbar>
      <q-btn dense flat round icon="menu" @click="settingsWebsiteToggle"/>

      <q-toolbar-title>
        <q-avatar>
          <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
        </q-avatar>
        Dummyportfolio-vue
      </q-toolbar-title>
    </q-toolbar>

    <q-tabs align="left">
      <q-route-tab to="/" label="Home"/>
      <q-route-tab to="/about" label="About"/>
    </q-tabs>
  </q-header>
</template>
<style scoped lang="scss">
</style>