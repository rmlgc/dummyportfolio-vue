<script setup>
import WorkInProgress from '../../components/commons/WorkinProgress.vue'
import { RouterLink } from 'vue-router'
import { storeToRefs } from 'pinia'
import { usePostStore } from './stores/usePostStore'
import {ref} from "vue";

const { posts, loading, error } = storeToRefs(usePostStore())
const { fetchPosts } = usePostStore()
const WIP = ref(false)

fetchPosts()

</script>
<template>
    <WorkInProgress v-if="WIP" title="Employee Site" load loadBottom></WorkInProgress>

    <div  v-if="!WIP">
        <p v-if="loading">Loading posts...</p>
        <p v-if="error">{{ error.message }}</p>
        <div v-if="posts" v-for="post in posts" :key="post.id">
            <RouterLink :to="`/post/${post.id}`">{{ post.title }}</RouterLink>
        <p>{{ post.body }}</p>
        </div>
    </div>
</template>
<script>

</script>