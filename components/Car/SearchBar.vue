<script lang="ts" setup>
const city = ref<string>("");
const cityError = ref<boolean>(false);

const handleSearch = () => {
  if (!city.value) {
    return (cityError.value = true);
  }

  navigateTo(`/city/${city.value}/car`);
};
</script>
<template>
  <UButtonGroup size="xl" orientation="horizontal" >
    <UInput v-model="city" required />
    <UButton
      @click="handleSearch"
      icon="i-material-symbols-search"
      color="blue"
    />
  </UButtonGroup>
</template>