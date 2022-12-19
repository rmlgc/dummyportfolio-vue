<script setup>
import {ref, onMounted} from 'vue'
import {scroll} from 'quasar'
import Scrollbar from 'smooth-scrollbar';

const val = ref(false)
const root = ref(null)
const milisegundos = ref(2000)
const milisegundosCss = ref(`${milisegundos.value}ms`)
const imgCss = ref(null)

const actualTopPositionCss = ref(getRndInteger(5, 90) + '%')
const actualLeftPositionCss = ref(getRndInteger(5, 90) + '%')
const randomTopPositionCss = ref(getRndInteger(5, 90) + '%')
const randomLeftPositionCss = ref(getRndInteger(5, 90) + '%')
const random2TopPositionCss = ref(getRndInteger(25, 80) + '%')
const random2LeftPositionCss = ref(getRndInteger(25, 80) + '%')
const animationClass = ['swing1', 'swing2']

const randomSize1 = ref(getRndInteger(50, 385) + 'px')
const randomSize2 = ref(getRndInteger(50, 385) + 'px')
const randomSize3 = ref(getRndInteger(50, 385) + 'px')
const randomSize4 = ref(getRndInteger(50, 385) + 'px')
const randomSize5 = ref(getRndInteger(50, 385) + 'px')
const randomSize6 = ref(getRndInteger(50, 385) + 'px')
const randomSize7 = ref(getRndInteger(50, 385) + 'px')
const randomSize8 = ref(getRndInteger(50, 385) + 'px')
const beatSize1 = ref('150px')

const props = defineProps({
    image: null,
    placeholderSrc: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAG1BMVEXMzMyWlpaqqqq3t7fFxcW+vr6xsbGjo6OcnJyLKnDGAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABAElEQVRoge3SMW+DMBiE4YsxJqMJtHOTITPeOsLQnaodGImEUMZEkZhRUqn92f0MaTubtfeMh/QGHANEREREREREREREtIJJ0xbH299kp8l8FaGtLdTQ19HjofxZlJ0m1+eBKZcikd9PWtXC5DoDotRO04B9YOvFIXmXLy2jEbiqE6Df7DTleA5socLqvEFVxtJyrpZFWz/pHM2CVte0lS8g2eDe6prOyqPglhzROL+Xye4tmT4WvRcQ2/m81p+/rdguOi8Hc5L/8Qk4vhZzy08DduGt9eVQyP2qoTM1zi0/uf4hvBWf5c77e69Gf798y08L7j0RERERERERERH9P99ZpSVRivB/rgAAAABJRU5ErkJggg==',
    to: 'ddd',
})

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const {getScrollTarget, setVerticalScrollPosition} = scroll

const resizeElement = (event) => {

    val.value = !val.value
    setTimeout(
        () => {
            const el = event.target.closest('.grid-cell')
            const target = getScrollTarget(el)
            const offset = el.offsetTop - 5
            const duration = 800
            setVerticalScrollPosition(target, offset, duration)
        }
        , 100);
}

const mouseMove = (event) => {
    //currentTarget
    const elCell = event.target.closest('.grid-cell')
    const elDragable = elCell.querySelector('.dragableHover')

    const rect = elCell.getBoundingClientRect()

    elDragable.style.top = (event.clientY - rect.top) + 'px'
    elDragable.style.left = (event.clientX - rect.left) + 'px'
    // console.log(animationClass[getRndInteger(0, 2)])
    // console.log(elCell)
    // console.log(elDragable)
    // console.log(event)
    // console.log(elCell)
    // console.log(event.clientY - rect.top)

}
const mouseEnter = (event) => {
    const elCell = event.target.closest('.grid-cell')
    const elDragable = elCell.querySelector('.dragableHover')

    elDragable.classList.remove('shake')
    for (let i = 0; i < animationClass.length; i++) {
        elDragable.classList.remove(animationClass[i])
    }

    elDragable.classList.add('shake')
}
const mouseLeave = (event) => {
    const elCell = event.target.closest('.grid-cell')
    const elDragable = elCell.querySelector('.dragableHover')
    const rect = elCell.getBoundingClientRect()

    elDragable.classList.remove('shake')
    for (let i = 0; i < animationClass.length; i++) {
        elDragable.classList.remove(animationClass[i])
    }

    actualTopPositionCss.value = (event.clientY - rect.top) + 'px'
    actualLeftPositionCss.value = (event.clientX - rect.left) + 'px'
    elDragable.classList.add(animationClass[getRndInteger(0, 2)])
}

const mouseDown = () => {
    const elCell = event.target.closest('.grid-cell')
    const elDragable = elCell.querySelector('.dragableHover')

    console.log(elDragable.addEventListener("animationend", (el) => {
        console.log(el)
    }));

    beatSize1.value = elDragable.style.height

    elDragable.classList.add('beat')
}

