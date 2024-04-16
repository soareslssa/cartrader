<script setup lang="ts">
import heartOutline from "@/assets/images/heartOutline.png";
import heartFilled from "@/assets/images/heartFilled.png";

const props = defineProps({
  car: Object,
  favored: Boolean
});

const emit = defineEmits(['favor']);

</script>
<template>
  <div class="shadow border w-full overflow-hidden mb-5 cursor-pointer h-full">
    <div class="flex flex-col md:flex-row h-full">
      <NuxtImg
        :src="car.url"
        alt=""
        class="w-full md:w-[300px] h-full"
        @click="navigateTo(`/car/${car.name}-${car.id}`)"
      />
      <div class="p-4 flex flex-col">
        <div class="w-full flex flex-wrap justify-between">
          <div class="flex flex-grow">
            <h1 class="text-2xl text-blue-700">{{ car.name }}</h1>
          </div>
          <div>
            <img
              class="size-6"
              :src="favored ? heartFilled : heartOutline"
              @click="emit('favor', car.id)"
            />
          </div>
        </div>
        <p class="text-gray-700">
          {{ car.description }}
        </p>

        <h1 class="mt-auto text-xl">${{ car.price }}</h1>
      </div>
    </div>
  </div>
</template>