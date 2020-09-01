<template>
<div class="topnav">
    <div class="logo" @click="toggleComponentMenu">Logo</div>
    <div class="menu">
        <div class="menu-item">menu1</div>
        <div class="menu-item">menu2</div>
    </div>
</div>
</template>

<script lang="ts">
import {
    inject,
    Ref
} from 'vue'
export default {
    setup() {
        const menuVisible = inject < Ref < boolean >> ('xxx')
        const toggleComponentMenu = () => {
            menuVisible.value = !menuVisible.value
        }
        return {
            toggleComponentMenu
        }
    }
}
</script>

<style lang="scss">
.topnav {
    border-bottom: 1px solid #ccc;
    background: pink;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    position: fixed;
    width: 100%;
    z-index: 100;

    .logo {
        &:hover {
            cursor: pointer;
        }
    }

    .menu {
        display: flex;

        .menu-item {
            padding-right: 20px;
        }
    }
}
</style>
