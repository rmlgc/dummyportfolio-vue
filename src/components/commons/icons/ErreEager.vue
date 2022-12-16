<script setup>

</script>
<template>
        <img alt="Erre logo" class="noticeme erre-logo"
             src="https://avatars.githubusercontent.com/u/22599950?s=50&v=5"/>
</template>
<style scoped lang="scss">
.erre-logo{
    position: fixed;
    bottom: -12px;
    right: 2vw;
    transition: bottom .75s cubic-bezier(1,-1.78,0,2.68);
    z-index: 1;
    .erre-interact-hover:hover &,
    &:hover {
        bottom: 0;
    }

    .active & {
        bottom: 0;
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