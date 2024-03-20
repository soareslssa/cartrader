<script setup>
const route = useRoute();
const { toTitleCase } = useString();

useHead({
  title: `${toTitleCase(route.params.name)}`,
});

definePageMeta({
  layout: "custom",
});
</script>
<template>
  <div>
    <CarDetailHero />
  </div>

  <CarDetailAttributes />

  <CarDetailDescription />
</template>