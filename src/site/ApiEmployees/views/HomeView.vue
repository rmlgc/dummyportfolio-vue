<script setup>
import WorkInProgress from '../../../components/commons/WorkinProgress.vue'
import {ref} from "vue";
import {storeToRefs} from 'pinia'
import {useWebStore} from '@/stores/useWebStore'
import {useEmployeeStore} from '../stores/useEmployeeStore'

const {webTitle, settingsWebsite, webLoading} = storeToRefs(useWebStore())
const {employees, employee, loading, error} = storeToRefs(useEmployeeStore())
const {fetchEmployees} = useEmployeeStore()
const WIP = ref(false)
webTitle.value = 'Employee'

fetchEmployees()

</script>
<template>
    <WorkInProgress v-if="WIP" title="Employee Site" load loadBottom></WorkInProgress>
    <div v-if="!WIP" class="container">
        <h1 class="text-h2">Lista empleados</h1>
        <div class="flex" style="gap:10px;">
            <div v-for="{index, key, id, employee_name, employee_salary, employee_age, profile_image} in employees"
                 style="flex:1 1 20%; border-bottom: 1px solid #333">
                <h2 class="text-h3">{{ employee_name }}</h2>
                <p class="text-h5">Sueldo: {{ employee_salary }}</p>
                <p class="text-h4">Edad: {{ employee_age }}</p>
            </div>
        </div>
    </div>
</template>
<script>

</script>