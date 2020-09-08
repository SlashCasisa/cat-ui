<template>
<div>
    <Switch :value="y" @changeSwitch="y=$event" />
</div>
</template>

<script lang="ts">
import Switch from '../lib/Switch.vue'
import {
    ref
} from 'vue'
export default {
    components: {
        Switch
    },
    setup() {
        const y = ref(false)
        return {
            y
        }
    }
    // y=$event 相当于 (x)=>y= x
}
</script>
