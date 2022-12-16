<script setup>
import { RouterLink } from 'vue-router'

defineProps(['author', 'posts'])
</script>

<template>
    <div>
        <h1>{{author.name}}</h1>
        <p>{{posts.length}} posts written.</p>
        <p v-for="post in posts" :key="post.id">
            <RouterLink :to="`/post/${post.id}`">{{ post.title }}</RouterLink>
        </p>
    </div>
</template>