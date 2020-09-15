<template>
<div class="layout">
    <Topnav class="nav" toggleMenuButtonVisible />
    <div class="content">
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
                    <router-link to="/button1">button1组件</router-link>
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
.layout {
    display: flex;
    flex-direction: column;
    height: 100vh;

    >.nav {
        flex-shrink: 0;
    }

    >.content {
        flex-grow: 1;
        padding-top: 60px;
        padding-left: 156px;
         
        @media (max-width: 500px) {
            padding-left: 0;
        }
    }
}

.content {
    display: flex;

    >aside {
        flex-shrink: 0;
    }

    >main {
        flex-grow: 1;
        padding: 16px;
        background: white;
    }
}

aside {
    background: linear-gradient(0deg, rgba(122, 83, 202, 1) 0%, rgba(140, 102, 215, 1) 35%,  rgba(197, 196, 238, 1) 100%);
    width: 150px;
    padding: 16px;
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 70px;
    height: 100%;
    color: #fff;
    >h2 {
        margin-bottom: 4px;
    }

    >ol {
        >li {
            padding: 4px 0;
        }
    }
}

main {
    overflow: auto;
}
</style>
