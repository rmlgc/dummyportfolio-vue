<script setup lang="ts">
import {ref} from 'vue'
import TabVue from '@/components/about/TabVue.vue'
import TabMe from '@/components/about/TabMe.vue'

const tab = ref('vue')
</script>
<template>
    <section class="container">
        <div class="q-pa-md">
            <q-card class="my-card q-mx-auto ">
                <q-tabs v-model="tab" class="text-teal">
                    <q-tab label="About Vue" name="vue"/>
                    <q-tab label="About me" name="me"/>
                </q-tabs>
                <q-separator/>
                <q-tab-panels v-model="tab" animated>
                    <q-tab-panel name="vue">
                        <TabVue></TabVue>
                    </q-tab-panel>
                    <q-tab-panel name="me">
                        <TabMe></TabMe>
                    </q-tab-panel>
                </q-tab-panels>
            </q-card>
        </div>
    </section>
</template>

<style lang="scss">
.my-card {
    //max-width: 300px;
}

@media (min-width: 1024px) {
    .about {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-flow: column;

        hr {
            width: 100%;
        }
    }
}
</style>
