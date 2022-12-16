<script setup>
import WorkInProgress from '../../../components/commons/WorkinProgress.vue'
import {ref} from "vue";
import {storeToRefs} from 'pinia'
import {useWebStore} from '@/stores/useWebStore'
import {useEmployeeStore} from '../stores/useEmployeeStore'
import EmployeeCard from '../components/EmployeeCard.vue'
import _ from 'lodash';

const {webTitle, settingsWebsite, webLoading} = storeToRefs(useWebStore())
const {employees, employee, loading, error} = storeToRefs(useEmployeeStore())
const {fetchEmployees} = useEmployeeStore()
const WIP = ref(false)
const filterText = ref('')
const regxFilterText = ref('Asd cono')
const asd = ref('Asd cono')
const open = ref(false)

const onFilter = () => {
    showEmployee()
}

const showEmployee = (firstName, lastName) => {
console.log(
    filterText.value.toLowerCase().split(' ')
)
    let isInclude =false
    for (let i = 0; i < filterText.value.toLowerCase().split(' ').length; i++) {
        filterText.value.toLowerCase().split(' ')[i]
        if(!isInclude && _.includes(firstName.toLowerCase(), filterText.value.toLowerCase().split(' ')[i]) || _.includes(lastName.toLowerCase(), filterText.value.toLowerCase().split(' ')[i])){
            isInclude=true
        }
    }
    return filterText.value.length <= 0 || isInclude
}

webTitle.value = 'Employee'

fetchEmployees()


</script>
<template>
    <WorkInProgress v-if="loading" title=" " description=" " load loadBottom></WorkInProgress>
    <div v-if="!loading && !$q.screen.gt.sm"
         class="employee-filter bg-glass--white-dense bg-glass--slim q-px-lg shadow-2">
        <div class="container flex items-end">
            <p class="text-h6">filter options:</p>
            <q-form ref="myForm"
                    @submit="onFilter"
                    class="employee-filter-form text-bold"
            >
                <q-input class="q-mb-sm text-bold"
                         dense bottom-slots outlined
                         v-model="filterText"
                         label="filter by name and surname"
                         aria-required="true"
                         hint="found 0 results"
                         @keyup="onFilter"
                >
                    <template v-slot:append>
                        <q-btn round dense flat icon="search"
                               @click='onFilter' color="positive"/>
                    </template>
                </q-input>
            </q-form>
            <q-btn padding="xs" @click="open = !open" class="" dense fab
                   :size="`${ open == true ? '1rem' : '1.5rem' }`"
                   :icon="`${ open == true ? 'sym_o_expand_less' : 'sym_s_expand_more' }`"/>
        </div>
    </div>
    <div v-if="!loading" class="container q-px-sm q-pb-lg">
        <h1 class="text-h2">Lista empleados</h1>
        <div class="employee-list q-pt-xs">
            <EmployeeCard v-show="showEmployee(firstName, lastName)"
                          v-for="{id, lastName, firstName, email, contactNumber, salary, age, address, imageUrl ,dob} in employees"
                          :id="id" :lastName="lastName" :firstName="firstName" :email="email"
                          :contactNumber="contactNumber"
                          :salary="salary" :age="age" :address="address" :imageUrl="imageUrl" :dob="dob"
                          :key="id">
            </EmployeeCard>
        </div>
    </div>
    <div v-if="!loading && $q.screen.gt.sm"
         class="employee-filter bg-glass--white-dense bg-glass--slim q-px-lg shadow-up-2">
        <div class="container ">
            <p class="text-h6">
                <q-btn padding="xs" @click="open = !open" class="hidden" dense fab
                       :size="`${ open == true ? '1rem' : '1.5rem' }`"
                       :icon="`${ open == true ? 'sym_o_expand_less' : 'sym_s_expand_more' }`"/>
                filter options:
            </p>
            <q-form ref="myForm"
                    @submit="onFilter"
                    class="employee-filter-form flex items-start"
            >
                <q-input class="q-mb-sm text-bold"
                         dense bottom-slots outlined
                         v-model="filterText"
                         label="filter by name"
                         aria-required="true"
                         hint="found 0 results"
                         @keyup="onFilter"
                >
                    <template v-slot:append>
                        <q-btn round dense flat icon="search"
                               @click='onFilter' color="positive"/>
                    </template>
                </q-input>
            </q-form>

        </div>
    </div>
</template>
<style lang="scss">
.employee {

    &-list {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        //grid-auto-rows: 50px;
        grid-gap: 32px 24px;
        transition: all .5s linear;
        @media screen and (max-width: 1500px) {
            grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
        }
        @media screen and (max-width: 900px) {
            grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
        }

    }

    &-filter {
        position: sticky;
        bottom: 0;
        z-index: 3;
        animation: all 1s linear;
        //transform: translateY(70%);
        @media screen and (max-width: 1024px) {
            top: 0;
            //transform: translateY(-70%);
        }

        &-form {
            flex: 1;
        }
    }
}


</style>