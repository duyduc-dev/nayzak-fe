<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
  >
    <!-- Icon from Lucide by Lucide Contributors - https://github.com/lucide-icons/lucide/blob/main/LICENSE -->
    <path
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M3 12h18M3 18h18M3 6h18"
    />
  </svg>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

type Props = {
  size?: string | number;
};

const { size = 20 } = defineProps<Props>();
</script>
