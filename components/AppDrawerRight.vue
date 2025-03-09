<script lang="ts" setup>
import { defineProps } from "vue";

import { cn } from "@/utils";

type Props = {
  maxWidth?: number;
  speed?: number;
  contentClass?: string;
};

const { maxWidth = 360, speed = 300, contentClass } = defineProps<Props>();

const isMounted = ref(false);
const isVisible = ref(false);
const isTransitioning = ref(false);

const toggleBackgroundScrolling = (enable: boolean) => {
  const body = document.querySelector("body");
  if (body) body.style.overflow = enable ? "hidden" : "auto";
};

const classesOverlay = computed(() =>
  cn(
    "fixed inset-0 z-[200] w-full overflow-hidden bg-black/80 opacity-0 transition-all select-none",
    isVisible.value && "opacity-100",
  ),
);

const classesContent = computed(() =>
  cn(
    "fixed top-0 bottom-0 bg-white right-0 z-[9999] h-full w-full translate-x-full overflow-auto shadow-[rgba(149,157,165,0.2)_0px_8px_24px] transition-all",
    isVisible.value && "translate-x-0",
    contentClass,
  ),
);

const setVisible = (visible: boolean) => {
  isTransitioning.value = true;
  if (visible) {
    toggleBackgroundScrolling(true);
    isVisible.value = true;
    isMounted.value = true;
  } else {
    toggleBackgroundScrolling(false);
    isVisible.value = false;
    setTimeout(() => (isMounted.value = false), speed);
  }
  setTimeout(() => {
    isTransitioning.value = false;
  }, speed);
};

defineExpose({ setVisible });
</script>

<template>
  <div>
    <div
      class="invisible"
      :class="{
        visible: isMounted,
      }"
    >
      <div
        :class="classesOverlay"
        :style="{ transitionDuration: `${speed}ms` }"
        @click="setVisible(false)"
      />
      <div
        :class="classesContent"
        :style="{
          maxWidth: `${maxWidth}px`,
          transitionDuration: `${speed}ms`,
        }"
      >
        <slot />
      </div>
    </div>
  </div>
</template>
