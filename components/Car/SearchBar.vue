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
  <div
    class="font-serif md:w-1/2 w-80 text-sm md:text-2xl rounded-full bg-white flex justify-between overflow-hidden drop-shadow-2xl mx-auto"
  >
    <input
      type="text"
      class="py-3 px-5 w-full text-sm md:text-2xl rounded-full focus:outline-none"
      placeholder="Search by city..."
      :class="cityError ? 'border-2 border-red-500' : ''"
      v-model="city"
    />
    <button class="bg-sky-500 px-10 text-white" @click="handleSearch">
      Search
    </button>
    <v-snackbar v-model="cityError" color="warning"
      >Campo necessário</v-snackbar
    >
  </div>
</template>