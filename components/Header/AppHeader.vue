<script setup lang="ts">
import AppNavigateDrawer from "@/components/Header/AppNavigateDrawer.vue";
import { navigates } from "@/components/Header/nav";
import LucideAlignJustifyIcon from "@/components/icons/LucideAlignJustifyIcon.vue";
import LucideSearchIcon from "@/components/icons/LucideSearchIcon.vue";
import LucideShoppingCartIcon from "@/components/icons/LucideShoppingCartIcon.vue";
import LucideUserIcon from "@/components/icons/LucideUserIcon.vue";

const cartItem = ref(99);
const navigateDrawer =
  useTemplateRef<InstanceType<typeof AppNavigateDrawer>>("navigate-drawer");

const { t } = useI18n();

const setOpenDrawer = (bool: boolean) => {
  if (navigateDrawer.value) {
    navigateDrawer.value.setVisible(bool);
  }
};
</script>

<template>
  <header class="fixed top-0 right-0 left-0 z-[9999999999] h-[64px]">
    <app-container class="h-full">
      <div class="flex h-full items-center justify-between py-1">
        <NuxtLink to="/" class="block h-full">
          <NuxtImg
            class="max-h-full object-cover"
            src="/images/logo-large.png"
            alt=""
          />
        </NuxtLink>
        <ul
          class="hidden flex-1 list-none items-center gap-2 pl-6 md:flex xl:justify-center xl:gap-8 xl:pl-0"
        >
          <li
            v-for="navItem in navigates"
            :key="navItem.title"
            class="px-2 text-[14px] leading-tight font-medium text-gray-800"
          >
            <NuxtLink :to="navItem.link" exact-active-class="font-semibold">
              {{ t(navItem.title) }}
            </NuxtLink>
          </li>
        </ul>
        <div class="flex items-center justify-between gap-4 px-6 py-1">
          <LucideSearchIcon class="hidden md:block" />
          <LucideUserIcon class="hidden md:block" />
          <div class="flex items-center gap-2">
            <LucideShoppingCartIcon />
            <div
              class="h-[22px] w-[22px] rounded-full bg-black text-center text-[12px] leading-[22px] text-white"
            >
              {{ cartItem > 10 ? "9+" : cartItem }}
            </div>
          </div>
          <div
            class="ml-2 block cursor-pointer md:hidden"
            @click="setOpenDrawer(true)"
          >
            <LucideAlignJustifyIcon />
          </div>
        </div>
      </div>
    </app-container>
    <AppNavigateDrawer ref="navigate-drawer" />
  </header>
</template>
