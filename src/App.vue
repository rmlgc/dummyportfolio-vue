<script setup lang="ts">
import {RouterLink, RouterView, useRouter} from 'vue-router'
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
            <q-page>
                <RouterView/>
            </q-page>
        </q-page-container>
        <AppFooter>
        </AppFooter>
    </q-layout>
</template>
<style scoped>

</style>
