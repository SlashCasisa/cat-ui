<template>
<div class="topnav">
    <div v-if="toggleMenuButtonVisible" class="toggleAside" @click="toggleComponentMenu">
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-menu"></use>
        </svg>
    </div>
    <div class="logo">
    <router-link to="/">
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-cat1"></use>
        </svg>
    </router-link>
    </div>
    <div class="menu">
        <div class="menu-item">文档</div>
    </div>
</div>
</template>

<script lang="ts">
import {
    inject,
    Ref
} from 'vue'
export default {
    props: {
        toggleMenuButtonVisible: {
            type: Boolean,
            default: false
        }
    },
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
    // border-bottom: 1px solid #ccc;

    background: linear-gradient(90deg, rgba(197, 196, 238, 0) 0%, rgba(140, 102, 215, 0) 35%, rgba(122, 83, 202, 0) 100%);
    padding: 16px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 10px;
    position: fixed;
    width: 100%;
    color: rgb(92, 44, 187);
    z-index: 100;
    // height: 25px;

    .logo {
        margin-right: auto;
        
        a{
            font-size: 16px;
            fill: rgb(92, 44, 187);
        }
        svg {
            width: 18px;
            height: 18px;
        }

        &:hover {
            cursor: pointer;
        }
    }

    .menu {
        display: flex;
        flex-grow: 2;
        text-align: right;
        justify-content: flex-end;
        color: rgb(92, 44, 187);

        .menu-item {
            padding-right: 20px;
        }
    }

    .toggleAside {
        width: 24px;
        height: 24px;
        margin-right: 10px;
        display: none;
        // background: fade-out(black, 0.9);

        >svg {
            fill: rgb(122, 83, 202);
            width: 18px;
            height: 18px;
        }

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
