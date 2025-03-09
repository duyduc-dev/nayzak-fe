<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
  >
    <!-- Icon from Lucide by Lucide Contributors - https://github.com/lucide-icons/lucide/blob/main/LICENSE -->
    <g
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21l-4.3-4.3" />
    </g>
  </svg>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

type Props = {
  size?: string | number;
};

const { size = 20 } = defineProps<Props>();
</script>
