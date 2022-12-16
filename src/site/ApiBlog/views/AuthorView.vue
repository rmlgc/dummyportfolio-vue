<script setup lang="ts">
import {computed, ref} from 'vue'
import {useRoute} from 'vue-router'
import {storeToRefs} from 'pinia'
import {useAuthorStore} from '../stores/useAuthorStore'
import {usePostStore} from '../stores/usePostStore'
import {useWebStore} from "@/stores/useWebStore";
import AuthorView from '../components/AuthorView.vue'

const {webTitle, settingsWebsite, webLoading} = storeToRefs(useWebStore())
const { authors } = storeToRefs(useAuthorStore())
const { getPostsPerAuthor } = storeToRefs(usePostStore())
const { fetchAuthors } = useAuthorStore()
const { fetchPosts } = usePostStore()
const WIP = ref(false)
const route = useRoute()
webTitle.value = 'Blog'

fetchAuthors()


const getAuthorByUserName : any = computed(() => {
    return authors.value.find((author) => {
        const {username} = author;
        return username === route.params.username;
    })
})

fetchPosts()
</script>

<template>
    <div>
        <AuthorView
            :author="getAuthorByUserName"
            :posts="getPostsPerAuthor(getAuthorByUserName.id)">
        </AuthorView>
    </div>
</template>