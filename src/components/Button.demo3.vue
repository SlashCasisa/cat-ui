<demo>
不同尺寸
</demo>

<template>
  <Button size="big">大型按钮</Button>
  <Button>默认按钮</Button>
  <Button size="small">小型按钮</Button>
</template>

<script lang="ts">
import Button from "../lib/Button1.vue";
import { ref } from "vue";
export default {
  components: {
    Button,
  },
};
</script>
