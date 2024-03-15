<template>
  <div class="d-flex align-center h-screen pa-6 body">
    <div class="d-flex flex-column w-100 mb-16 ga-4 align-center">
      <span class="text-h4 text-center text-white">Find your drive</span>
      <v-text-field
        class="responsive-text-field"
        label="find something..."
        variant="solo"
      ></v-text-field>
    </div>
  </div>
</template>
<script setup>
</script>
<style scoped>
.body {
  background-image: url("https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  background-size: cover;
}
.responsive-text-field {
  width: 100%;
}

@media (min-width: 768px) {
  .responsive-text-field {
    width: 50%;
  }
}
</style>