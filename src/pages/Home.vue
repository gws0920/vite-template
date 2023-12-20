<script lang="ts" setup>
const { x, y } = useMouse()
const userStore = useUserStore()
const us = () => {}
</script>

<template>
  <div class="border-base p-4">
    <h2>Home Page: {{ userStore.t }}</h2>
    <code class="rounded mr-2 p-2 color-primary">
      (Vueuse)Mouse Position:
      {{ x }}, {{ y }}
    </code>
    <el-button
      type="primary"
      loading
      text
      bg
      @click="us"
    >按钮</el-button>
  </div>
</template>

<style lang="scss" scoped>
h2 {
  @apply bg-fuchsia-600;
}
</style>
