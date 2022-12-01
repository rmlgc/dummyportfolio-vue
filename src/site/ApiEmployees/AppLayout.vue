<script setup>
import WorkInProgress from '../../components/commons/WorkinProgress.vue'
import {ref} from "vue";
import {storeToRefs} from 'pinia'
import {useWebStore} from '@/stores/useWebStore'

const {webTitle, settingsWebsite, webLoading} = storeToRefs(useWebStore())
const WIP = ref(true)
webTitle.value = 'Employee'

</script>
<template>
    <WorkInProgress v-if="WIP" title="Employee Site" load loadBottom></WorkInProgress>
    <div v-if="!WIP">

    </div>
</template>
<script>

</script>