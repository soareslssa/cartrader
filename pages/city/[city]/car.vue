<script setup>
const route = useRoute();
const { toTitleCase } = useUtilities();

useHead({
  title: `${
    route.params.make ? toTitleCase(route.params.make) : "Cars"
  } in ${toTitleCase(route.params.city)}`,
});

definePageMeta({
  layout: "custom"
})
</script>
<template>
  <div class="mt-10 flex flex-col md:flex-row gap-6 md:gap-2">
    <CarSideBar />
    <NuxtPage />
  </div>
</template>