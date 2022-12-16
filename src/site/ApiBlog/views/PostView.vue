<script setup lang="ts">
import {ref} from "vue";
import {RouterLink, useRoute} from 'vue-router'
import {storeToRefs} from 'pinia'
import {usePostStore} from '../stores/usePostStore'
import {useAuthorStore} from '../stores/useAuthorStore'
import WorkInProgress from '@/components/commons/WorkinProgress.vue'
import {useWebStore} from '@/stores/useWebStore'
import PostView from '../components/PostView.vue'

const {webTitle, settingsWebsite, webLoading} = storeToRefs(useWebStore())
const {post, loading, error} = storeToRefs(usePostStore())
const {fetchPosts, fetchPost} = usePostStore()
const WIP = ref(false)

webTitle.value = 'Blog'
fetchPosts()


const route = useRoute()
const {getPostAuthor} = storeToRefs(useAuthorStore())
const {fetchAuthors} = useAuthorStore()

fetchAuthors()
fetchPost(route.params.id)

</script>
<template>
    <WorkInProgress v-if="WIP" title="Employee Site" load loadBottom></WorkInProgress>

    <div v-if="!WIP">
        <p v-if="loading">Loading post...</p>
        <p v-if="error">{{ error.message }}</p>
        <p v-if="post">
            <PostView :post="post" :author="getPostAuthor"></PostView>
        </p>
    </div>
</template>
<script>

</script>