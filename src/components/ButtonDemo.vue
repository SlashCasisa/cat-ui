<template>
<div>
    <h1>示例1</h1>
    <Button @click="onClick" @focus="onClick" @mouseover="onClick" size="small">hello</Button>
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
