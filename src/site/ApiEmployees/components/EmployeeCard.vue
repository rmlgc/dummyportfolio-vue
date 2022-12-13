<script setup>
import {defineProps, ref} from 'vue'

const knowPassword = ref(false)
const pass = ref('')
const props = defineProps(
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
    <div ref="el" :class="`text-body1 card q-py-md ${ open ? 'open shadow-1': 'shadow-2'} `">
        <div class="card-head q-px-md">
            <h2 class="card-head-subtitle text-h4 q-mb-none q-pb-none">{{ lastName }}</h2>
            <h2 class="card-head-title text-h3 q-mt-none q-pt-none">{{ firstName }}</h2>
            <q-btn padding="xs" @click="open = !open" class="absolute-top-right q-mt-lg q-mr-lg" dense fab
                   :size="`${ open == true ? '1rem' : '1.5rem' }`"
                   :icon="`${ open == true ? 'sym_o_expand_less' : 'sym_s_expand_more' }`"/>
        </div>
        <q-separator></q-separator>
        <div class="card-body  inset-shadow-down q-px-sm">
            <p class="text-bold">{{ email }}</p>
            <p class="text-body2">Teléfono: <span class="text-bold">{{ contactNumber }}</span></p>
            <p class="text-body2">Dirección: <span class="text-bold">{{ address }}</span></p>
            <q-input v-if="!knowPassword"
                     class="q-my-md"
                     bottom-slots outlined v-model="pass" label="'password'" aria-required="true"
                     :rules='[
                         pass => pass.includes("password") || `write "password"`
                     ]'
                     @keydown.enter="pass.value.validate() ?knowPassword = true : knowPassword = false">
                <template v-slot:append>
                    <q-btn round dense flat icon="send"
                           @click="pass === 'password' ?knowPassword = true : knowPassword = false"/>
                </template>
            </q-input>
            <p class="text-body2">Sueldo: <span class="text-bold">{{ knowPassword ? salary : '*****' }}</span></p>
            <p class="text-body2">Edad: <span class="text-bold">{{ knowPassword ? age : '*****' }}</span></p>
        </div>
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
</template>
<style lang="scss">

.card {
    background: var(--color-background-soft);
    position: relative;
    border-radius: 16px;
    transition: all .5s linear;
    grid-row: span 1;
    display: flex;
    flex-flow: column;

    &.open {
        grid-row: span 2;
    }

    &-head {
        word-break: break-all;
        z-index: 1;
        position: relative;

        &-subtitle {
            margin-left: clamp(20px, 7vw, 80px);
        }
    }

    &-image {
        background: var(--color-background-soft);
        padding-top: 8px;
        padding-left: 8px;
        padding-bottom: 4px;
        padding-right: 4px;
        border-radius: 100px;
        overflow: hidden;
        position: absolute;
        top: 0;
        left: 0;
        transform: translate(-15%, -20%);

        & .q-avatar {
            width: clamp(60px, 10vw, 100px);
            height: clamp(60px, 10vw, 100px);

        }
    }

    &-body {
        transition: opacity 2.5s linear;
        overflow: hidden;
        word-break: break-all;
        display: none;
        flex: 1;

        .open & {
            display: block;
        }
    }

    &.open {
    }
}

</style>