<script setup lang="ts">
import {storeToRefs} from 'pinia'
import {useWebStore} from '@/stores/useWebStore'
import AppHeaderRouteTab from '@/components/commons/AppHeaderRouteTab.vue'
import ErreEager from '@/components/commons/icons/ErreEager.vue'

const {webTitle, settingsWebsite, webLoading} = storeToRefs(useWebStore())
const {settingsWebsiteToggle} = useWebStore()
</script>
<template>
    <q-header v-if="$q.screen.gt.sm"  dense reveal elevated class="bg-glass--primary text-white active" height-hint="1" :style="`$q.screen.gt.sm ? filter:blur(5px);:''`">
        <q-toolbar>
            <q-btn dense flat round right icon="menu" @click="settingsWebsiteToggle"/>
                <ErreEager/>
        </q-toolbar>
    </q-header>
    <q-header v-if="!$q.screen.gt.sm" >
    </q-header>
</template>
<style scoped lang="scss">
</style>