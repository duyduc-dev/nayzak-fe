<script setup lang="ts">
import PuffLoading from "@/components/loading/PuffLoading.vue";

type Props = {
  class?: string;
  fullWidth?: boolean;
  borderRadius?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "rounded";
  variant?: "primary" | "outlined" | "underlined";
  loading?: boolean;
  disabled?: boolean;
};

const {
  class: buttonClass,
  fullWidth = false,
  borderRadius = "md",
  variant = "primary",
  loading = false,
  disabled = false,
} = defineProps<Props>();

const radiusString: Record<typeof borderRadius, string> = {
  none: "rounded-none", // 0
  xs: "rounded-xs", // 2
  sm: "rounded-sm", // 4
  md: "rounded-md", // 6
  lg: "rounded-lg", // 8
  xl: "rounded-xl", // 10
  rounded: "rounded-full",
};

const variantString: Record<typeof variant, string> = {
  primary: "border-black bg-black",
  outlined:
    "border-black bg-transparent text-black hover:bg-black hover:text-white disabled:text-black disabled:bg-white disabled:opacity-50",
  underlined: "border-transparent border-b-black text-black px-0 py-1",
};

const loadingColor: Record<typeof variant, string> = {
  primary: "#fff",
  outlined: "#000",
  underlined: "#000",
};
</script>

<template>
  <button
    :disabled="disabled || loading"
    :class="
      cn(
        'flex w-auto cursor-pointer items-center gap-2 border px-4 py-3 text-[14px] text-white/80 transition-all disabled:cursor-auto',
        fullWidth && 'w-full',
        variantString[variant],
        radiusString[borderRadius],
        buttonClass,
      )
    "
  >
    <puff-loading v-if="loading" :color="loadingColor[variant]" />
    <slot />
  </button>
</template>
