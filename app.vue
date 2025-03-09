<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: "Nayzak",
  meta: [
    { name: "description", content: "Nayzak shopping" },
    { property: "og:title", content: "Nayzak shopping" },
    { property: "og:description", content: "Nayzak shopping" },
    { name: "robots", content: "index, follow" },
  ],
});

useSeoMeta({
  title: "Nayzak shopping",
  ogTitle: "Nayzak shoppings",
  description: "Nayzak shopping",
  ogDescription: "Nayzak shopping",
});
</script>
