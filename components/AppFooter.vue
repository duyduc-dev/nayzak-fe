<template>
  <footer class="bg-[#f5f5f5]">
    <AppContainer class="hidden py-10 md:flex">
      <div class="flex-1">
        <div class="h-[56px]">
          <NuxtImg src="/images/logo-large.png" class="h-full" />
        </div>
        <p class="text-gray-500">
          {{ t("phosfLuorescentlyEngageWorldwideMethodProcessShopping") }}
        </p>
      </div>
      <div class="flex-1">
        <div class="flex justify-between">
          <div v-for="item in footerList" :key="item.title">
            <p class="font-[500]">{{ t(item.title) }}</p>
            <div class="mt-4 flex flex-col gap-3">
              <p
                v-for="child in item.children"
                :key="child.title"
                class="text-gray-500"
              >
                {{ t(child.title) }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </AppContainer>

    <AppContainer class="flex py-10 md:hidden">
      <div class="w-full">
        <h3 class="text-[28px] font-bold">{{ t("joinNewsletter") }}</h3>
        <p class="mt-3 text-gray-500">
          {{ t("theStandardChunkOfLoremIpsum") }}
        </p>
        <div class="flex w-full justify-center">
          <app-input
            container-class="w-full"
            :right-component="LucideMailIcon"
            container-input-class="border-transparent border-b-black rounded-none px-0 w-full md:w-[500px] mb-5 mt-10"
            :placeholder="t('emailAddress')"
            :left-label="t('subscribe')"
          />
        </div>
      </div>
    </AppContainer>

    <AppContainer class="border-t border-t-gray-300 py-5">
      <div class="text-[14px] text-gray-500">© 2088 Nayzak Design</div>
    </AppContainer>
  </footer>
</template>
<script setup lang="ts">
import LucideMailIcon from "@/components/icons/LucideMailIcon.vue";

const { t } = useI18n();

const footerList = [
  {
    title: "shop",
    children: [
      { title: "myAccount" },
      { title: "login" },
      { title: "wishList" },
      { title: "cart" },
    ],
  },
  {
    title: "information",
    children: [
      { title: "shippingPolicy" },
      { title: "returnsRefunds" },
      { title: "cookiesPolicy" },
      { title: "frequentlyAsked" },
    ],
  },
  {
    title: "company",
    children: [
      { title: "aboutUs" },
      { title: "privacyPolicy" },
      { title: "termsConditions" },
      { title: "contactUs" },
    ],
  },
];
</script>
