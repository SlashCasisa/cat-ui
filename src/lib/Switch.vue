<template>
<button class="gulu-switch" :class="{'gulu-checked':value}" @click="toggle"><span></span></button>
<div>{{value}}</div>
</template>

<script>
import {
    ref
} from 'vue'
export default {
    props: {
        value: Boolean
    },
    setup(props, context) {
        const toggle = () => {
            // props.value = !props.value
            context.emit('update:value', !props.value)
        }
        return {
            toggle
        }
    }
}
</script>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;

.gulu-switch {
    height: $h;
    width: $h*2;
    border: none;
    background: #ccc;
    border-radius: $h/2;
    position: relative;

    >span {
        position: absolute;
        top: 2px;
        left: 2px;
        height: $h2;
        width: $h2;
        background: #fff;
        border-radius: $h2/2;
        transition: left 250ms;
    }

    &.gulu-checked {
        background: #1890ff;

        >span {
            left: calc(100% - 20px);
        }
    }

    &:focus {
        outline: none;
    }

    &:active {
        >span {
            width: $h2 + 4px;
        }
    }

    &.gulu-checked:active {
        >span {
            width: $h2 + 4px;
            margin-left: -4px;
        }
    }
}
</style>