const mouseUp = () => {
    const elCell = event.target.closest('.grid-cell')
    const elDragable = elCell.querySelector('.dragableHover')

    elDragable.classList.remove('beat')
}
onMounted(() => {

    imgCss.value = `url(https://picsum.photos/10${root.value.__vueParentComponent.uid}/10${root.value.__vueParentComponent.uid})`

})
</script>
<template>
    <div @mouseup="mouseUp" @mousedown="mouseDown" @mouseenter="mouseEnter" @mouseleave="mouseLeave"
         @mousemove="mouseMove" @click="resizeElement"
         ref="root"
         :class="`grid-cell bg-animated cursor-pointer inset-shadow-down ${ val == true ? 'open' : '' }`">
        <div class="grid-cell-wrap bg-animated-i">
            <q-img
                v-if="image !== null"
                :src="image"
                class="grid-cell-image"
                loading
            />
            <div :class="`grid-cell-content container ${ val == true ? 'bg-glass' : ''}`">
                <div :class="`grid-cell-title text-bold bg-animated-text q-mx-sm ${ val == true ? 'text-h4' : 'text-h2' }`">
                    <slot name="title">default</slot>
                </div>
                <div v-smth-scrollbar v-show="val"
                     :class="`smth-scrollbar-shadow grid-cell-body ${ val == true ? 'text-body1 bg-glass bg-glass--white bg-glass--fat' : 'text-none' }`">
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
            <q-btn class="absolute-top-right q-mt-sm q-mr-sm" dense fab :size="`${ val == true ? '1.5rem' : '5rem' }`"
                   :icon="`${ val == true ? 'sym_o_close' : 'sym_s_touch_app' }`"/>
        </div>
        <div :class="`dragableHover shadow-1 shadow-up-12 ${animationClass[getRndInteger(0, 2)]}`"></div>
    </div>
