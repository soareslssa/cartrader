<script lang="ts" setup>
const city = ref<string>("");
const cityError = ref<boolean>(false);

const handleSearch = () => {
  if (!city.value) {
    return cityError.value = true;
  }

  navigateTo(`/city/${city.value}/car`);
};
</script>
<template>
  <div
    class="font-serif w-[1000px] text-2xl rounded-full bg-white flex justify-between overflow-hidden drop-shadow-2xl mx-auto"
  >
    <input
      type="text"
      class="py-3 px-5 w-full text-2xl rounded-full focus:outline-none"
      placeholder="Search by city..."
      :class="cityError ? 'border-2 border-red-500': ''"
      v-model="city"
    />
    <button class="bg-sky-500 px-10 text-white" @click="handleSearch">
      Search
    </button>
  </div>
</template>