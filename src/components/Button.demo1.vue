<demo>
基础用法
</demo>

<template>
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
</template>

<script lang="ts">
import Button from "../lib/Button1.vue";
import { ref } from "vue";
export default {
  components: {
    Button,
  },
  setup() {
    const onClick = () => {
      console.log("click button");
    };
    return {
      onClick,
    };
  },
};
</script>
<style>
.button-item {
  padding: 10px 0;
}
</style>
