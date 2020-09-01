<template>
<div class="topnav">
    <div class="toggleAside" @click="toggleComponentMenu" />
    <div class="logo">Logo</div>
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
        const menuVisible = inject < Ref < boolean >> ('refmenuVisible')
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
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 10px;
    position: fixed;
    width: 100%;
    z-index: 100;
    height: 25px;

    .logo {
        margin-right: auto;

        &:hover {
            cursor: pointer;
        }
    }

    .menu {
        display: flex;
        flex-grow: 2;
        text-align: right;
        justify-content: flex-end;

        .menu-item {
            padding-right: 20px;
        }
    }

    .toggleAside {
        width: 24px;
        height: 24px;
        background: red;
        margin-right: 10px;
        display: none;
    }

    @media(max-width:500px) {
        .menu {
            display: none;
        }

        .logo {
            margin: 0 auto;
        }

        .toggleAside {
            display: block;
        }
    }
}
</style>
