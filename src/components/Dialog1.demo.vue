<demo>
HTML调用弹出框
</demo>

<template>
 <Button @click="toggle">toggle</Button>
<Dialog v-model:visible="x" :closeOnClickOverlay="false" :ok="f1" :cancel="f2" title="netlify">
    <template v-slot:title> <strong>netlify</strong></template>
    <template v-slot:content> <strong>nice to meet you</strong></template>
</Dialog>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import {
    ref,
    h
} from 'vue'
export default {
    components: {
        Dialog,
        Button
    },
    setup() {
        const x = ref(false)
        const toggle = () => {
            x.value = !x.value;
        }
        const f1 = () => {

            console.log('ok')
            // return false
        }
        const f2 = () => {}
        return {
            x,
            toggle,
            f1,
            f2,
        }
    }
};
</script>
