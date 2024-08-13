<template>
  <button
    :type="type"
    :class="[
      baseClass,
      variantClass,
      colorClass,
      sizeClass,
      { 'opacity-50 cursor-not-allowed': disabled || isLoading },
      props.class,
    ]"
    :disabled="disabled || isLoading"
    :style="[{ width: widthStyle }, style]"
    @click="emit('click')"
  >
    <span v-if="!isLoading">
      <slot />
    </span>
    <span v-else>Loading...</span>
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { PropType } from "vue";

const props = defineProps({
  text: {
    type: String as PropType<string | null>,
    default: null,
  },
  type: {
    type: String as PropType<"button" | "submit">,
    default: "button",
  },
  variant: {
    type: String as PropType<"solid" | "outline" | "link">,
    default: "solid",
  },
  color: {
    type: String as PropType<
      "primary" | "secondary" | "success" | "danger" | "warning" | "info"
    >,
    default: "primary",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String as PropType<"xs" | "sm" | "md" | "lg" | "xl">,
    default: "md",
  },
  width: {
    type: [String, Number] as PropType<string | number>,
    default: "auto",
  },
  class: {
    type: String,
    default: "",
  },
  style: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["click"]);

const baseClass = "font-medium rounded-lg focus:outline-none focus:ring-4";
const variantClass = computed(() => {
  switch (props.variant) {
    case "outline":
      return "border-2";
    case "link":
      return "bg-transparent underline";
    default:
      return "bg-opacity-100";
  }
});

const colorClass = computed(() => {
  switch (props.color) {
    case "secondary":
      return "bg-secondary hover:bg-secondary/90 focus:ring-secondary/50";
    case "success":
      return "bg-green-600 hover:bg-green-700 focus:ring-green-300";
    case "danger":
      return "bg-red-600 hover:bg-red-700 focus:ring-red-300";
    case "warning":
      return "bg-yellow-500 hover:bg-yellow-600 focus:ring-yellow-200";
    case "info":
      return "bg-blue-600 hover:bg-blue-700 focus:ring-blue-300";
    default:
      return "bg-primary hover:bg-primary/90 focus:ring-primary/50 text-white";
  }
});

const sizeClass = computed(() => {
  switch (props.size) {
    case "xs":
      return "text-xs px-2 py-1";
    case "sm":
      return "text-sm px-3 py-2";
    case "lg":
      return "text-lg px-6 py-3";
    case "xl":
      return "text-xl px-8 py-4";
    default:
      return "text-md px-4 py-2";
  }
});

const widthStyle = computed(() =>
  typeof props.width === "number" ? `${props.width}px` : props.width
);
</script>
