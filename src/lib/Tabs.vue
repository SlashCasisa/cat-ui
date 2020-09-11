<template>
<div>Tabs
    <component :is="defaults[0]" />
    <component :is="defaults[1]" />
</div>
</template>

<script lang="ts">
import Tab from './Tab.vue'
export default {
    setup(props, context) {
        // console.log({
        //     ...context.slots.default()
        // }, 'context')
        const defaults = context.slots.default()
        // console.log(defaults[1].type)
        defaults.forEach((tag) => {
            if (tag.type !== Tab) {
                throw new Error('Tabs必须是Tab')
            }
        })
        return {
            defaults
        }
    }
}
</script>