</template>
<style lang="scss">
.grid {
    & .dragableHover {
        background: inherit;
        height: 100px;
        width: 100px;
        display: block;
        border-radius: 50%;
        inset: 50% 50%;
        position: absolute;
        transform: translate(-50%, -50%) rotate(180deg);
        transition: all 0ms linear;
        opacity: 1;
        @media screen and (max-width: 700px) {
            opacity: 1;
        }
    }

    &:hover .dragableHover {
        //opacity: 0;
        @media screen and (max-width: 700px) {
            opacity: 1;
        }
    }

    &-cell {
        animation: all 7s ease-in-out;
        flex: 1 1 17%;
        transition: all v-bind(milisegundosCss) ease-in-out;
        height: 100vh;
        min-height: 60vh;
        max-height: 70vh;
        order: 1;
        position: relative;
        overflow: hidden;

        &:hover .dragableHover {
            opacity: 1;
            @media screen and (max-width: 700px) {
                opacity: 1;
            }
        }

        &:hover .dragableHover {
            opacity: 1;
        }

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
            position: relative;
            z-index: 1;

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
            //background: var(--color-background-soft);
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
            z-index: -1;
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
            //z-index: ;
            position: relative;
            overflow: hidden;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            flex-flow: column;
            gap: 20px;
        }

        &-title {
            text-transform: capitalize;
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

.shake {
    animation: shake 150ms ease-in-out infinite;
    -moz-animation: shake 150ms ease-in-out infinite;
    -webkit-animation: shake 150ms ease-in-out infinite;
    -o-animation: shake 150ms ease-in-out infinite;
}

.swing1 {
    animation: swing1 60s ease-in-out infinite;
    -moz-animation: swing1 60s ease-in-out infinite;
    -webkit-animation: swing1 60s ease-in-out infinite;
    -o-animation: swing1 60s ease-in-out infinite;
}

.swing2 {
    animation: swing1 90s ease-in-out infinite;
    -moz-animation: swing1 90s ease-in-out infinite;
    -webkit-animation: swing1 90s ease-in-out infinite;
    -o-animation: swing1 90s ease-in-out infinite;
}

.beat {
    animation: beat 150ms ease-in-out infinite;
    -moz-animation: beat 150ms ease-in-out infinite;
    -webkit-animation: beat 150ms ease-in-out infinite;
    -o-animation: beat 150ms ease-in-out infinite;
}

@keyframes shake {
    0% {
        transform: translate(-53%, -50%);
        height: 100px;
        width: 100px;
    }
    50% {
        transform: translate(-50%, -53%);
        height: 99px;
        width: 99px;
    }
    100% {
        transform: translate(-50%, -50%);
        height: 100px;
        width: 100px;
    }
}

@keyframes beat {
    0% {

        height: calc(v-bind(beatSize1) + 80px);
        width: calc(v-bind(beatSize1) + 80px);
    }
    50% {
        height: calc(v-bind(beatSize1) + 130px);
        width: calc(v-bind(beatSize1) + 130px);
    }
    100% {
        height: v-bind(beatSize1);
        width: v-bind(beatSize1);
    }
}

@keyframes swing1 {
    0% {
        height: v-bind(randomSize1);
        width: v-bind(randomSize1);
        top: v-bind(actualTopPositionCss);
        left: v-bind(actualLeftPositionCss);
    }
    10% {
        top: v-bind(randomTopPositionCss);
        left: v-bind(randomLeftPositionCss);
    }
    25% {
        top: v-bind(randomTopPositionCss);
        left: v-bind(randomLeftPositionCss);
        height: v-bind(randomSize3);
        width: v-bind(randomSize3);
    }
    20% {
        top: v-bind(randomTopPositionCss);
        left: v-bind(randomLeftPositionCss);
    }
    30% {
        top: v-bind(random2TopPositionCss);
        left: v-bind(random2LeftPositionCss);
    }
    40% {
        top: v-bind(randomLeftPositionCss);
        left: v-bind(randomTopPositionCss);
    }
    50% {
        top: v-bind(random2LeftPositionCss);
        left: v-bind(random2TopPositionCss);
        height: v-bind(randomSize7);
        width: v-bind(randomSize7);
    }
    60% {
        top: v-bind(randomTopPositionCss);
        left: v-bind(randomLeftPositionCss);
    }
    70% {
        top: v-bind(random2TopPositionCss);
        left: v-bind(randomTopPositionCss);
    }
    75% {
        top: v-bind(randomLeftPositionCss);
        left: v-bind(randomTopPositionCss);
        height: v-bind(randomSize2);
        width: v-bind(randomSize2);
    }
    80% {
        top: v-bind(random2LeftPositionCss);
        left: v-bind(randomLeftPositionCss);
    }
    90% {
        top: v-bind(randomTopPositionCss);
        left: v-bind(randomLeftPositionCss);
    }
    100% {
        height: v-bind(randomSize1);
        width: v-bind(randomSize1);
        top: v-bind(actualTopPositionCss);
        left: v-bind(actualLeftPositionCss);
    }
}

@keyframes swing2 {
    0% {
        top: v-bind(actualLeftPositionCss);
        left: v-bind(actualTopPositionCss);
        height: v-bind(randomSize1);
        width: v-bind(randomSize1);
    }
    10% {
        height: v-bind(randomSize2);
        width: v-bind(randomSize2);
        top: v-bind(randomTopPositionCss);
        left: v-bind(randomLeftPositionCss);
    }
    25% {
        top: v-bind(randomLeftPositionCss);
        left: v-bind(randomTopPositionCss);
        height: v-bind(randomSize5);
        width: v-bind(randomSize5);
    }
    20% {
        height: v-bind(randomSize1);
        width: v-bind(randomSize1);
        top: v-bind(randomTopPositionCss);
        left: v-bind(randomLeftPositionCss);
    }
    30% {
        height: v-bind(randomSize3);
        width: v-bind(randomSize3);
        top: v-bind(random2TopPositionCss);
        left: v-bind(random2LeftPositionCss);
    }
    40% {
        height: v-bind(randomSize8);
        width: v-bind(randomSize8);
        top: v-bind(randomLeftPositionCss);
        left: v-bind(randomTopPositionCss);
    }
    50% {
        top: v-bind(random2LeftPositionCss);
        left: v-bind(random2TopPositionCss);
        height: v-bind(randomSize7);
        width: v-bind(randomSize7);
    }
    60% {
        top: v-bind(randomTopPositionCss);
        left: v-bind(randomLeftPositionCss);
        height: v-bind(randomSize6);
        width: v-bind(randomSize6);
    }
    70% {
        top: v-bind(random2TopPositionCss);
        left: v-bind(randomTopPositionCss);
        height: v-bind(randomSize5);
        width: v-bind(randomSize5);
    }
    75% {
        top: v-bind(randomTopPositionCss);
        left: v-bind(randomLeftPositionCss);
        height: v-bind(randomSize4);
        width: v-bind(randomSize4);

    }
    80% {
        height: v-bind(randomSize3);
        width: v-bind(randomSize3);
        top: v-bind(random2LeftPositionCss);
        left: v-bind(randomLeftPositionCss);
    }
    90% {
        height: v-bind(randomSize2);
        width: v-bind(randomSize2);
        top: v-bind(randomTopPositionCss);
        left: v-bind(randomLeftPositionCss);
    }
    100% {
        height: v-bind(randomSize1);
        width: v-bind(randomSize1);
        top: v-bind(actualLeftPositionCss);
        left: v-bind(actualTopPositionCss);
    }
}


</style>