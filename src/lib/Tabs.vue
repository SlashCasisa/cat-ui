<template>
<div>
    Tabs
    <div v-for="(t,index) in titles" :key="index">{{t}}</div>
    <component :is="item" v-for="(item,index) in defaults" :key="index" />
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
        const titles = defaults.forEach((tag) => {
            return tag.props.title
        })
        return {
            defaults
        }
    }
}
</script>
