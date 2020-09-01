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
export default {
    name: 'App',
    setup() {
        const width = document.documentElement.clientWidth;
        const menuVisible = ref(width <= 500 ? false : true);
        provide('refmenuVisible', menuVisible) // set
    }
}
</script>
