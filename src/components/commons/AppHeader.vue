<script setup lang="ts">
import {storeToRefs} from 'pinia'
import {useWebStore} from '@/stores/useWebStore'
import AppHeaderRouteTab from '@/components/commons/AppHeaderRouteTab.vue'

const {webTitle, settingsWebsite, webLoading} = storeToRefs(useWebStore())
const {settingsWebsiteToggle} = useWebStore()
</script>
<template>
    <q-header reveal elevated class="bg-primary text-white" height-hint="1">
        <q-toolbar>
            <q-btn dense flat round icon="menu" @click="settingsWebsiteToggle"/>
            <q-avatar>
                <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
            </q-avatar>
            <q-tabs>
                <AppHeaderRouteTab v-if="$q.screen.gt.sm"></AppHeaderRouteTab>
                <q-btn-dropdown v-if="$q.screen.lt.md" auto-close stretch flat label="More...">
                    <q-list>
                        <AppHeaderRouteTab></AppHeaderRouteTab>
                    </q-list>
                </q-btn-dropdown>
            </q-tabs>
        </q-toolbar>
    </q-header>
</template>
<style scoped lang="scss">
</style>