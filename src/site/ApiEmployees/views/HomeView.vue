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
            <div v-for="{id, lastName, firstName, email, contactNumber, salary, age, address, imageUrl ,dob} in employees"
                 style="flex:1 1 20%; border-bottom: 1px solid #333" class="text-body1">
                <h2 class="text-h3">{{ lastName + ', ' + firstName }}</h2>
                <p class="">Email: {{ email }}</p>
                <p class="">Telefono: {{ contactNumber }}</p>
                <p class="">Sueldo: {{ salary }}</p>
                <p class="">Edad: {{ age }}</p>
                <p class="">Direccion: {{ address }}</p>
                <img :src="imageUrl" alt="{{firstName+lastName+id}}">
            </div>
        </div>
    </div>
</template>
<script>

</script>