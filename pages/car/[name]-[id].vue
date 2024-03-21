<script lang="ts" setup>
const route = useRoute();
const { toTitleCase } = useUtilities();

const props = defineProps({
  car: Object,
});

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