<template>
  <div class="min-h-screen bg-[#eab4b1]">
    <Carousel class="h-full" v-bind="carouselConfig">
      <Slide v-for="slide in 10" :key="slide" class="h-full">
        <div class="flex h-full min-h-screen w-full pt-[64px]">
          <div class="flex-1" />
          <div class="flex-1">
            <div class="flex h-full items-end">
              <NuxtImg
                src="/images/example.png"
                class="mt-auto h-[80%] object-cover"
              />
            </div>
          </div>
        </div>
      </Slide>
    </Carousel>
    <div class="absolute inset-0 z-[999] flex pt-[64px]">
      <app-container class="h-full">
        <div
          class="flex h-full w-full max-w-[35vw] flex-1 flex-col justify-center"
        >
          <div class="font-semibold">New Arrivals</div>
          <p class="text-[42px] font-bold">Create your dream shop instanly</p>
          <p class="text-[15px]">
            Keep your everyday style chic and on-trend with our selection 20+
            styles to choose from
          </p>
          <div>
            <AppButton class="mt-8 flex w-auto rounded-none px-8">
              See collection
            </AppButton>
          </div>
        </div>
        <div class="flex-1" />
      </app-container>
    </div>
  </div>
  <div class="my-8">
    <app-container class="flex max-h-[800px] justify-between gap-6">
      <div class="relative w-full flex-1 bg-[#f5f5f5]">
        <div class="absolute inset-0 p-6">
          <p class="text-[20px] font-semibold">Coats</p>
          <p class="mt-2 inline border-b border-gray-800 text-[14px]">
            Explore
          </p>
        </div>
        <div class="w-full">
          <NuxtImg
            src="/images/example-1.png"
            class="h-full w-full object-cover"
          />
        </div>
      </div>
      <div class="flex w-full flex-1 flex-col justify-between gap-6">
        <div
          class="relative flex h-full w-full flex-1 justify-end bg-[#f5f5f5]"
        >
          <div class="h-full">
            <NuxtImg src="/images/example-1.png" class="h-full object-cover" />
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
            <NuxtImg src="/images/example-1.png" class="h-full object-cover" />
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
      <div class="grid grid-cols-3 gap-8">
        <div v-for="item in 10" :key="item" class="w-full">
          <div>
            <NuxtImg src="/images/example-1.png" class="w-full object-cover" />
            <div class="text-center text-[15px] font-semibold">
              <p>Malqa pullover</p>
              <p>$56.00</p>
            </div>
          </div>
        </div>
      </div>
    </app-container>
  </div>
</template>

<script lang="js" setup>
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
const carouselConfig = {
  itemsToShow: 1,
  wrapAround: true,
  autoplay: 3000,
  duration: 1000,
};
</script>
