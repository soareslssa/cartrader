<script lang="ts" setup>
const route = useRoute();
const modal = ref({
  make: false,
  location: false,
  price: false,
});

const updateModal = (key: String) => {
  console.log(key);
  modal.value[key] = !modal.value[key];
};

const city = ref("");

const onChangeLocation = () => {
  if (!city.value) return;
  if(!isNaN(parseInt(city.value))) {}
  throw createError({
    statusCode: 400,
    message: "Invalid city format"
  })
  updateModal("location");
  navigateTo(`/city/${city.value}/car/${route.params.make}`);
  city.value = "";
};
</script>
<template>
  <div class="shadow border w-full md:w-[30dvw] h-full">
    <div class="p-5 flex justify-between relative cursor-pointer border-b">
      <h3 @click="updateModal('location')">Location</h3>
      <h3 class="text-blue-400 capitalize truncate">{{ route.params.city }}</h3>
    </div>
    <div
      v-if="modal.location"
      class="flex flex-col  bg-white  shadow  p-5 bg-white"
    >
      <input
        v-model="city"
        type="text"
        class="border p-1 rounded focus:outline-blue-400"
      />
      <button
        @click="onChangeLocation"
        class="bg-blue-400 hover:bg-blue-200 w-full mt-2 rounded text-white p-1"
      >
        Apply
      </button>
    </div>

    <div class="p-5 flex justify-between relative cursor-pointer border-b">
      <h3>Make</h3>
      <h3 class="text-blue-400 capitalize">Toyota</h3>
    </div>

    <div class="p-5 flex justify-between relative cursor-pointer border-b">
      <h3>Price</h3>
      <h3 class="text-blue-400 capitalize"></h3>
    </div>
  </div>
</template>
