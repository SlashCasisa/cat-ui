<template>
<!-- <div style="position:relative;z-index:1"> -->
<div>Dialog 示例</div>
<h1>示例1</h1>
<Button @click="toggle">toggle</Button>
<Dialog v-model:visible="x" :closeOnClickOverlay="false" :ok="f1" :cancel="f2" title="netlify">
    <template v-slot:content> <strong>nice to meet you</strong></template>
    <template v-slot:title> <strong>netlify</strong></template>
</Dialog>
<!--</div>-->
<h1>示例2</h1>
<Button @click="showDialog">show</Button>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import {
    ref,
    h
} from 'vue'
import {
    openDialog
} from '../lib/openDialog'
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
        const showDialog = () => {
            openDialog({
                // title: h('strong', {}, '标题'),
                title: '标题',
                content: '你好',
                ok() {
                    console.log('ok')
                },
                cancel() {
                    console.log('cancel')
                }
            })
        }
        return {
            x,
            toggle,
            f1,
            f2,
            showDialog
        }
    }
}
</script>
