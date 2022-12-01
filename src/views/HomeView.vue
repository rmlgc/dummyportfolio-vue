<script setup lang="ts">
import {ref} from 'vue'
import GridCellFluid from '@/components/commons/GridCellFluid.vue'
import MyLinktree from '@/components/commons/MyLinktree.vue'
import {storeToRefs} from 'pinia'
import {useWebStore} from '@//stores/useWebStore'

const {webTitle, settingsWebsite, webLoading} = storeToRefs(useWebStore())

webTitle.value = 'Dummyportfolio-vue'

</script>

<template>
    <div class="wrapper">
        <div class="grid">
            <GridCellFluid>
                <template v-slot:title to="asd">
                    <p class="clip">
                        Employee Site
                        <q-btn class="clip-btn" round icon="sym_o_link" to="/employee"/>
                    </p>
                </template>
                <p class="text-bold">Simple web app que recibe datos de usuarios de <a
                    href="http://dummy.restapiexample.com/" rel="noopener" target="_blank" class="text-secondary">http://dummy.restapiexample.com/</a>
                </p>
                <q-btn rounded to="/employee" icon-right="sym_o_link"> Ver App</q-btn>
            </GridCellFluid>
            <GridCellFluid>
                <template v-slot:title to="asd">
                    <p class="clip">
                        Sobre esta web
                        <q-btn class="clip-btn" round icon="sym_o_link" to="/about"/>
                    </p>
                </template>
                <p class="text-bold">Información básica del proyecto y del desarrollador</p>
                <q-btn rounded to="/about" icon-right="sym_o_link"> Ver info</q-btn>
            </GridCellFluid>
            <GridCellFluid>
                <template v-slot:title to="asd">
                    <p class="clip">
                        mas sobre mi
                        <q-btn class="clip-btn" round icon="sym_o_link" href="https://linktr.ee/rommelgc" rel="noopener"
                               target="_blank"/>
                    </p>
                </template>
                <p class="text-bold">Quieres saber mas sobre mi u otros enlaces de interes clica en </p>
                <q-btn rounded href="https://linktr.ee/rommelgc" rel="noopener" target="_blank" icon-right="sym_o_link">
                    Ver mas
                </q-btn>
                <MyLinktree></MyLinktree>
            </GridCellFluid>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 75vh;
    width: 100%;
}

.grid {
    width: 100%;
    display: flex;
    gap: 0px;
    flex-wrap: wrap;
    position: relative;
    @media screen and (max-width: 700px) {
        gap: 12px;
    }
}
</style>