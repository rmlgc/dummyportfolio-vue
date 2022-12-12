<script setup>
import WorkInProgress from '../../../components/commons/WorkinProgress.vue'
import {ref} from "vue";
import {storeToRefs} from 'pinia'
import {useWebStore} from '@/stores/useWebStore'
import {useEmployeeStore} from '../stores/useEmployeeStore'
import EmployeeCard from '../components/EmployeeCard.vue'

const {webTitle, settingsWebsite, webLoading} = storeToRefs(useWebStore())
const {employees, employee, loading, error} = storeToRefs(useEmployeeStore())
const {fetchEmployees} = useEmployeeStore()
const WIP = ref(false)
webTitle.value = 'Employee'

fetchEmployees()


</script>
<template>
    <WorkInProgress v-if="loading" title=" " description=" " load loadBottom></WorkInProgress>
    <div v-if="!loading" class="container q-px-sm">
        <h1 class="text-h2">Lista empleados</h1>
        <div class="employee-list">
            <EmployeeCard
                v-for="{id, lastName, firstName, email, contactNumber, salary, age, address, imageUrl ,dob} in employees"
                :id="id" :lastName="lastName" :firstName="firstName" :email="email" :contactNumber="contactNumber"
                :salary="salary" :age="age" :address="address" :imageUrl="imageUrl" :dob="dob">
            </EmployeeCard>
        </div>
    </div>
</template>
<style lang="scss">
.employee-list {
}

</style>