<template>
<div>
    <Topnav />
    <div class="banner">
        <h1>咕噜UI</h1>
        <h2>一个基于vue3.0的UI库</h2>
        <p class="actions">
            <a class="actions-item" href="https://github.com/SlashCasisa/gulu-ui">Github</a>
            <router-link class="actions-item" to="/Doc">开始</router-link>
        </p>
    </div>
</div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue'
export default {
    components: {
        Topnav
    }
}
</script>

<style lang="scss">
.banner {
    background: lightGreen;

    .actions {
        display: flex;
        justify-content: center;
        padding: 10px 0px;

        >a {
            background: #fff;
            color: #000;
            padding: 5px 10px;
            margin-right: 5px;
            border-radius: 10px;

            &:hover {
                background: pink;
            }
        }
    }
}
</style>
