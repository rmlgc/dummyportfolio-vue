<script setup lang="ts">
import {ref} from 'vue'
import GridCellFluid from '@/components/commons/GridCellFluid.vue'
import ErreEager from '@/components/commons/icons/ErreEager.vue'
import {storeToRefs} from 'pinia'
import {useWebStore} from '@//stores/useWebStore'

const {webTitle, settingsWebsite, webLoading} = storeToRefs(useWebStore())

webTitle.value = 'Dummyportfolio-vue'

</script>

<template>
    <div class="wrapper">
        <div class="grid">
            <GridCellFluid>
                <template v-slot:title>
                    <p class="text-center">
                        list employee <span class="inline-block">Site
                        <q-btn dense class="" round icon="sym_o_link" to="/employee"/>
                        </span>
                    </p>
                </template>
                <p class="text-bold">Simple web app where list data from
                    <a href="https://dummyapis.com/" rel="noopener" target="_blank">dummyapis.com/</a>
                    <q-btn rounded to="/employee" icon-right="sym_o_link" class="q-mx-md"> See App</q-btn>
                </p>
                <p>
                    You'll seen employee card with different style and list more data for people who have credential.
                </p>
                <blockquote class="quote">
                    <small>
                        <i>
                            <q-icon name="format_quote"></q-icon>
                            I try to be better designer and have the best presentation "style"
                            but for this site "insert 'password'" is't had best security practice.
                        </i>
                    </small>
                </blockquote>
            </GridCellFluid>
            <GridCellFluid>
                <template v-slot:title>
                    <p class="text-center">
                        about my
                        <span class="inline-block">portfolio
                        <q-btn dense class="" round icon="sym_o_link" to="/about"/>
                        </span>
                    </p>
                </template>
                <p class="">
                    Reed more details and what technologies are used in this portfolio.
                <q-btn rounded to="/about" icon-right="sym_o_link"> see info</q-btn>
                </p>
                <p class="">
                    Read 'about me' and all behind this web App developed.
                </p>
                <blockquote class="quote">
                    <small>
                        <i>
                            <q-icon name="format_quote"></q-icon>
                            It's not simple
                            formulate the correct question to find it in stackoverflow.
                        </i>
                    </small>
                </blockquote>
            </GridCellFluid>
            <GridCellFluid>
                <template v-slot:title>
                    <p class="text-center">
                        compilation links about
                        <span class="inline-block">me
                        <q-btn dense class="" round icon="sym_o_link" href="https://linktr.ee/rommelgc" rel="noopener"
                               target="_blank"/>
                            </span>
                    </p>
                </template>
                <p>
                    All my links for know more about me :)
                </p>
                <p class="relative-position">
                <q-btn rounded href="https://linktr.ee/rommelgc" rel="noopener" target="_blank" icon-right="sym_o_link">
                    Ver mas
                </q-btn>
                <ErreEager class="q-mx-sm"/>
                </p>
                <blockquote class="quote">
                    <small>
                        <i>
                            <q-icon name="format_quote"></q-icon>
                            Rommel Garcia Coronado
                            📱​Desarrollador Web FullStack🖥️​​
                            🎥Creador de contenido como hobie​🐒​
                        </i>
                    </small>
                </blockquote>
            </GridCellFluid>
            <GridCellFluid image="https://images.pexels.com/photos/7948965/pexels-photo-7948965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
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