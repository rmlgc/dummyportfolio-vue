<script setup>
import {defineProps, ref} from 'vue'
import {useQuasar} from 'quasar'

const $q = useQuasar()
// const myForm = ref(null)
const knowPassword = ref(false)
const pass = ref('')
const passError = ref(false)
const passErrorMessage = ref('')
const resetTimer = ref(0)
const resetTimerMax = ref(10000)
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
        category:String,
    }
)

const onSubmit = () => {
    console.log(pass.value !== /password/)
    if (!pass.value.match(/^password$/gm)) {
        passError.value = true
        $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'write "password"',
            position: "bottom-left",
        })
        passErrorMessage.value = `type 'password'`
    } else {
        passError.value = false
        knowPassword.value = true
        passError.value = false
        $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Submitted',
            position: "bottom-left",
        })
        resetCountdown()
    }
}

const resetCountdown = () => {
    resetTimer.value = resetTimerMax.value;
    let interval = setInterval(() => {
        if (resetTimer.value === 0) {
            clearInterval(interval)
            onReset()
        } else {
            resetTimer.value -= 100
        }
    }, 100)
}

const onReset = () => {
    knowPassword.value = false
    pass.value = ''
}


</script>
<template>
    <div ref="el" :class="`text-body1 card q-py-md ${ open ? 'open shadow-1': 'shadow-2'} `">asd
        <div class="card-head q-px-md">
            <h2 class="card-head-subtitle text-h4 q-my-none q-pb-none">{{ lastName }}</h2>
            <p class="card-head-title text-h3 q-my-none q-pt-none">{{ firstName }}</p>
            <p class="text-body2 q-my-xs">{{ category }}</p>
            <p class="text-body2 text-bold">{{ email }}</p>
            <q-btn padding="xs" @click="open = !open" class="absolute-top-right q-mt-md q-mr-md" dense fab
                   :size="`${ open == true ? '1rem' : '1.5rem' }`"
                   :icon="`${ open == true ? 'sym_o_expand_less' : 'sym_s_expand_more' }`"/>
        </div>
        <q-separator></q-separator>
        <div class="card-body  inset-shadow-down q-px-sm">

            <q-form v-if="!knowPassword" ref="myForm"
                    @submit="onSubmit"
            >
                <q-input v-if="!knowPassword"
                         class="q-mb-sm"
                         dense bottom-slots outlined
                         v-model="pass"
                         label="insert 'password'"
                         aria-required="true"
                         hint="Insert 'password' for see more details"
                         type="password"
                         :error=passError
                         :error-message="passErrorMessage"
                >
                    <template v-slot:append>
                        <q-btn round dense flat icon="send"
                               @click='onSubmit' color="positive"/>
                    </template>
                </q-input>
            </q-form>
            <q-btn v-if="knowPassword" icon="lock_reset" dense fab-mini label="hide" type="reset" color="negative" flat
                   class="q-ml-sm" @click="onReset">
                <div slot="icon">
                    <q-circular-progress
                        show-value
                        font-size="12px"
                        :value="((resetTimer*100)/resetTimerMax)"
                        size="25px"
                        :thickness="0.22"
                        color="teal"
                        track-color="grey-3"
                        class="q-ml-sm"
                    >
                        {{ Math.round(((resetTimer * resetTimerMax) / 10) / 1000000) }}s
                    </q-circular-progress>
                </div>
            </q-btn>
            <div class="flex items-start">
                <p class="text-body2">Teléfono: <span v-if="knowPassword" class="text-bold">{{ contactNumber }}</span>
                </p>
                <q-skeleton class="q-ml-xs" style="flex:1;" v-if="!knowPassword" type="text"/>

            </div>

            <div class="flex items-start">
                <p class="text-body2">Dirección: <span v-if="knowPassword" class="text-bold">{{ address }}</span></p>
                <q-skeleton class="q-ml-xs" style="flex:1;" v-if="!knowPassword" type="text"/>

            </div>

            <div class="flex items-start">
                <p class="text-body2">Sueldo: <span v-if="knowPassword" class="text-bold">{{ salary }}</span></p>
                <q-skeleton class="q-ml-xs" style="flex:1;" v-if="!knowPassword" type="text"/>

            </div>

            <div class="flex items-start">
                <p class="text-body2">Edad: <span v-if="knowPassword" class="text-bold">{{ age }}</span></p>
                <q-skeleton class="q-ml-xs" style="flex:1;" v-if="!knowPassword" type="text"/>

            </div>

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
<style lang="scss" scoped>

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
            margin-right: 35px;
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