<script setup lang="ts">
type Props = {
  class?: string;
};

const { class: buttonClass } = defineProps<Props>();
</script>

<template>
  <button
    :class="
      cn(
        'w-full cursor-pointer rounded-[6px] bg-black px-4 py-3 text-[14px] text-white/80',
        buttonClass,
      )
    "
  >
    <slot />
  </button>
</template>

<style scoped></style>
