<template>
  <Container class="my-12">
    {{ counterValue }}

    <AtomsButton @click="increment">Increment</AtomsButton>
  </Container>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

import { useMyStore } from "@/stores/myStore";
import Container from "@/components/atoms/container.vue";

const store = useMyStore();

const counterValue = computed(() => store.count);

const increment = () => store.increment();

useHead({
  title: "Homeyyy",
  meta: [
    {
      name: "description",
      content: "Home page description",
    },
  ],
});
</script>
