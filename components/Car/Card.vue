<script setup lang="ts">
const props = defineProps({
  car: Object,
});
</script>
<template>
  <div
    @click="navigateTo(`/car/${car.name}-${car.id}`)"
    class="shadow border w-full overflow-hidden mb-5 cursor-pointer h-full"
  >
    <div class="flex flex-col md:flex-row h-full">
      <img :src="car.url" alt="" class=" w-full md:w-[300px] h-full" />
      <div class="p-4 flex flex-col">
        <div>
          <h1 class="text-2xl text-blue-700">{{ car.name }}</h1>
          <p class="text-gray-700 truncate ">
            {{ car.description }}
          </p>
        </div>
        <h1 class="mt-auto text-xl">${{ car.price }}</h1>
      </div>
    </div>
  </div>
</template>