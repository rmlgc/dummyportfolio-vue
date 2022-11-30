<script setup>
import {ref, onMounted, defineProps} from 'vue'
import {scroll} from 'quasar'
import Scrollbar from 'smooth-scrollbar';

const val = ref(false)
const root = ref(null)
const milisegundos = ref(2000)
const milisegundosCss = ref(`${milisegundos.value}ms`)
const imgCss = ref(null)

const props = defineProps({
    image: null,
    placeholderSrc: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAG1BMVEXMzMyWlpaqqqq3t7fFxcW+vr6xsbGjo6OcnJyLKnDGAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABAElEQVRoge3SMW+DMBiE4YsxJqMJtHOTITPeOsLQnaodGImEUMZEkZhRUqn92f0MaTubtfeMh/QGHANEREREREREREREtIJJ0xbH299kp8l8FaGtLdTQ19HjofxZlJ0m1+eBKZcikd9PWtXC5DoDotRO04B9YOvFIXmXLy2jEbiqE6Df7DTleA5socLqvEFVxtJyrpZFWz/pHM2CVte0lS8g2eDe6prOyqPglhzROL+Xye4tmT4WvRcQ2/m81p+/rdguOi8Hc5L/8Qk4vhZzy08DduGt9eVQyP2qoTM1zi0/uf4hvBWf5c77e69Gf798y08L7j0RERERERERERH9P99ZpSVRivB/rgAAAABJRU5ErkJggg==',
    to: 'ddd',
})

const {getScrollTarget, setVerticalScrollPosition} = scroll

function resizeElement(event) {

    val.value = !val.value
    setTimeout(
        () => {
            const el = event.target.closest('.grid-cell')
            const target = getScrollTarget(el)
            const offset = el.offsetTop - 5
            const duration = 1000
            setVerticalScrollPosition(target, offset, duration)
        }
        , milisegundos.value - 500);
}

