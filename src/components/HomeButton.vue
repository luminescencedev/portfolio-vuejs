<script lang="ts" setup>

</script>

<template>
    <div class="flex flex-col gap-1" id="hover">
        <div class="first-row flex gap-1" id="hover">
            <span class="square" id="hover" ></span>
            <span class="square dot" id="hover"></span>
            <span class="square" id="hover"></span>
        </div>
        <div class="second-row flex gap-1" id="hover">
            <span class="square dot" id="hover"></span>
            <span class="square" id="hover"></span>
            <span class="square dot" id="hover"></span>
        </div>
        <div class="third-row flex gap-1" id="hover">
            <span class="square" id="hover"></span>
            <span class="square dot" id="hover"></span>
            <span class="square" id="hover"></span>
        </div>
    </div>
</template>

<style>
.square {
    width: 2px;
    height: 2px;
    background-color: #000;
    display: inline-block;
    transition: all ease 0.3s;
}

.disabled {
    opacity: 0;
}
</style>