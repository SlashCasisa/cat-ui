<template>
<button class="cat-button" :class="classes" :disabled="disabled">
    <span v-if="loading" class="cat-loadingIndicator"></span>
    <slot />
</button>
</template>

<script lang="ts">
import {
    computed
} from 'vue'
export default {
    // inheritAttrs: false, //可以取消默认绑定
    props: {
        type: {//类型
            type: String,
            defalut: 'text'
        },
        round:{//圆角
            type: Boolean,
            default: false
        },
        size: {
            type: String,
            defalut: 'normal'
        },
        level: {
            type: String,
            default: 'normal'
        },
        disabled: {
            type: Boolean,
            default: false
        },
        loading: {
            type: Boolean,
            default: false
        },
        
    },
    setup(props, context) {
        // console.log({
        //     ...props
        // })
        // console.log({
        //     ...context.attrs
        // })
        const {
            type,
            size,
            level,
            round
        } = props;
        const classes = computed(() => {
            return {
                [`cat-type-${type}`]: type,
                [`cat-size-${size}`]: size,
                [`cat-level-${level}`]: level,
                ['cat-button-round']: round
            };
        });
        return {
            classes
        }
    }

}
</script>

<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #1890fb;
$blue-hover: #40a9fb;
$blue-active: #096df8;
$blue-disabled: #a0cfff;

$green: #67c22a;
$green-hover: #85ce58;
$green-active: #5daf30;
$green-disabled: #b3e19d;

$yellow: #e6a22c;
$yellow-hover: #ebb553;
$yellow-active: #ce8256;
$yellow-disabled: #f3d19e;


$red: #ff4d4b;
$red-hover: #f56c6c;
$red-active: #d93639;
$red-disabled: #fab6b6;

$radius: 4px;
$grey: grey;
$text-shadow: 0 -1px 0 rgba(0,0,0,.12);
$box-shadow: 0 1px 0 fade-out(black, 0.95);
$white: #fff;
$loading-color: #FBFDFF;

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
    box-shadow: $box-shadow;
    text-shadow: $text-shadow;
    transition: background 250ms;
    line-height: 1;

    &+& {
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
     &[disabled] {
        cursor: not-allowed;
        color: $grey;
        &:hover,
        &:focus {
            color: $grey;
            border-color: $border-color;
        }
    }
    
    //默认按钮
    // &.cat-type-text {
    //     border-color: transparent;
    //     box-shadow: none;
    //     color: inherit;

    //     &:hover,
    //     &:focus {
    //         background: darken(white, 5%);
    //     }
    //     &[disabled] {
    //         cursor: not-allowed;
    //         &:hover,
    //         &:focus {
    //             color: $grey;
    //         }
    //     }
    // }
    // 虚线按钮
    &.cat-type-dash {
        border-style: dashed;
        &[disabled] {
            // cursor: not-allowed;
            color: $grey;
        }
    }
    //主要按钮 
    &.cat-type-primary {
        color: $white;
        background: $blue;
        border-color: $blue;
        &:hover,&:focus{
           background: $blue-hover;
           border-color: $blue-hover; 
        }
        &:active{
           background: $blue-active;
           border-color: $blue-active; 
        }
        &[disabled] {
            // cursor: not-allowed;
            color: $white;
            background: $blue-disabled;
            border-color: $blue-disabled; 
        }
    }
    //成功按钮
    &.cat-type-success {
        color: $white;
        background: $green;
        border-color: $green;
        &:hover,&:focus{
           background: $green-hover;
           border-color: $green-hover; 
        }
        &:active{
            background: $green-active;
            border-color: $green-active; 
        }
        &[disabled] {
            // cursor: not-allowed;
            color: $white;
            background: $green-disabled;
            border-color: $green-disabled; 
        }
    }
    //危险按钮
    &.cat-type-danger {
        color: $white;
        background: $red;
        border-color: $red;
        &:hover,&:focus{
           background: $red-hover;
           border-color: $red-hover; 
        }
        &:active{
            background: $red-active;
           border-color: $red-active; 
        }
        &[disabled] {
            // cursor: not-allowed;
            color: $white;
            background: $red-disabled;
            border-color: $red-disabled; 
        }
    }

    //链接按钮
    &.cat-type-link {
        border-color: transparent;
        box-shadow: none;
        color: $blue;

        &:hover,
        &:focus {
            color: lighten($blue, 10%);
        }
        &[disabled] {
            cursor: not-allowed;
            color: $grey; 
            border: none;
        }
    }
    //圆角按钮
    &.cat-button-round{
        border-radius: 20px;
    }
    
    //大尺寸的按钮
    &.cat-size-big {
        font-size: 24px;
        height: 48px;
        padding: 0 16px;
    }

    //小尺寸的按钮
    &.cat-size-small {
        font-size: 12px;
        height: 20px;
        padding: 0 10px;
    }

    // &.cat-type-text {
    //     &.cat-level-main {
    //         background: $blue;
    //         color: white;
    //         border-color: $blue;

    //         &:hover,
    //         &:focus {
    //             background: darken($blue, 10%);
    //             border-color: darken($blue, 10%);
    //         }
    //     }

    //     &.cat-level-danger {
    //         background: $red;
    //         border-color: $red;
    //         color: white;

    //         &:hover,
    //         &:focus {
    //             background: darken($red, 10%);
    //             border-color: darken($red, 10%);
    //         }
    //     }
    // }

    // &.cat-type-link {
    //     &.cat-level-danger {
    //         color: $red;

    //         &:hover,
    //         &:focus {
    //             color: darken($red, 10%);
    //         }
    //     }
    // }

    // &.cat-type-text {
    //     &.cat-level-main {
    //         color: $blue;

    //         &:hover,
    //         &:focus {
    //             color: darken($blue, 10%);
    //         }
    //     }

    //     &.cat-level-danger {
    //         color: $red;

    //         &:hover,
    //         &:focus {
    //             color: darken($red, 10%);
    //         }
    //     }
    // }

    // &.cat-type-button {
    //     &[disabled] {
    //         cursor: not-allowed;
    //         color: $grey;

    //         &:hover {
    //             border-color: $grey;
    //         }
    //     }
    // }

    // &.cat-type-link,
    // &.cat-type-text {
    //     &[disabled] {
    //         cursor: not-allowed;
    //         color: $grey;
    //     }
    // }

    >.cat-loadingIndicator {
        width: 14px;
        height: 14px;
        display: inline-block;
        margin-right: 4px;
        border-radius: 8px;
        border-color: $loading-color $loading-color $loading-color transparent;
        border-style: solid;
        border-width: 2px;
        animation: cat-spin 1s infinite linear;
    }
}

@keyframes cat-spin {
    0% {
        transform: rotate(0deg)
    }

    100% {
        transform: rotate(360deg)
    }
}
</style>
