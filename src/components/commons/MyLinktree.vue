<script setup>
import {ref, getCurrentInstance} from 'vue'
import ErreEager from '@/components/commons/icons/ErreEager.vue'


</script>
<template>
    <a href="https://linktr.ee/rommelgc" rel="noopener" target="_blank"
       :class="`text-handler text-amber q-px-xs erre-interact-hover`">
        <span class="text-increase">R</span>
        <span class="text-reduce">om</span>
        <span>m</span>
        <span class="text-reduce">e</span>
        <span>l</span>
        <span>&nbsp;</span>
        <span class="text-increase">G</span>
        <span class="text-reduce">arcia </span>
        <span>C</span>
        <span class="text-reduce">oronado</span>
        <span>&nbsp;</span>
        <span class="text-increase">© 2022</span>
        <ErreEager fixed/>
    </a>
</template>
<style scoped lang="scss">
.text-handler {
    font-weight: 500;

    transition: font-size 1s cubic-bezier(.68,-0.55,.27,1.55);
    &.active {
        font-size: initial;
        font-weight: 100;
    }
}

.text-increase {
    font-size: 1.5rem;
    transition: font-size 1s cubic-bezier(.68,-0.55,.27,1.55);
    .active & {
        font-size: initial;
    }
}
.text-reduce {
    font-size: 0;
    transition: font-size 1s cubic-bezier(.68,-0.55,.27,1.55);
    .active & {
        font-size: initial;
    }
}
</style>