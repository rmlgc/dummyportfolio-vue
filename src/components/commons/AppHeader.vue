<script setup lang="ts">
import {storeToRefs} from 'pinia'
import {useWebStore} from '@/stores/useWebStore'
import AppHeaderRouteTab from '@/components/commons/AppHeaderRouteTab.vue'
import ErreEager from '@/components/commons/icons/ErreEager.vue'
import MyLinktree from '@/components/commons/MyLinktree.vue'

const {webTitle, settingsWebsite, webLoading} = storeToRefs(useWebStore())
const {settingsWebsiteToggle} = useWebStore()
</script>
<template>
    <q-header v-if="$q.screen.gt.sm" dense reveal elevated
              :class="`bg-glass--primary text-white ${settingsWebsite.leftDrawerOpen ? 'active' : ''}`" height-hint="1">
        <q-toolbar>
            <q-separator vertical></q-separator>
            <q-btn outline flat icon="sym_o_menu" @click="settingsWebsiteToggle"/>
            <q-separator vertical></q-separator>
            <div class="inline-block">
                <MyLinktree/>
            </div>
        </q-toolbar>
    </q-header>
    <q-header v-if="!$q.screen.gt.sm">
    </q-header>
</template>
<style scoped lang="scss">
</style>