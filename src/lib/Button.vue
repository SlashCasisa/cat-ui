<template>
  <button class="cat-button" :class="classes" :disabled="disabled">
    <span v-if="loading" class="cat-loadingIndicator"></span>
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { computed } from "vue";
declare const props: {
  theme?: 'button' | 'text' | 'link';
  size?: 'normal' | 'big' | 'small';
  level?: 'normal' | 'main' | 'danger';
  disabled: boolean;
  loading: boolean;
}
export default {
  // inheritAttrs: false, //可以取消默认绑定
  props: {
    theme: {
      type: String,
      defalut: "button",
    },
    size: {
      type: String,
      defalut: "normal",
    },
    level: {
      type: String,
      default: "normal",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    // console.log({
    //     ...props
    // })
    // console.log({
    //     ...context.attrs
    // })
    const { theme, size, level } = props;
    const classes = computed(() => {
      return {
        [`cat-theme-${theme}`]: theme,
        [`cat-size-${size}`]: size,
        [`cat-level-${level}`]: level,
      };
    });
    return {
      classes,
    };
  },
};
</script>

<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
$red: red;
$grey: grey;

// lighten($color,$amount)：通过改变颜色的亮度值，让颜色变亮，创建一个新的颜色；
// darken($color,$amount)：通过改变颜色的亮度值，让颜色变暗，创建一个新的颜色；
.cat-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  transition: background 250ms;

  & + & {
    margin-left: 8px;
  }

  &:hover,
  &:focus {
    color: $blue;
    border-color: $blue;
  }

  &:focus {
    outline: none;
  }

  &::-moz-focus-inner {
    border: 0;
  }

  &.cat-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $blue;

    &:hover,
    &:focus {
      color: lighten($blue, 10%);
    }
  }

  &.cat-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;

    &:hover,
    &:focus {
      background: darken(white, 5%);
    }
  }

  &.cat-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }

  &.cat-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }

  &.cat-theme-button {
    &.cat-level-main {
      background: $blue;
      color: white;
      border-color: $blue;

      &:hover,
      &:focus {
        background: darken($blue, 10%);
        border-color: darken($blue, 10%);
      }
    }

    &.cat-level-danger {
      background: $red;
      border-color: $red;
      color: white;

      &:hover,
      &:focus {
        background: darken($red, 10%);
        border-color: darken($red, 10%);
      }
    }
  }

  &.cat-theme-link {
    &.cat-level-danger {
      color: $red;

      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }

  &.cat-theme-text {
    &.cat-level-main {
      color: $blue;

      &:hover,
      &:focus {
        color: darken($blue, 10%);
      }
    }

    &.cat-level-danger {
      color: $red;

      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }

  &.cat-theme-button {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;

      &:hover {
        border-color: $grey;
      }
    }
  }

  &.cat-theme-link,
  &.cat-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
    }
  }

  > .cat-loadingIndicator {
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: $blue $blue $blue transparent;
    border-style: solid;
    border-width: 2px;
    animation: cat-spin 1s infinite linear;
  }
}

@keyframes cat-spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
