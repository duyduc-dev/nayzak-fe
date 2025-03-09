<script setup lang="ts">
import AppDrawerRight from "@/components/AppDrawerRight.vue";
import { navigates } from "@/components/Header/nav";
import LucideSearchIcon from "@/components/icons/LucideSearchIcon.vue";
import LucideShoppingCartIcon from "@/components/icons/LucideShoppingCartIcon.vue";
import LucideXIcon from "@/components/icons/LucideXIcon.vue";

const cartItem = ref(99);

const drawRightOpeningRef = useTemplateRef<InstanceType<typeof AppDrawerRight>>(
  "drawRightOpeningRef",
);
const { t } = useI18n();

const setVisible = (visible: boolean): void => {
  if (drawRightOpeningRef.value) {
    drawRightOpeningRef.value.setVisible(visible);
  }
};

defineExpose({ setVisible });
</script>

<template>
  <app-drawer-right
    ref="drawRightOpeningRef"
    content-class="py-6 px-6 flex flex-col justify-between"
  >
    <div>
      <div class="flex items-center justify-between">
        <NuxtLink to="/" class="h-[44px]">
          <NuxtImg class="h-full object-cover" src="/images/nayzak.png" />
        </NuxtLink>
        <div class="cursor-pointer" @click="setVisible(false)">
          <LucideXIcon size="24" />
        </div>
      </div>
      <div>
        <AppInput
          container-class="mt-5"
          :right-component="LucideSearchIcon"
          :right-component-props="{ size: 20 }"
          :placeholder="t('search')"
        />
        <div class="mt-4">
          <div class="flex flex-col gap-2">
            <div
              v-for="item in navigates"
              :key="item.title"
              class="border-b border-gray-300 py-2 text-[15px] font-medium text-gray-600"
            >
              <NuxtLink
                :to="item.link"
                class="block w-full"
                exact-active-class="text-black font-semibold"
                @click="setVisible(false)"
              >
                {{ t(item.title) }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="flex items-center justify-between">
        <div class="text-[14px] font-semibold text-gray-500">
          {{ t("cart") }}
        </div>
        <div>
          <div class="flex items-center gap-2">
            <LucideShoppingCartIcon />
            <div
              class="h-[22px] w-[22px] rounded-full bg-black text-center text-[12px] leading-[22px] text-white"
            >
              {{ cartItem > 10 ? "9+" : cartItem }}
            </div>
          </div>
        </div>
      </div>
      <div class="my-4 h-[1px] w-full bg-gray-200" />
      <div class="flex items-center justify-between">
        <div class="text-[14px] font-semibold text-gray-500">
          {{ t("language") }}
        </div>
        <div class="text-[14px] font-semibold">English</div>
      </div>
      <div class="my-4 h-[1px] w-full bg-gray-200" />
      <AppButton>{{ t("signIn") }}</AppButton>
    </div>
  </app-drawer-right>
</template>

<style scoped></style>
