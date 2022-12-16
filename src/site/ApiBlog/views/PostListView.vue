<script setup lang="ts">
import {ref} from "vue";
import {RouterLink} from 'vue-router'
import {storeToRefs} from 'pinia'
import {usePostStore} from '../stores/usePostStore'
import WorkInProgress from '@/components/commons/WorkinProgress.vue'
import {useWebStore} from '@/stores/useWebStore'

const {webTitle, settingsWebsite, webLoading } = storeToRefs(useWebStore())
const {posts, loading, error} = storeToRefs(usePostStore())
const {fetchPosts} = usePostStore()
const WIP = ref(false)

webTitle.value = 'Blog'
fetchPosts()

</script>
<template>
    <WorkInProgress v-if="WIP" title="Employee Site" load loadBottom></WorkInProgress>

    <div v-if="!WIP">
        <p v-if="loading">Loading posts...</p>
        <p v-if="error">{{ error.message }}</p>
        <div v-if="posts" v-for="(id, title, body) in posts" :key="id">
            <RouterLink :to="`/post/${id}`">{{ title }}</RouterLink>
            <p>{{ body }}</p>
        </div>
    </div>
</template>
<script>

</script>