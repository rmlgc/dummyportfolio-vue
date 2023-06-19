<script setup>
import {defineProps, onMounted, ref, toRaw} from 'vue'
import {useQuasar} from 'quasar'
import {Motion, Presence} from "motion/vue"

const showBox = ref(true)
const fabSlide = ref(true);
const hideLabels = ref(true);
const cardSlideDirection = ref('right');
const elCardBoxSettings = ref(null);
const elCardBoxSettingsHeight = ref(0);
const clickSetting = ref(true);
const showCardContent = ref(false);
const animationX = ref({
    top: null,
    right: [-600, -300, 0],
    bottom: null,
    left: [600, 300, 0],
});
const x = ref(toRaw(animationX.value[cardSlideDirection.value]));
const animationY = ref({
    top: [600, 300, 0],
    right: null,
    bottom: [-600, -300, 0],
    left: null,
});
const y = ref(toRaw(animationY.value[cardSlideDirection.value]));

// x.value = directionAnimateX.value[cardSlideDirection.value]


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
        category: String,
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

onMounted(() => {
    elCardBoxSettingsHeight.value = elCardBoxSettings.value.offsetHeight
    clickSetting.value = false
})

</script>
<template>
    <div class="card" :class=" `${open ? 'span-2' : ''}`">
        <Presence style="position: relative;">
            <Motion
                class="card-box"
                :initial="{}"
                :transition="{
                    duration: 3,
                    rotate: { duration: 2 },
                  }"
                :animate="{
                    opacity: 1 ,
                    x: [-1000, -100, 100, 0],
                    backgroundColor: 'var(--bg-primary-glass)'
                }"
                :exit="{
                    opacity: 0,
                    x: [0, -100, 100, -1000],
                    rotate: 0,
                    backgroundColor: 'var(--bg-accent-glass)'
                }"
                v-show="showBox">
                <q-img
                    class="card-avatar"
                    :alt="firstName+lastName+id"
                    :src="imageUrl"
                    :ratio="19/9"
                    :position="`50% 50%'`"
                >
                    <div v-smth-scrollbar
                         :class="` ${showCardContent ? 'open bg-glass--fat' : ''} q-px-md q-pt-xl card-content card-content-absolute-${cardSlideDirection}`">
                        <Presence>
                            <Motion
                                class="q-py-sm"
                                :initial="{
                                    opacity: 0,
                                }"
                                :transition="{
                                    duration: 1,
                                  }"
                                :animate="{
                                    opacity: 1 ,
                                    x,
                                    y,
                                }"
                                :exit="{
                                    opacity: 0,
                                    x: [0, -300, -600],
                                    rotate: 0,
                                    transition: { duration: 3 },
                                }"
                                v-if="showCardContent">
                                <h2 class="bg-glass--d card-head-subtitle text-h4 q-my-none q-pb-none">{{ firstName }}
                                    {{
                                        lastName
                                    }} </h2>
                                <p class="text-body2 q-my-xs">X:{{ x }} {{ category }} Y:{{ y }}</p>
                                <p class="text-body2 q-my-xs">{{ toRaw(animationY[cardSlideDirection]) }}</p>
                                <small class="text-body2 text-lowercase">{{ email }}</small>


                                <div class="q-ml-lg">
                                    <q-btn padding="xs" @click="open = !open" class="q-mt-md q-mr-md" dense fab
                                           :size="`${ open == true ? '1rem' : '1.5rem' }`"
                                           :icon="`${ open == true ? 'sym_o_expand_less' : 'sym_s_expand_more' }`"/>
                                </div>

                            </Motion>
                        </Presence>
                        <Presence>
                            <Motion
                                class="card-box"
                                :initial="{
                                    opacity: 1,
                                    y: [0],
                                }"
                                :transition="{
                                    duration: 1,
                                }"
                                :animate="{
                                    opacity: 1,
                                    y: [-1000, 20, 0],
                                }"
                                :exit="{
                                    opacity: 0,
                                    y: [0, 20, -1000],
                                }"
                                v-if="open">
                                <div class="q-pb-lg">
                                    <q-form v-if="!knowPassword"
                                            ref="myForm"
                                            @submit="onSubmit"
                                    >
                                        <q-input v-if="!knowPassword"
                                                 class="q-mb-sm q-pt-sm q-pb-xl text-bold bg-glass--white-dense rounded-borders"
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
                                    <q-btn v-if="knowPassword" icon="lock_reset" dense fab-mini label="hide"
                                           type="reset"
                                           color="negative" flat
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
                                        <p class="text-body2">Teléfono: <span v-if="knowPassword" class="text-bold">{{
                                                contactNumber
                                            }}</span>
                                        </p>
                                        <q-skeleton class="q-ml-xs" style="flex:1;" v-if="!knowPassword"
                                                    type="text"/>

                                    </div>

                                    <div class="flex items-start">
                                        <p class="text-body2">Dirección: <span v-if="knowPassword"
                                                                               class="text-bold">{{
                                                address
                                            }}</span></p>
                                        <q-skeleton class="q-ml-xs" style="flex:1;" v-if="!knowPassword"
                                                    type="text"/>

                                    </div>

                                    <div class="flex items-start">
                                        <p class="text-body2">Sueldo: <span v-if="knowPassword" class="text-bold">{{
                                                salary
                                            }}</span>
                                        </p>
                                        <q-skeleton class="q-ml-xs" style="flex:1;" v-if="!knowPassword"
                                                    type="text"/>

                                    </div>

                                    <div class="flex items-start">
                                        <p class="text-body2">Edad: <span v-if="knowPassword" class="text-bold">{{
                                                age
                                            }}</span></p>
                                        <q-skeleton class="q-ml-xs" style="flex:1;" v-if="!knowPassword"
                                                    type="text"/>
                                    </div>
                                </div>
                            </Motion>
                        </Presence>
                    </div>
                </q-img>
                <q-btn v-if="cardSlideDirection == 'top'"
                       :icon="`${showCardContent ? 'close': 'keyboard_arrow_' + (cardSlideDirection == 'top' ? 'up' : '')}`"
                       label="" @click="showCardContent=!showCardContent; open=false;"
                       square text-color="primary" class="absolute-bottom bg-glass--white"></q-btn>
                <q-btn v-if="cardSlideDirection == 'right'" :icon="`${showCardContent ? 'close': 'keyboard_arrow_'+cardSlideDirection}`"
                       label="" @click="showCardContent=!showCardContent; open=false;"
                       square text-color="primary" class="absolute-top q-mt-sm bg-glass--white"></q-btn>
                <q-btn v-if="cardSlideDirection == 'bottom'"
                       :icon="`${showCardContent ? 'close': 'keyboard_arrow_' + (cardSlideDirection == 'bottom' ? 'down' : '')}`"
                       label="" @click="showCardContent=!showCardContent; open=false;"
                       square text-color="primary" class="absolute-top q-mt-sm bg-glass--white"></q-btn>
                <q-btn v-if="cardSlideDirection == 'left'" :icon="`${showCardContent ? 'close': 'keyboard_arrow_'+cardSlideDirection}`"
                       label="" @click="showCardContent=!showCardContent; open=false;"
                       square text-color="primary" class="absolute-top q-mt-sm bg-glass--white"></q-btn>
            </Motion>
        </Presence>
        <q-separator></q-separator>
        <Presence>
            <Motion class="card-box-settings"
                    v-show="clickSetting"
                    :initial="{}"
                    :transition="{duration:1}"
                    :animate="{height: `${elCardBoxSettingsHeight}px`}"
                    :exit="{height: '0px'}"
            >
                <div ref="elCardBoxSettings" class="q-pl-md q-pt-xl inset-shadow-down">
                    <q-fab
                        v-model="fabSlide"
                        label="Slide to :"
                        label-position="top"
                        external-label
                        icon="keyboard_arrow_right"
                        direction="right"
                        :hide-label="!hideLabels"
                        class="bg-glass--accent bg-glass--slim"
                        padding="xs"
                    >
                        <q-fab-action :hide-label="!hideLabels" padding="xs" external-label label-position="top"
                                      color="primary"
                                      @click="cardSlideDirection='top' ; x = toRaw(animationX[cardSlideDirection]); y = toRaw(animationY[cardSlideDirection])"
                                      icon="keyboard_arrow_up"
                                      label="Top"/>
                        <q-fab-action :hide-label="!hideLabels" padding="xs" external-label label-position="top"
                                      color="secondary"
                                      @click="cardSlideDirection='right' ; x = toRaw(animationX[cardSlideDirection]); y = toRaw(animationY[cardSlideDirection])"
                                      icon="keyboard_arrow_right"
                                      label="Right"/>
                        <q-fab-action :hide-label="!hideLabels" padding="xs" external-label label-position="top"
                                      color="orange"
                                      @click="cardSlideDirection='bottom' ; x = toRaw(animationX[cardSlideDirection]); y = toRaw(animationY[cardSlideDirection])"
                                      icon="keyboard_arrow_down"
                                      label="Bottom"/>
                        <q-fab-action :hide-label="!hideLabels" padding="xs" external-label label-position="top"
                                      color="accent"
                                      @click="cardSlideDirection='left' ; x = toRaw(animationX[cardSlideDirection]); y = toRaw(animationY[cardSlideDirection])"
                                      icon="keyboard_arrow_left"
                                      label="Left"/>
                    </q-fab>
                    <br>
                    <q-toggle v-model="hideLabels" label="hide labels"></q-toggle>
                </div>
            </Motion>
        </Presence>
        <q-btn @click="clickSetting=!clickSetting" rounded :size="clickSetting ? 'md' : 'sm'" dense
               :icon="clickSetting ? 'close' : 'settings'" :text-color="clickSetting ? 'primary' : 'text'"
               :style="`${clickSetting ? 'opacity:1;' : 'opacity:0.3;'}`"></q-btn>
    </div>
</template>
<style lang="scss" scoped>
.q-img__content {
    & > div {
        padding-top: 40px;
    }
    & div {
        &:not(.open) {
            background: none;
        }
    }
}

.card {
    text-transform: Capitalize;
    overflow: hidden;
    position: relative;

    &-box {
        border-radius: 10px;

        &-settings {
            overflow: hidden;
        }
    }

    &-avatar {
        width: 100%;
        height: 60vh;
        min-height: 250px;
        max-height: 450px;
        @media screen and (max-width: 900px) {
            min-height: 250px;
            max-height: 400px;
        }
    }

    &-content {
        word-break: break-word;

        &-absolute {
            &-top {
                top: 0;
                right: 0;
                left: 0;
            }

            &-right {
                right: 0;
                bottom: 0;
            }

            &-bottom {
                bottom: 0;
                right: 0;
                left: 0;
            }

            &-left {
                left: 0;
                bottom: 0;
            }
        }
    }
}

.span-2 {
    grid-column-end: span 1;
}

.span-3 {
    grid-column-end: span 3;
}

</style>