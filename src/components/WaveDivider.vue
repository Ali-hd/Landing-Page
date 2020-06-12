<template>
  <div>
    <svg :style="{transform: `rotate(${rotation})`, bottom: position}" class="editorial"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28 "
        preserveAspectRatio="none">
    <defs>
    <path id="gentle-wave"
    d="M-160 44c30 0 
        58-18 88-18s
        58 18 88 18 
        58-18 88-18 
        58 18 88 18
        v44h-352z" />
    </defs>
    <g class="parallax1">
    <use xlink:href="#gentle-wave" x="50" y="3" fill="#f461c1"/>
    </g>
        <g class="parallax2">
    <use xlink:href="#gentle-wave" x="50" y="0" fill="#4579e2"/>
        </g>
        <g class="parallax3">
    <use xlink:href="#gentle-wave" x="50" y="9" fill="#3461c1"/>
    </g>
        <g class="parallax4">
    <use xlink:href="#gentle-wave" x="50" y="6" fill="rgb(197, 80, 255)"/>  
    </g>
    </svg>
  </div>
</template>

<script>
export default {
    name: "WaveDivider",
    props: ["rotation", "position"],
}
</script>

<style lang="scss" scoped>
.editorial {
    display: block;
    width: 100%;
    height: 30px;
    max-height: 30px;
    margin: 0;
    z-index:5;
    position:relative;
    left:0px;
    float:left;
    filter: brightness(0.9);
}
.parallax1 > use {
    animation: move-forever1 18s linear infinite;
    &:nth-child(1) {
        animation-delay: 3s;
    }
}
.parallax2 > use {
    animation: move-forever2 16s linear infinite;
    &:nth-child(1) {
        animation-delay: 3s;
    }
}
.parallax3 > use {
    animation: move-forever3 14s linear infinite;
    &:nth-child(1) {
        animation-delay: 3s;
    }
}
.parallax4 > use {
    animation: move-forever4 12s linear infinite;
    &:nth-child(1) {
        animation-delay: 3s;
    }
}
@keyframes move-forever1 {
    0% {
        transform: translate(85px, 0%);
    }
    100% {
        transform: translate(-90px, 0%);
    }
}
@keyframes move-forever2 {
    0% {
        transform: translate(-90px, 0%);
    }
    100% {
        transform: translate(85px, 0%);
    }
}
@keyframes move-forever3 {
    0% {
        transform: translate(85px, 0%);
    }
    100% {
        transform: translate(-90px, 0%);
    }
}
@keyframes move-forever4 {
    0% {
        transform: translate(-90px, 0%);
    }
    100% {
        transform: translate(85px, 0%);
    }
}
</style>