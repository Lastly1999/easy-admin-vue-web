<template>
  <div>login</div>
</template>

<script>
import { getGraphic } from "@/services/auth";
export default {
  mounted() {
    getGraphic();
  },
};
</script>

<style>
</style>