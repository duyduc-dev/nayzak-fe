<script setup lang="ts">
import LocalIcon from "@/components/icons/ArrowRightIcon.vue";
import NikeLogo from "@/components/icons/NikeLogo.vue";

const { t } = useI18n();
</script>

<template>
  <div class="flex flex-col gap-4 bg-[#f5f5f5] px-8 py-10 md:flex-row">
    <div class="flex-1">
      <p class="text-[28px] font-medium">Loved branded</p>
      <p class="mt-2 text-[15px] text-gray-500">
        At vero et accusamus et iusto odio dignissimos ducimus qui blanditiis
        deleniti atqu.
      </p>
      <app-button
        border-radius="none"
        class="mt-3 text-[15px]"
        variant="underlined"
      >
        {{ t("seeAllBrands") }}
        <LocalIcon icon="arrow-right" width="18px" />
      </app-button>
    </div>
    <div class="mt-5 grid flex-1 grid-cols-2 gap-8 md:grid-cols-3">
      <div
        v-for="item in 6"
        :key="item"
        class="flex items-center justify-center"
      >
        <NikeLogo class="h-[36px] text-gray-500" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
