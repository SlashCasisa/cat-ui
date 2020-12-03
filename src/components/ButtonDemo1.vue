<template>
<div>Button 按钮</div>
<Demo :component="ButtonDemo1"/>
<Demo :component="ButtonDemo2"/>
<Demo :component="ButtonDemo3"/>
<Demo :component="ButtonDemo4"/>
</template>

<script lang="ts">
import ButtonDemo1 from './Button.demo1.vue'
import ButtonDemo2 from './Button.demo2.vue'
import ButtonDemo3 from './Button.demo3.vue'
import ButtonDemo4 from './Button.demo4.vue'
import Demo from './Demo.vue'
export default {
    components: {
        Demo
    },
    setup() {
        return {
            ButtonDemo1,
            ButtonDemo2,
            ButtonDemo3,
            ButtonDemo4,
        }
    }
}
</script>

