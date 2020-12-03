<template>
<div>Button 按钮</div>
<Demo :component="ButtonDemo1"/>
<Demo :component="ButtonDemo2"/>
<Demo :component="ButtonDemo3"/>
<Demo :component="ButtonDemo4"/>
<!--
<h1>基础用法</h1>
<div class="button-item">
    <Button @click="onClick">默认按钮</Button>
    <Button type="dash">虚线按钮</Button>
    <Button type="primary">主要按钮</Button>
    <Button type="success">成功按钮</Button>
    <Button type="danger">危险按钮</Button>
    <Button type="link">链接按钮</Button>
</div>
<div>
    <Button round>圆角按钮</Button>
    <Button type="dash" round>虚线按钮</Button>
    <Button type="primary" round>主要按钮</Button>
    <Button type="success" round>成功按钮</Button>
    <Button type="danger" round>危险按钮</Button>
</div>
<h1>禁用状态</h1>
<div>
    <Button disabled>默认按钮</Button>
    <Button type="dash" disabled>虚线按钮</Button>
    <Button type="primary" disabled>主要按钮</Button>
    <Button type="success" disabled>成功按钮</Button>
    <Button type="danger" disabled>危险按钮</Button>
    <Button type="link" disabled>链接按钮</Button>
</div>
<h1>不同尺寸</h1>
<div>
    <div>
        <Button size="big">大型按钮</Button>
        <Button>默认按钮</Button>
        <Button size="small">小型按钮</Button>
    </div>
</div>

<h1>加载中</h1>
<div>
    <Button :loading="true" type="primary">加载中</Button>
     <Button>加载完毕</Button> 
   
</div>
 -->
</template>

<script lang="ts">
// import Button from "../lib/Button1.vue"
import ButtonDemo1 from './Button.demo1.vue'
import ButtonDemo2 from './Button.demo2.vue'
import ButtonDemo3 from './Button.demo3.vue'
import ButtonDemo4 from './Button.demo4.vue'
import Demo from './Demo.vue'
export default {
    components: {
        Demo
        // Button
    },
    setup() {
        // const onClick = () => {
        //     console.log('click button')
        // }
        // return {
        //     onClick
        // }
        return {
            ButtonDemo1,
            ButtonDemo2,
            ButtonDemo3,
            ButtonDemo4,
        }
    }
}
</script>

