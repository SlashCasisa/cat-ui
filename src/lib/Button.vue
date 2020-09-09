<template>
<div :size="size">
    <button v-bind="rest">
        <slot />
    </button>
</div>
</template>

<script lang="ts">
export default {
    inheritAttrs: false, //可以取消默认绑定
    setup(props, context) {
        const {
            size,
            ...rest
        } = context.attrs //将属性拆分
        return {
            size,
            rest
        }
    }

}
</script>

<style lang="scss" scoped>
div {
    border: 1px solid red;
    width: 100%;
}
</style>
