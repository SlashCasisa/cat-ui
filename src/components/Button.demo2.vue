<demo>
禁用状态
</demo>

<template>
  <Button disabled>默认按钮</Button>
  <Button type="dash" disabled>虚线按钮</Button>
  <Button type="primary" disabled>主要按钮</Button>
  <Button type="success" disabled>成功按钮</Button>
  <Button type="danger" disabled>危险按钮</Button>
  <Button type="link" disabled>链接按钮</Button>
</template>

<script lang="ts">
import Button from "../lib/Button1.vue";
import { ref } from "vue";
export default {
  components: {
    Button
  },
};
</script>
