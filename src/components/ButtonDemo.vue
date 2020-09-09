<template>
<div>
    <h1>示例1</h1>
    <div>
        <Button theme="button">hello</Button>
        <Button theme="link">hello</Button>
        <Button theme="text">hello</Button>
    </div>
</div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue"
export default {
    components: {
        Button
    },
    setup() {
        const onClick = () => {
            console.log('click button')
        }
        return {
            onClick
        }

    }
}
</script>
