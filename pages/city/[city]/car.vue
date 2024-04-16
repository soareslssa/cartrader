<script setup>
const route = useRoute();
const { toTitleCase } = useUtilities();

useHead({
  title: `${
    route.params.make ? toTitleCase(route.params.make) : "Cars"
  } in ${toTitleCase(route.params.city)}`,
});

definePageMeta({
  layout: "custom",
});
</script>
<template>
  <div class="mt-10 flex flex-col md:flex-row gap-6 md:gap-2">
    <NuxtErrorBoundary>
      <CarSideBar />
      <NuxtPage />
      <template #error="{ error }">
        <div class="text-center mx-auto flex flex-col">
          <h1 class="text-5xl text-red-500">Sorry, something went wrong</h1>
          <code>{{ error }}</code>
          <button class="text-white bg-blue-400 px-10 py-3 mt-4 rounded hover:bg-blue-200" @click="error.value = null">
            Return
          </button>
        </div>
      </template>
    </NuxtErrorBoundary>
  </div>
</template>