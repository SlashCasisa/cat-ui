<template>
<div class="gulu-tabs">
    <div class="gulu-tabs-nav" ref="container">
        <div class="gulu-tabs-nav-item" :ref="el => { if (el) navItems[index] = el }" v-for="(t,index) in titles" :key="index" :class="{selected: t===selected}">{{t}}</div>
        <div class="gulu-tabs-nav-indicator" ref="indicator" />
    </div>
    <div class="gulu-tabs-content">
        <component class="gulu-tabs-content-item" :class="{selected: item.props.title === selected}" :is="item" v-for="(item,idx) in defaults" :key="idx" />
    </div>
</div>
</template>

<script lang="ts">
import Tab from './Tab.vue'
import {
    ref,
    computed,
    onMounted
} from 'vue'
export default {
    props: {
        selected: {
            type: String
        }
    },
    setup(props, context) {
        const navItems = ref < HTMLDivElement[] > ([])
        const indicator = ref < HTMLDivElement > (null)
        onMounted(() => {
            // console.log({
            //     ...navItems.value
            // })
            const divs = navItems.value
            const result = divs.filter(div => div.classList.contains('selected'))[0];
            //find的兼容性不好
            // const result = divs.find(div => div.classList.contains('selected'));
            console.log(divs, result, 'result###')
            const {
                width
            } = result.getBoundingClientRect()
            indicator.value.style.width = width + 'px'
        })
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
        const titles = defaults.map((tag) => {
            return tag.props.title
        })
        console.log(titles, 'title%%%')
        return {
            defaults,
            titles,
            navItems,
            indicator
        }
    }
}
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;

.gulu-tabs {
    &-nav {
        display: flex;
        color: $color;
        border-bottom: 1px solid $border-color;
        position: relative;

        &-item {
            padding: 8px 0;
            margin: 0 16px;
            cursor: pointer;

            &:first-child {
                margin-left: 0;
            }

            &.selected {
                color: $blue;
            }
        }

        &-indicator {
            position: absolute;
            height: 3px;
            background: $blue;
            left: 0;
            bottom: -1px;
            width: 100px;
            transition: all 250ms;
        }
    }

    &-content {
        padding: 8px 0;

        &-item {
            display: none;

            &.selected {
                display: block;
            }
        }
    }
}
</style>
