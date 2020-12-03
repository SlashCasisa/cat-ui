<demo>
加载中
</demo>

<template>
  <Button :loading="true" type="primary">加载中</Button>
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
