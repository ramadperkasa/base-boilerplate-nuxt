<template>
  <div :class="{ container: true, 'container-fluid': props.fluid }">
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  fluid?: boolean;
}>();
</script>

<style scoped lang="less">
.container {
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;

  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }

  @media (min-width: 1400px) {
    max-width: 1320px;
  }
}

.container-fluid {
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
}
</style>
