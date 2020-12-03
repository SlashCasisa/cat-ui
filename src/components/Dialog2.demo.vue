<demo>
js调用弹出框
</demo>

<template>
<Button @click="showDialog">show</Button>
</template>

<script lang="ts">
import { h } from 'vue'
import {
    openDialog
} from '../lib/openDialog'
export default {
   
    setup() {
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
            showDialog
        }
    }
};
</script>
