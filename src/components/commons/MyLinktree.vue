<script setup>
import {ref, getCurrentInstance} from 'vue'
import ErreEager from '@/components/commons/icons/ErreEager.vue'


</script>
<template>
    <a href="https://linktr.ee/rommelgc" rel="noopener" target="_blank"
       :class="`text-handler text-amber q-px-md erre-interact-hover`">R<span class="text-reduce">om</span>m<span
        class="text-reduce">e</span>l<span class="text-reduce">&nbsp;</span>G<span
        class="text-reduce">arcia </span>C<span class="text-reduce">oronado</span> © 2022
        <ErreEager/>
    </a>
</template>
<style scoped lang="scss">
.text-handler {
    font-weight: 500;
    &.active {
        font-weight: 100;
    }
}

.text-reduce {
    font-size: 0;
    transition: font-size 2s ease-in-out;
    .active & {
        font-size: initial;
    }
}
</style>