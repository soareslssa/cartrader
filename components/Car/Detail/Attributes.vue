<script setup lang="ts">
const props = defineProps({
  features: Array,
});
</script>
<template>
  <div class="pa-2 border-b">
    <v-chip
      v-for="(feature, index) in features"
      :key="index"
      class="ma-2"
      color="primary"
    >
      {{ feature }}
    </v-chip>
  </div>
</template>