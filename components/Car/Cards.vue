<script setup lang="ts">
const { cars } = useCars();

const favorite = useLocalStorage("favorite", {});

const handleFavorite = (id) => {
  if (id in favorite.value) {
    delete favorite.value[id];
    return;
  }

  favorite.value = {
    ...favorite.value,
    [id]: true,
  };
};
</script>
<template>
  <div class="w-full">
    <CarCard v-for="car in cars" :key="car.id" :car="car" :favored="car.id in favorite" @favor="handleFavorite" />
  </div>
</template>