<script setup lang="ts">
import {ref} from 'vue'
import {storeToRefs} from 'pinia'
import {useWebStore} from '@//stores/useWebStore'

const {settingsWebsite, webLoading} = storeToRefs(useWebStore())
const link = ref('home')
</script>
<template>
    <q-drawer v-model="settingsWebsite.leftDrawerOpen" side="left" bordered>
        <q-scroll-area class="fit">
            <div class="q-px-xs">
                <q-list bordered padding class="rounded-borders text-primary">
                    <q-item
                        clickable
                        v-ripple
                        :active="link === 'home'"
                        @click="link = 'home'"
                        to="/"
                        active-class="my-menu-link"
                    >
                        <q-item-section avatar>
                            <q-icon name="home"/>
                        </q-item-section>

                        <q-item-section>Home</q-item-section>
                    </q-item>
                    <q-separator spaced/>
                    <q-item
                        clickable
                        v-ripple
                        :active="link === 'employeeSite'"
                        @click="link = 'employeeSite'"
                        to="/employee"
                        active-class="my-menu-link"
                    >
                        <q-item-section avatar>
                            <q-icon name="sym_o_badge"/>
                        </q-item-section>

                        <q-item-section>Employee Site</q-item-section>
                    </q-item>
                    <q-separator spaced/>
                    <q-item
                        clickable
                        v-ripple
                        :active="link === 'about'"
                        @click="link = 'about'"
                        to="/about"
                        active-class="my-menu-link"
                    >
                        <q-item-section avatar>
                            <q-icon name="sym_o_info"/>
                        </q-item-section>

                        <q-item-section>About</q-item-section>
                    </q-item>

                </q-list>
            </div>
        </q-scroll-area>
    </q-drawer>
</template>
<style scoped lang="scss">

</style>