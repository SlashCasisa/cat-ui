<template>
  <button
    class="cat-switch"
    :class="[{ 'cat-checked': value }, { 'cat-checked-disabled': disabled }]"
    @click="toggle"
  >
    <span></span>
  </button>
  <div>{{ value }}</div>
</template>

<script lang="ts" setup="props,context">
import { ref,SetupContext } from "vue";
declare const props: {value: boolean,disabled:boolean}
declare const context:SetupContext
export default {
  props: {
    value: Boolean,
    disabled: Boolean,
  },
  // setup(rops, context) {
  //   const toggle = () => {
  //     // props.value = !props.value
  //     if (!props.disabled) {
  //       context.emit("update:value", !props.value);
  //     }
  //   };
  //   return {
  //     toggle,
  //   };
  // },
};
export const toggle=()=>{
   if (!props.disabled) {
    context.emit("update:value", !props.value);
   }
}

</script>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;

.cat-switch {
  height: $h;
  width: $h * 2;
  border: none;
  background: #ccc;
  border-radius: $h/2;
  position: relative;

  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: #fff;
    border-radius: $h2/2;
    transition: left 250ms;
    cursor: pointer;
  }

  &.cat-checked {
    background: #1890ff;
    cursor: pointer;

    > span {
      left: calc(100% - 20px);
    }
  }
  &.cat-checked-disabled {
    cursor: not-allowed;
    > span {
      cursor: not-allowed;
    }
  }
  &:focus {
    outline: none;
  }

  &:active {
    > span {
      width: $h2 + 4px;
    }
    &.cat-checked-disabled {
      > span {
        width: $h2;
      }
    }
  }

  &.cat-checked:active {
    > span {
      width: $h2 + 4px;
      margin-left: -4px;
    }
    &.cat-checked-disabled {
      > span {
        width: $h2;
        margin-left: 0px;
      }
    }
  }
}
</style>
