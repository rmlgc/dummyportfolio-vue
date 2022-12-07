<script setup>
import WorkInProgress from '../../../components/commons/WorkinProgress.vue'
import {ref} from "vue";
import {storeToRefs} from 'pinia'
import {useWebStore} from '@/stores/useWebStore'
import {useEmployeeStore} from '../stores/useEmployeeStore'

const {webTitle, settingsWebsite, webLoading} = storeToRefs(useWebStore())
const {employees, employee, loading, error} = storeToRefs(useEmployeeStore())
const { fetchEmployees } = useEmployeeStore()
const WIP = ref(false)
webTitle.value = 'Employee'

fetchEmployees()

</script>
<template>
    <WorkInProgress v-if="WIP" title="Employee Site" load loadBottom></WorkInProgress>
    <div v-if="!WIP" class="container">
        <h1 class="text-h2">List</h1>
{{employees}}
    </div>
</template>
<script>

</script>