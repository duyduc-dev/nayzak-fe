<template>
  <div>
    <HomeCarousel />
    <app-container
      class="my-8 flex flex-col justify-between gap-6 md:max-h-[800px] md:flex-row"
    >
      <div class="relative w-full flex-1 bg-[#f5f5f5]">
        <div class="absolute inset-0 p-6">
          <p class="text-[20px] font-semibold">Coats</p>
          <p class="mt-2 inline border-b border-gray-800 text-[14px]">
            Explore
          </p>
        </div>
        <div class="h-full w-full">
          <NuxtImg src="/images/ex1.png" class="h-full w-full object-cover" />
        </div>
      </div>
      <div class="relative flex w-full flex-1 flex-col justify-between gap-6">
        <div
          class="relative flex h-full w-full flex-1 justify-end bg-[#f5f5f5]"
        >
          <div class="h-full">
            <NuxtImg src="/images/ex1.png" class="h-full object-cover" />
          </div>
          <div class="absolute bottom-0 left-0 p-6">
            <p class="text-[20px] font-semibold">Purses</p>
            <p class="mt-2 inline border-b border-gray-800 text-[14px]">
              Explore
            </p>
          </div>
        </div>
        <div
          class="relative flex h-full w-full flex-1 justify-end bg-[#f5f5f5]"
        >
          <div class="h-full">
            <NuxtImg src="/images/ex1.png" class="h-full object-cover" />
          </div>
          <div class="absolute bottom-0 left-0 p-6">
            <p class="text-[20px] font-semibold">Accessories</p>
            <p class="mt-2 inline border-b border-gray-800 text-[14px]">
              Explore
            </p>
          </div>
        </div>
      </div>
    </app-container>
    <app-container class="my-8 flex justify-center">
      <div
        class="mx-auto flex items-center gap-8 text-[15px] font-medium text-gray-500"
      >
        <div class="font-semibold text-black">Best sellers</div>
        <div>New Arrivals</div>
        <div>Sale</div>
      </div>
    </app-container>
    <app-container>
      <div class="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-8">
        <div v-for="item in 6" :key="item" class="w-full">
          <div>
            <div class="w-full bg-[#f5f5f5]">
              <NuxtImg src="/images/ex1.png" class="w-full object-cover" />
            </div>
            <div class="text-center text-[15px] font-[500]">
              <p class="font-semibold">Malqa pullover</p>
              <p>$56.00</p>
            </div>
          </div>
        </div>
      </div>
      <div class="my-10 flex justify-center">
        <AppButton variant="outlined" border-radius="none">
          {{ t("loadMore") }}
        </AppButton>
      </div>
    </app-container>

    <app-container class="my-4">
      <loved-brands />
    </app-container>

    <app-container class="mt-10 !px-0">
      <div class="mx-auto mb-5 w-full md:max-w-[600px]">
        <h3 class="text-center text-[16px] uppercase">
          {{ t("tagline") }}
        </h3>
        <p class="text-center text-[28px] font-bold">
          {{ t("centraSeries") }}
        </p>
        <p class="text-center text-gray-500">{{ t("centraSeriesDesc") }}</p>
      </div>
      <div class="w-full">
        <NuxtImg src="/images/ex2.png" class="w-full object-cover" />
      </div>
    </app-container>

    <app-container
      class="my-10 flex justify-center bg-[#f5f5f5] p-8 py-[50px] md:py-10"
    >
      <div class="w-full text-center">
        <h3 class="text-[28px] font-bold">{{ t("joinOurNewsletter") }}</h3>
        <p>{{ t("bigDiscountsAndRightToYourInbox") }}</p>
        <div class="flex w-full justify-center">
          <app-input
            :right-component="LucideMailIcon"
            container-input-class="border-transparent border-b-black rounded-none px-0  w-full md:w-[500px] mb-5 mt-10"
            :placeholder="t('emailAddress')"
            :left-label="t('signUp')"
          />
        </div>
      </div>
    </app-container>

    <app-container class="mt-10 !px-0">
      <div class="mx-auto mb-5 max-w-[600px]">
        <h3 class="text-center text-[16px] uppercase">
          {{ t("checkUsOut") }}
        </h3>
        <p class="text-center text-[28px] font-bold">
          {{ t("onInstagram") }}
        </p>
        <p class="text-center text-gray-500">
          {{ t("atVeroEosEtAccusamusEtIustoOdio") }}
        </p>
      </div>
      <div class="grid w-full grid-cols-1 gap-2 md:grid-cols-4 md:gap-8">
        <div v-for="item in 4" :key="item">
          <NuxtImg src="/images/ex3.png" class="w-full object-cover" />
        </div>
      </div>
    </app-container>

    <app-container class="my-10 grid grid-cols-2 md:grid-cols-4 md:gap-8">
      <div
        v-for="item in 4"
        :key="item"
        class="flex gap-2 px-5 py-5 text-[15px] last:border-none"
      >
        <TruckIcon />
        <div>
          <p>{{ t("freeShipping") }}</p>
          <p class="mt-1 text-[14px] text-gray-500">{{ t("ordersAbove") }}</p>
        </div>
      </div>
    </app-container>
  </div>
</template>

<script lang="js" setup>
import LucideMailIcon from "@/components/icons/LucideMailIcon.vue";
import TruckIcon from "@/components/icons/TruckIcon.vue";
import HomeCarousel from "@/components/partials/HomeCarousel.vue";
import LovedBrands from "@/components/partials/LovedBrands.vue";

const { t } = useI18n();
</script>
