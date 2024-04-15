<template>
  <div class="flex h-screen justify-center items-center flex-col">
    <h1 class="text-6xl sm:text-9xl">{{ error.statusCode }}</h1>
    <p class="my-5 text-4xl">{{ error.message }}</p>
    <v-btn @click="handleReturn" flat small color="primary">Go back</v-btn>
  </div>
</template>

<script setup lang="ts">
const error = useError();

const handleReturn = () => {
  clearError({
    redirect: "/",
  });
};
</script>

<style scoped>
</style>