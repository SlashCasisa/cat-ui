<template>
<div>
    <h1>示例1</h1>
    <Button />
</div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue"
export default {
    components: {
        Button
    },
    setup() {
        console.log('enter button')
    }
}
</script>