onMounted(() => {

    imgCss.value = `url(https://picsum.photos/10${root.value.__vueParentComponent.uid}/10${root.value.__vueParentComponent.uid})`

})
</script>
<template>
    <div @click="resizeElement" ref="root"
         :class="`grid-cell bg-animated cursor-pointer ${ val == true ? 'open' : '' }`">
        <div class="grid-cell-wrap bg-animated-i">
            <q-btn class="absolute-top-right q-mt-lg q-mr-lg" dense fab :size="`${ val == true ? '1.5rem' : '5rem' }`"
                   :icon="`${ val == true ? 'sym_o_close' : 'sym_s_touch_app' }`"/>
            <q-img
                v-if="image !== null"
                :src="image"
                class="grid-cell-image"
                loading
            />
            <div class="grid-cell-content container">
                <div :class="`text-bold bg-animated-text q-mx-sm ${ val == true ? 'text-h4' : 'text-h2' }`">
                    <slot name="title">default</slot>
                </div>
                <div v-smth-scrollbar v-show="val"
                     :class="`smth-scrollbar-shadow grid-cell-body ${ val == true ? 'text-body1' : 'text-none' }`">
                    <slot>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non nisi elit. Curabitur
                            sit
                            amet
                            justo purus. Quisque consectetur laoreet elit eget scelerisque. Maecenas ornare molestie
                            lacus.
                            Phasellus lorem libero, lobortis id faucibus sit amet, viverra in diam. Proin fringilla
                            accumsan
                            velit, a laoreet diam tristique eu. Fusce sit amet lacinia erat. Vivamus placerat suscipit
                            maximus.
                            Aliquam volutpat sapien ligula. Aliquam luctus volutpat turpis, sit amet cursus lacus
                            malesuada
                            vitae. Donec gravida nulla eget massa pulvinar, eu sollicitudin tortor convallis. Maecenas
                            in
                            commodo leo. Proin quis lobortis diam. Aenean eros leo, dapibus nec tempor pellentesque,
                            accumsan
                            nec sapien.

                            Sed efficitur nisi sed lorem elementum egestas. Vivamus consequat tincidunt turpis et
                            cursus.
                            Mauris
                            eleifend sit amet tellus eget tempor. Vivamus leo mauris, feugiat in lorem finibus, laoreet
                            bibendum
                            urna. Donec ac convallis eros. Sed id enim eget urna ullamcorper imperdiet. Proin at dolor
                            sed
                            nunc
                            iaculis congue quis ut erat. Fusce pharetra lobortis diam vitae sodales. Phasellus
                            condimentum
                            facilisis molestie. Vestibulum consequat purus at vestibulum laoreet. Proin sed dolor vel
                            odio
                            iaculis malesuada vitae ut augue. Praesent eget velit maximus, eleifend lorem eleifend,
                            ullamcorper
                            libero. Aliquam lacinia sapien ac ipsum pulvinar, sit amet lacinia nulla tincidunt. Orci
                            varius
                            natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Interdum et
                            malesuada
                            fames ac ante ipsum primis in faucibus. Nulla accumsan turpis porttitor interdum porttitor.

                            Maecenas ut nibh lectus. In augue justo, tincidunt elementum lectus quis, feugiat posuere
                            felis.
                            Etiam sit amet elit et augue sollicitudin sollicitudin sit amet id turpis. Aliquam
                            fringilla,
                            nunc
                            eget sollicitudin laoreet, lorem odio condimentum erat, a tincidunt quam ante vel velit.
                            Donec
                            ultricies augue id sapien porttitor, eget pellentesque nibh imperdiet. Sed quam metus,
                            sodales
                            sit
                            amet aliquet at, eleifend nec arcu. Suspendisse at rhoncus ligula. Sed vitae tristique
                            ligula, a
                            dictum mi. Proin consectetur feugiat augue mollis congue. Aliquam erat volutpat. Nunc
                            aliquam
                            tortor
                            diam, ut ornare eros elementum in. Suspendisse sollicitudin nisi vitae nisi dictum, id
                            egestas
                            nibh
                            tempor. Vestibulum commodo, sem non tincidunt sollicitudin, odio mauris consectetur lectus,
                            porta
                            malesuada purus nisl eget tortor. Nam ligula quam, tristique vitae porta eget, posuere quis
                            est.

                            Donec eu congue dui. Vivamus scelerisque cursus est, lacinia auctor risus. Aliquam erat
                            volutpat.
                            Nullam lacinia, sem commodo pharetra pretium, dolor libero placerat lorem, in fermentum
                            metus
                            odio
                            id eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
                            turpis
                            egestas. Duis et odio id justo aliquam mattis. Fusce varius facilisis bibendum. Nam non
                            laoreet
                            eros, id gravida leo. Quisque ullamcorper molestie sapien vel condimentum. Mauris a laoreet
                            nibh,
                            nec dignissim massa. Donec venenatis lectus aliquam libero varius, quis tincidunt felis
                            lobortis.
                            Maecenas vel dolor vitae augue venenatis porta. Sed eget ligula vitae sapien efficitur
                            sodales.
                            Ut
                            vel egestas urna. Vivamus dictum augue sed sapien gravida, eget maximus sapien viverra.

                            Phasellus at dui eu sem venenatis aliquet. Phasellus et dolor quam. Etiam at turpis odio.
                            Phasellus
                            id nisi vestibulum, consequat lorem eget, suscipit elit. Duis sit amet sem dictum, lobortis
                            orci
                            tempor, suscipit nulla. Quisque ac pulvinar felis. Cras ullamcorper eu leo ac pretium. Proin
                            semper
                            enim et molestie sollicitudin. Suspendisse et suscipit dolor. In vitae consectetur ipsum.
                            Proin
                            pharetra feugiat ante eu iaculis. Proin vestibulum mattis scelerisque.
                        </p>
                    </slot>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.grid {
    display: flex;
    gap: 0px;
    flex-wrap: wrap;
    transition: all v-bind(milisegundosCss) ease-in-out;

    &-cell {
        animation: all 7s ease-in-out;
        flex: 1 1 17%;
        transition: all v-bind(milisegundosCss) ease-in-out;
        min-height: 41vh;
        order: 1;
        position: relative;
        @media screen and (max-width: 1800px) {
            flex: 1 1 30%;
        }
        @media screen and (max-width: 1024px) {
            flex: 1 1 40%;
        }
        @media screen and (max-width: 700px) {
            flex: 1 1 100%;
        }

        &-wrap {
            width: 100%;
            height: 100%;
            transition: all v-bind(milisegundosCss) ease-in-out;

            & .grid-cell-content {
                transition: font-size .1s ease-in-out,
                opacity 5s ease-in-out,
                transform 1s linear;
            }
        }

        &.open {
            transition: all v-bind(milisegundosCss) ease-in-out;
            //z-index: 100;
            flex: 50 2 20%;
            order: 1;
            background: var(--color-background-soft);
            @media screen and (max-width: 1800px) {
                flex: 50 2 33%;
            }
            @media screen and (max-width: 1024px) {
                flex: 50 2 45%;
            }
            @media screen and (max-width: 700px) {
                flex: 1 1 100%;
            }
        }

        & .text-none {
            font-size: 0;
            transform: translateY(100px);
        }

        &:after {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
            z-index: 0;
            background: inherit;
            opacity: 0;
        }

        .open &:after {
            opacity: .9;
        }

        &-image {
            position: absolute;
            object-fit: cover;
            z-index: 0;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
            opacity: 1;
            transition: all v-bind(milisegundosCss) ease-in-out;

            .open & {
                opacity: 0.1;
            }
        }

        &-content {
            height: 100%;
            z-index: 1;
            position: relative;
            overflow: hidden;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            flex-flow: column;
            gap: 20px;
        }

        &-body {
            overflow: hidden;
            transition: all v-bind(milisegundosCss) ease-in-out;

            .open & {
                max-height: 230px;
            }
        }
    }
}

.q-checkbox__label {
    width: 100%;
    height: 100%;
}

.q-checkbox__inner {
    position: absolute;
    z-index: 2;
    top: 10px;
    right: 10px;
}
</style>