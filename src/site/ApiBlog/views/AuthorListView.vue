<script setup lang="ts">
import {RouterLink} from 'vue-router'
import {storeToRefs} from 'pinia'
import {useAuthorStore} from '../stores/useAuthorStore'
import {ref} from "vue";
import {useWebStore} from "../../../stores/useWebStore";
import WorkInProgress from '@/components/commons/WorkinProgress.vue'

const {webTitle, settingsWebsite, webLoading} = storeToRefs(useWebStore())
const {authors} = storeToRefs(useAuthorStore())
const {fetchAuthors} = useAuthorStore()
const WIP = ref(false)
webTitle.value = 'Blog'

fetchAuthors()
</script>

<template>
    <WorkInProgress v-if="WIP" title="Employee Site" load loadBottom></WorkInProgress>
    {{ authors[0] }}
    <div v-if="!WIP" class="container q-px-sm
.">
        <h1>Author List</h1>
        <p v-if="authors" v-for=" (username, name, id) in authors" :key="id">
            <RouterLink :to="`/author/${username}`">{{ name }}</RouterLink>
        </p>
    </div>
</template>