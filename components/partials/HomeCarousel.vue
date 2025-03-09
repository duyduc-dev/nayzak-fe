<script setup lang="ts">
import { Carousel, Slide } from "vue3-carousel";

const carouselConfig = {
  itemsToShow: 1,
  wrapAround: true,
  // autoplay: 3000,
};
</script>

<template>
  <div class="relative flex min-h-screen flex-col bg-[#eab4b1] md:block">
    <Carousel class="hidden h-full flex-1 md:flex" v-bind="carouselConfig">
      <Slide v-for="slide in 10" :key="slide" class="flex h-full">
        <div class="flex h-full w-full pt-[64px] md:min-h-screen">
          <div class="hidden md:block md:flex-1" />
          <div class="flex-1">
            <div class="flex h-full items-end">
              <NuxtImg
                src="/images/example.png"
                class="mx-auto mt-auto object-cover md:mx-0 md:h-[80%]"
              />
            </div>
          </div>
        </div>
      </Slide>
    </Carousel>
    <div class="flex h-full flex-1 items-end pt-[64px] md:hidden">
      <Carousel class="flex h-full" v-bind="carouselConfig">
        <Slide v-for="slide in 10" :key="slide" class="flex h-full">
          <div class="flex h-full w-full">
            <div class="flex-1">
              <div class="flex h-full items-end">
                <NuxtImg
                  src="/images/example.png"
                  class="mx-auto mt-auto object-cover md:mx-0 md:h-[80%]"
                />
              </div>
            </div>
          </div>
        </Slide>
      </Carousel>
    </div>
    <div
      class="z-[999] flex bg-[#f5f5f5] pt-5 pb-4 md:absolute md:inset-0 md:bg-transparent md:pt-[64px] md:pb-0"
    >
      <app-container class="h-full">
        <div
          class="flex h-full w-full flex-1 flex-col justify-center md:max-w-[35vw]"
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
        <div class="hidden flex-1 md:block" />
      </app-container>
    </div>
  </div>
</template>

<style scoped>
.carousel__slide {
  height: 100%;
}
</style>
