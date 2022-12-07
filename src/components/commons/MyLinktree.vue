<script setup>
import {ref, getCurrentInstance} from 'vue'

const open = ref(false)

</script>
<template>
    <q-btn dense
           @click="open = !open" :icon="open ? 'sym_o_close' : 'sym_o_expand_content'"
    />
    <a href="https://linktr.ee/rommelgc" rel="noopener" target="_blank"
       :class="`text-handler text-amber q-px-md ${open ? 'active' : ''}`">R<span class="text-reduce">om</span>m<span
        class="text-reduce">e</span>l<span class="text-reduce">&nbsp;</span>G<span
        class="text-reduce">arcia </span>C<span class="text-reduce">oronado</span> © 2022
        <img alt="Vue logo" :class="`noticeme my-linktr logo  ${open ? 'active' : ''}`"
             src="https://avatars.githubusercontent.com/u/22599950?s=50&v=5"/>
    </a>
</template>
<style scoped lang="scss">
.my-linktr {
    position: fixed;
    bottom: -12px;
    right: 2vw;
    transition: bottom 1s ease-in-out;

    &:hover {
        bottom: 0;
    }

    &.active {
        bottom: 0;
    }
}

.text-handler {
    font-weight: 500;

    &.active {
        font-weight: 100;
    }
}

.text-reduce {
    font-size: 0;
    transition: font-size 1s ease-in-out;

    .active & {
        font-size: initial;
    }
}

.noticeme {
    -webkit-animation: noticeme 70s ease infinite;
    -moz-animation: noticeme 70s ease infinite;
    -o-animation: noticeme 70s ease infinite;
    animation: noticeme 70s ease infinite;
}

@keyframes noticeme {
    0% {
        transform: skew(0deg, 0deg) translateX(0px) translateY(0px);
    }
    0.4% {
        transform: skew(3deg, 3deg) translateX(-5px) translateY(-5px);
    }
    0.8% {
        transform: skew(-2deg, -2deg) translateX(-10px) translateY(0px);
    }
    1% {
        transform: skew(1deg, 1deg) translateX(2px) translateY(0px);
    }
    1.2% {
        transform: skew(0deg, 0deg) translateX(-2px) translateY(0px);
    }
    1.4% {
        transform: skew(0deg, 0deg) translateX(0px) translateY(0px);
    }
    1.6% {
        transform: skew(0deg, 0deg) translateX(0px) translateY(0px);
    }
    50% {
    }
    100% {
        transform: skew(0deg, 0deg) translateX(0px) translateY(0px);
    }
}
</style>