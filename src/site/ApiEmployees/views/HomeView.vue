<script setup>
import WorkInProgress from '../../../components/commons/WorkinProgress.vue'
import {reactive, ref} from "vue";
import {storeToRefs} from 'pinia'
import {useWebStore} from '@/stores/useWebStore'
import {useEmployeeStore} from '../stores/useEmployeeStore'
import EmployeeCard from '../components/EmployeeCard.vue'
import EmployeeCardInline from '../components/EmployeeCardInline.vue'
import EmployeeCardSlide from '../components/EmployeeCardSlide.vue'
import _ from 'lodash';

const {webTitle, settingsWebsite, webLoading} = storeToRefs(useWebStore())
const {employees, employee, loading, error} = storeToRefs(useEmployeeStore())
const {fetchEmployees} = useEmployeeStore()
const WIP = ref(false)
const filterText = ref('')
const regxFilterText = ref('Asd cono')
const asd = ref('Asd cono')
const open = ref(false)
const typeCard = reactive([
    {
        card: 'slide',
        name: 'Slide',
        description: `**Tarjetas de empleados en desarrollo**
        Tarjetas con la imagen en grande  con animación al desplegar la información
        `,
    },
    {
        card: 'minimal-inline',
        name: 'Minimal inline',
        description: 'Tarjetas con un diseño simple nombre y apellido en la misma linea',
    },
    {
        card: 'minimal',
        name: 'Minimal',
        description: 'Tarjetas Tarjetas con un diseño simple se presenta el apellido en pequeño y el nombre en grande',
    },
])
const typeCardIndex = ref(0)
const employeesCategory = ref(['HHRR', 'Mannager', 'Devops', 'Scrum master', 'Front-end', 'Back-end', 'Full-stack', 'Qa-team', 'Dessigner', 'Comunity Manager'])

const onFilter = () => {
    showEmployee()
}

const showEmployee = (firstName, lastName) => {
    let isInclude = false
    for (let i = 0; i < filterText.value.toLowerCase().split(' ').length; i++) {
        filterText.value.toLowerCase().split(' ')[i]
        if (!isInclude && _.includes(firstName.toLowerCase(), filterText.value.toLowerCase().split(' ')[i]) || _.includes(lastName.toLowerCase(), filterText.value.toLowerCase().split(' ')[i])) {
            isInclude = true
        }
    }
    return filterText.value.length <= 0 || isInclude
}

webTitle.value = 'Employee'

fetchEmployees()

