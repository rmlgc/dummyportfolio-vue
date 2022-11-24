<script setup lang="ts">
import {ref} from 'vue'
import {storeToRefs} from 'pinia'
import {useWebStore} from '@//stores/useWebStore'

const {settingsWebsite, loading} = storeToRefs(useWebStore())
const link = ref('home')
</script>
<template>
  <q-drawer v-model="settingsWebsite.leftDrawerOpen" side="left" bordered>
    <q-scroll-area class="fit">
      <div class="q-px-xs">
        <q-list bordered padding class="rounded-borders text-primary">
          <q-item
              clickable
              v-ripple
              :active="link === 'home'"
              @click="link = 'home'"
              to="/"
              active-class="my-menu-link"
          >
            <q-item-section avatar>
              <q-icon name="inbox"/>
            </q-item-section>

            <q-item-section>Inbox</q-item-section>
          </q-item>

          <q-item
              clickable
              v-ripple
              :active="link === 'about'"
              @click="link = 'about'"
              to="/about"
              active-class="my-menu-link"
          >
            <q-item-section avatar>
              <q-icon name="send"/>
            </q-item-section>

            <q-item-section>Outbox</q-item-section>
          </q-item>
          <q-separator spaced/>
        </q-list>
      </div>
    </q-scroll-area>
  </q-drawer>
</template>
<style scoped lang="scss">

</style>