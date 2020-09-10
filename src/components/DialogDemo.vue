<template>
<div>
    <Dialog />
</div>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue'
export default {
    components: {
        Dialog
    },
    setup() {
        console.log('enter dialog')
    }
}
</script>
