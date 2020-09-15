<template>
<div>Button 按钮</div>
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
    <!--
    <div>
        <Button type="link" size="big">大大大</Button>
        <Button type="link">普普通</Button>
        <Button size="small" type="link">小小小</Button>
    </div>
    <div>
        <Button size="big">大大大</Button>
        <Button>普普通</Button>
        <Button size="small">小小小</Button>
    </div>
    -->
</div>
<!--
<h1>示例3</h1>
<div>
    <dir>
        <Button level="main">主要按钮</Button>
        <Button>普通按钮</Button>
        <Button level="danger">危险按钮</Button>
    </dir>
    <dir>
        <Button type="link" level="main">主要链接按钮</Button>
        <Button type="link">普通链接按钮</Button>
        <Button type="link" level="danger">危险链接按钮</Button>
    </dir>
    <dir>
        <Button level="main">主要文字按钮</Button>
        <Button >普通文字按钮</Button>
        <Button level="danger">危险文字按钮</Button>
    </dir>
</div>
-->

<h1>加载中</h1>
<div>
    <Button :loading="true" type="primary">加载中</Button>
    <!-- <Button>加载完毕</Button> -->
</div>

</template>

<script lang="ts">
import Button from "../lib/Button1.vue"
export default {
    components: {
        Button
    },
    setup() {
        const onClick = () => {
            console.log('click button')
        }
        return {
            onClick
        }

    }
}
</script>
<style>
.button-item{
    padding: 10px 0;
}
</style>
