<script setup>
import { RouterLink } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useCommentStore } from '../stores/useCommentsStore'
import PostComments from '../components/PostComments.vue'

defineProps(['post', 'author'])

const { getPostComments } = storeToRefs(useCommentStore())
const { fetchComments } = useCommentStore()

fetchComments()
</script>

<template>
    <div>
        <div>
            <h2>{{ post.title }}</h2>
            <p v-if="author">Written by: <RouterLink :to="`/author/${author.username}`">{{ author.name }}</RouterLink>
                | <span>Comments: {{ getPostComments.length }}</span>
            </p>
            <p>{{ post.body }}</p>
        </div>
        <hr>
        <h3>Comments:</h3>
        <PostComments :comments="getPostComments"></PostComments>
    </div>
</template>