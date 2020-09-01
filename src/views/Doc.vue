<template>
<div class="doc-container">
    <Topnav />
    <div class="doc-content">
        <aside v-if="menuVisible">
            <h2>组件列表</h2>
            <ol>
                <li>
                    <router-link to="/Doc/swich">swich组件</router-link>
                </li>
                <li>
                    <router-link to="/Doc/button">button组件</router-link>
                </li>
                <li>
                    <router-link to="/Doc/dialog">dialog组件</router-link>
                </li>
                <li>
                    <router-link to="/Doc/tabs">tabs组件</router-link>
                </li>
            </ol>
        </aside>
        <main>主内容</main>
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
    width: 200px;
    background: #A9D5E7;
    color: #000;
    padding-top: 50px;

    li {
        padding: 10px 0px;

        &:hover {
            cursor: pointer;
        }
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
