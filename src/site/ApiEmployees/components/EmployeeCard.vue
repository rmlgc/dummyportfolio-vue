<script setup>
import {defineProps} from 'vue'

defineProps(
    {
        id: Number,
        lastName: String,
        firstName: String,
        email: String,
        contactNumber: String,
        salary: Number,
        age: Number,
        address: String,
        imageUrl: String,
        dob: String,
        open: {type: Boolean, default: false},
    }
)
</script>
<template>
    <div :class="`text-body1 card ${ open ? 'open': ''} `">
        <div class="card-head">
            <h2 class="text-h4 q-mb-none q-pb-none">{{ lastName }}</h2>
            <h2 class="text-h3 q-mt-none q-pt-none">{{ firstName }}</h2>
            <q-btn padding="xs" @click="open = !open" class="absolute-top-right q-mt-lg q-mr-lg" dense fab
                   :size="`${ open == true ? '1rem' : '1.5rem' }`"
                   :icon="`${ open == true ? 'sym_o_expand_less' : 'sym_s_expand_more' }`"/>
        </div>
        <div class="card-body">
            <p class="">Email: {{ email }}</p>
            <p class="">Teléfono: {{ contactNumber }}</p>
            <p class="">Sueldo: {{ salary }}</p>
            <p class="">Edad: {{ age }}</p>
            <p class="">Dirección: {{ address }}</p>
            <div class="card-image">
                <q-avatar>
                    <q-img
                        :alt="firstName+lastName+id"
                        :src="imageUrl"
                        :ratio="1">
                    </q-img>
                </q-avatar>
            </div>
        </div>
    </div>
</template>
<style lang="scss">

.card {
    background: var(--color-background-soft);
    position: relative;
    padding: 16px 12px;
    margin-top: clamp(10px, 5% + 20px, 75px);
    margin-left: clamp(10px, 5% + 20px, 75px);
    border-radius: 16px;

    &-head {
        margin-left: clamp(5px, 50%, 40px);
    }

    &-image {
        background: var(--color-background-soft);
        padding: 12px;
        border-radius: 100px;
        overflow: hidden;
        position: absolute;
        top: 0;
        left: 0;
        transform: translate(-50%, -50%);

        & .q-avatar {
            width: clamp(90px, 120px, 10vw);
            height: clamp(90px, 120px, 10vw);

        }
    }

    &-body {
        transition: all 2s ease-in-out;
        overflow: hidden;
        height: 0;
        font-size: 0;

        .open & {
            height: 100%;
            font-size: initial;
        }
    }

    &.open {
    }
}

</style>