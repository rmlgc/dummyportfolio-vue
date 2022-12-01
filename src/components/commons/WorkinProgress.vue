<script setup lang="ts">
// type GreetingLike = string | (() => string) | MyGreeter;
interface Props {
    title?: string,
    description?: string,
    load?: boolean,
    loadBottom?: boolean,
    color?: string,
    colorBottom?: string,
}

const props = withDefaults(defineProps<Props>(), {
    description: 'Work in progress',
    load:false,
    loadBottom:false,
    color: 'secondary',
    colorBottom: 'secondary',
})
</script>
<template>
    <div>
        <q-linear-progress v-if="props.load" dark rounded indeterminate :color="color" :track-color="color" class="q-mb-sm"/>
        <div class="container text-center">
            <p class="text-h3 text-bold" v-if="props.title">{{ props.title }}</p>
            <h1 class="text-h2 text-bold">{{ props.description }}</h1>
        </div>
        <q-linear-progress v-if="props.loadBottom" dark rounded query indeterminate :color="colorBottom" :track-color="colorBottom" class="q-mt-xl"/>
    </div>
</template>
<script>

</script>