<template>
<router-view />
</template>

<script lang="ts">
import {
    watch,
    ref,
    provide,
    reactive
} from 'vue'
import
router
from "./router/index";
export default {
    name: 'App',
    setup() {
        const width = document.documentElement.clientWidth;
        const menuVisible = ref(width <= 500 ? false : true);
        provide('refmenuVisible', menuVisible) // set
        router.afterEach(() => {
            // console.log('router enter', menuVisible, 'menuvisible', width, 'width')
            if (width <= 500) {
                menuVisible.value = false
            }
        })
    }
}
</script>