const typeCardPosition = (pName) => {
    let value = _.findIndex(typeCard, {card: pName})
    if (value >= 0) {
        typeCardIndex.value = value
    }
}
const items = ref([ {}, {}, {}, {}, {}, {}, {} ])
const onLoad = (index, done)=> {
        // setTimeout(() => {
        //   items.value.push({}, {}, {}, {}, {}, {}, {})
        //   done()
        // }, 2000)
        fetchEmployees()
        done()
      }

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

            <q-btn padding="xs" @click="open = !open" class="hidden" dense fab
                   :size="`${ open == true ? '1rem' : '1.5rem' }`"
                   :icon="`${ open == true ? 'sym_o_expand_less' : 'sym_s_expand_more' }`"/>
        </div>
    </div>
    <div v-if="!loading" class="container q-px-sm q-pb-lg">
        <h1 class="text-h2">Lista empleados </h1>
        <q-btn-group rounded dense size="small">
            <q-btn size="xs" dense rounded color="primary" icon-right="arrow_back_ios"
                   label=" "
                   @click="typeCardIndex=(typeCardIndex-1)%typeCard.length <0 ? typeCard.length-1 : (typeCardIndex-1)%typeCard.length "/>
            <q-separator vertical></q-separator>
            <q-btn-dropdown dense size="md" auto-close rounded color="primary"
                            :label="`${typeCard[typeCardIndex].name}`">
                <!-- dropdown content goes here -->
                <q-list padding style="width: 250px">
                    <q-item clickable @click="typeCardPosition('minimal')">
                        <q-item-section avatar>
                            <q-avatar icon="view_agenda" color="purple" text-color="white"/>
                        </q-item-section>
                        <q-item-section>
                            <q-item-label>Minimal</q-item-label>
                            <q-item-label caption> simple card</q-item-label>
                        </q-item-section>
                        <q-item-section side class="hidden">
                            <q-icon name="info" color="amber"/>
                        </q-item-section>
                    </q-item>

                    <q-item clickable @click="typeCardPosition('minimal-inline')">
                        <q-item-section avatar>
                            <q-avatar icon="view_agenda" color="purple" text-color="white"/>
                        </q-item-section>
                        <q-item-section>
                            <q-item-label>Minimal inline</q-item-label>
                            <q-item-label caption>name and lastname inline</q-item-label>
                        </q-item-section>
                    </q-item>

                    <q-separator inset/>
                    <q-item-label header>Files</q-item-label>

                    <q-item clickable @click="typeCardPosition('slide')">
                        <q-item-section avatar>
                            <q-avatar icon="assignment" color="teal" text-color="white"/>
                        </q-item-section>
                        <q-item-section>
                            <q-item-label>London</q-item-label>
                            <q-item-label caption>March 1st, 2018</q-item-label>
                        </q-item-section>
                        <q-item-section side>
                            <q-icon name="info" color="amber"/>
                        </q-item-section>
                    </q-item>
                </q-list>
            </q-btn-dropdown>
            <q-separator vertical></q-separator>
            <q-btn size="xs" dense rounded color="primary" icon="arrow_forward_ios" label=" "
                   @click="typeCardIndex=(typeCardIndex+1)%typeCard.length"/>
        </q-btn-group>
        <p class="text-body2">
            {{ typeCard[typeCardIndex].description }}
        </p>
        <q-separator/>
        <br>
        <q-infinite-scroll @load="onLoad" :offset="250">
            <div class="employee-list q-pt-xs">
                <EmployeeCard v-show="typeCard[typeCardIndex].card=='minimal' && showEmployee(employe.name.first, employe.name.last)"
                            v-for="employe in employees"
                            :id="employe.id.value" :lastName="employe.name.last" :firstName="employe.name.first" :email="employe.email"
                            :contactNumber="employe.phone"
                            :salary="1000" :age="employe.dob.age" :address="`${employe.location.street.name} ${employe.location.street.number}, ${employe.location.city}, ${employe.location.state}, ${employe.location.postcode}, ${employe.location.country}`"
                            :imageUrl="`${employe.picture.large}`"
                            :dob="employe.dob.date"
                            :category="`${employeesCategory[Math.floor(Math.random() * (employeesCategory.length))]}`"
                            :key="`${employe.id.value}-minimal`">
                </EmployeeCard>
                <EmployeeCardInline
                    v-show="typeCard[typeCardIndex].card=='minimal-inline' && showEmployee(employe.name.first, employe.name.last)"
                    v-for ="employe in employees"
                    :id="employe.id.value" :lastName="employe.name.last" :firstName="employe.name.first" :email="employe.email"
                    :contactNumber="employe.phone"
                    :salary="1000" :age="employe.dob.age" :address="`${employe.location.street.name} ${employe.location.street.number}, ${employe.location.city}, ${employe.location.state}, ${employe.location.postcode}, ${employe.location.country}`"
                    :imageUrl="`${employe.picture.large}`"
                    :dob="employe.dob.date"
                    :category="`${employeesCategory[Math.floor(Math.random() * (employeesCategory.length))]}`"
                    :key="`${employe.id.value}-inline`">
                </EmployeeCardInline>
            </div>
            <div v-show="typeCard[typeCardIndex].card=='slide'" class="masonry-with-columns">
                <EmployeeCardSlide v-show="showEmployee(employe.name.first, employe.name.last)"
                                v-for="employe in employees"
                                :id="employe.id.value" :lastName="employe.name.last" :firstName="employe.name.first" :email="employe.email"
                                :contactNumber="employe.phone"
                                :salary="1000" :age="employe.dob.age" :address="`${employe.location.street.name} ${employe.location.street.number}, ${employe.location.city}, ${employe.location.state}, ${employe.location.postcode}, ${employe.location.country}`"
                                :imageUrl="`${employe.picture.large}`"
                                :dob="employe.dob.date"
                                :category="`${employeesCategory[Math.floor(Math.random() * (employeesCategory.length))]}`"
                                :key="`${employe.id.value}-default`">

                </EmployeeCardSlide>
            </div>
            <template v-slot:loading>
                <div class="row justify-center q-my-md">
                <q-spinner-dots color="primary" size="40px" />
                </div>
            </template>
        </q-infinite-scroll>
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
.masonry-with-columns {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 1px;
    grid-auto-rows: minmax(180px, auto);
    grid-auto-flow: dense;
    padding: 1px;
    @media screen and (max-width: 1500px) {
        grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
        grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    }
    @media screen and (max-width: 800px) {
        grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
    }
}

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