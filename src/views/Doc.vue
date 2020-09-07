<template>
<div class="doc-container">
    <Topnav />
    <div class="doc-content">
        <aside v-if="menuVisible">
            <h2>组件列表</h2>
            <ol>
                <li>
                    <router-link to="/switch">switch组件</router-link>
                </li>
                <li>
                    <router-link to="/button">button组件</router-link>
                </li>
                <li>
                    <router-link to="/dialog">dialog组件</router-link>
                </li>
                <li>
                    <router-link to="/tabs">tabs组件</router-link>
                </li>
            </ol>
        </aside>
        <main>
            <router-view />
        </main>
    </div>
</div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue'
import {
    inject,
    Ref
} from 'vue'
export default {
    components: {
        Topnav
    },
    setup() {
        const menuVisible = inject < Ref < boolean >> ('refmenuVisible')
        console.log('doc this is menuVisible:', menuVisible.value)
        return {
            menuVisible
        }
    }
}
</script>

<style lang="scss">
.doc-container {
    position: relative;
}

.doc-content {
    display: flex;
    color: #000;
    padding-top: 46px;
    height: calc(100vh - 51px);

    aside {
        background: #A9D5E7;
        width: 200px;
        padding-top: 5px;
        height: 100%;
    }

    li {
        padding: 10px 0px;

        &:hover {
            cursor: pointer;
        }
    }

    main {
        height: 100%;
    }
}

@media(max-width:500px) {
    .doc-content {
        padding-top: 10px;
        position: fixed;
        top: 45px;
        left: 0;
    }
}
</style>
