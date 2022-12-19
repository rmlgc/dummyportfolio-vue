<script setup>
import MyLinktree from '@/components/commons/MyLinktree.vue'
import {useQuasar} from 'quasar'
import {useRouter} from 'vue-router'
import {ref, onMounted} from 'vue'
import {storeToRefs} from "pinia/dist/pinia";
import {useWebStore} from "@/stores/useWebStore";
const {settingsWebsite} = storeToRefs(useWebStore())
const $q = useQuasar()
const router = useRouter()
const open = ref(false)
const heightFooter = ref(0 + 'px')


const show = (grid) => {
    open.value = true
    $q.bottomSheet({
        class: 'footer-menu bg-glass--white-dense bg-glass--slim',
        grid,
        actions: [
            {
                label: 'Home',
                icon: 'home',
                id: 'home',
                url: '/',
                classes: router.currentRoute.value.name === 'home' ? 'bg-glass--accent-dense bg-glass--fat' : '',
            },
            {},
            {
                label: 'Employee site',
                icon: 'sym_o_badge',
                id: 'employeeSite',
                url: '/employee',
                classes: router.currentRoute.value.name === 'employee' ? 'bg-glass--accent-dense bg-glass--fat' : '',
            },
            {},
            {
                label: 'About',
                icon: 'info',
                id: 'about',
                url: '/about',
                classes: router.currentRoute.value.name === 'about' ? 'bg-glass--accent-dense bg-glass--fat' : '',
            },
        ]
    }).onOk(action => {
        // console.log('Action chosen:', action.id)
        router.push(action.url)
    }).onCancel(() => {
        // console.log('Dismissed')
    }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
        open.value = false
    })
    heightFooter.value = document.getElementsByTagName('footer')[0].offsetHeight + 'px';
    console.log(heightFooter)
    console.log('_____________')
}

</script>
<template>
    <q-footer v-if="$q.screen.lt.md"
              reveal elevated :class="`bg-glass--primary bg-glass--white ${ open === true ? 'active' : '' }`">
        <q-toolbar>
            <q-separator vertical/>
            <q-btn outline flat icon="menu" @click="show(false)"/>
            <q-separator vertical/>
            <q-btn-dropdown  outline flat auto-close dropdown-icon="settings" :label="``" >
                <!-- dropdown content goes here -->
                <div class="row no-wrap q-pa-md">
                    <div class="column">
                        <div class="text-h6 q-mb-md">Settings</div>
                        <q-toggle v-model="settingsWebsite.prefersColorScheme"
                                  checked-icon="&#x1f31e;"
                                  unchecked-icon="&#x1f31c;"
                                  size="xl"
                                  :label="`${settingsWebsite.prefersColorScheme}`"
                        ></q-toggle>
                    </div>

                    <q-separator vertical inset class="q-mx-lg" />

                    <div class="column items-center hidden">
                        <q-avatar size="72px">
                            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
                        </q-avatar>

                        <div class="text-subtitle1 q-mt-md q-mb-xs">John Doe</div>

                        <q-btn
                            color="primary"
                            label="Logout"
                            push
                            size="sm"
                            v-close-popup
                        />
                    </div>
                </div>
            </q-btn-dropdown>
            <q-separator vertical/>
            <MyLinktree/>
        </q-toolbar>
    </q-footer>
    <q-footer v-if="!$q.screen.lt.md">
    </q-footer>
</template>
<style lang="scss">
footer {
    transition: bottom 200ms 0s linear;
    bottom: 0px;

    &.active {
        bottom: calc(100% - v-bind(heightFooter));
    }
}

.footer-menu .active {
    background-color: var(--bg-accent-glass-dense);
}
</style>